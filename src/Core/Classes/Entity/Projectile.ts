import { freeze } from "@rbxts/sift/out/Array";
type ProjectileProperties = {
	target: IEntityLiving | Vector3 | BasePart;
	item: MeshPart | BasePart | Model;
	accuracy: number;
};

export class Projectile implements IProjectile {
	target: IEntityLiving | Vector3 | BasePart;
	item: MeshPart | BasePart | Model;
	accuracy: number;
	gravity: boolean;

	constructor(Info: ProjectileProperties) {
		this.target = Info.target;
		this.item = Info.item;
		this.accuracy = Info.accuracy;
		this.gravity = true;
	}

	getItem(): MeshPart | Model | BasePart {
		return this.item;
	}
	setItem(Item: MeshPart | Model | BasePart): void {
		this.item = Item;
	}

	/**
	 * @return Returns whether the arrow flies in a straight line or not
	 */
	getHasGravity(): boolean {
		return this.gravity;
	}

	/**
	 * @param bo Whether the arrow flies in a straight line or not
	 */
	setHasGravity(bo: boolean): void {
		this.gravity = bo;
	}

	delete() {
		task.spawn(() => {
			table.clear(this);
			table.freeze(this);
		});
	}

	getAccuracy(): number {
		return this.accuracy;
	}

	setAccuracy(accuracy: number): void {
		this.accuracy = accuracy;
	}

	/**
         * Entity where the projectile heads towards
         * The position for the projectile needs to have been set for this
        public void setHeading(IEntity entity);
    
         */

	/**
	 * Position where the projectile heads towards.
	 * The position for the projectile needs to have been set for this
	 */
	setHeading(Destination: IEntityLiving | Vector3 | BasePart): void {
		if (typeIs(Destination, "Vector3")) {
			this.target = Destination;
		} else if (typeIs(Destination, "Instance") && Destination.IsA("BasePart")) {
			this.target = Destination.Position;
		} else {
			const Character = Destination.getCharacter();

			const TargetPart = Character.FindFirstChild("BasePart") || Character.FindFirstChild("MeshPart");

			if (TargetPart && (TargetPart.IsA("BasePart") || TargetPart.IsA("MeshPart"))) {
				this.target = TargetPart.Position;
			}
		}
	}
}
