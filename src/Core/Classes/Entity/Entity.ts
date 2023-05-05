import { CollectionService } from "@rbxts/services";
import Bindings from "Core/Bin/Config/Binds";

type EntityProperties = {
	Character: Model | Actor;
	Pitch: number;
	Sneaking?: boolean;
	InWater: boolean;
	Age: number;
};

export default class Entity implements IEntity<Humanoid, BasePart, HumanoidDescription> {
	Character: Model | Actor;
	Pitch: number;
	Sneaking: boolean;
	Sprinting: boolean;
	InWater: boolean;
	Age: number;

	constructor(Info: EntityProperties) {
		this.Character = Info.Character;
		this.Pitch = 1;
		this.Sneaking = false;
		this.Sprinting = false;
		this.InWater = false;
		this.Age = tick();
	}

	/**
	 * @return {Model | Actor} Returns Character Model or Actor
	 */
	getCharacter(): Model | Actor {
		return this.Character;
	}

	setPosition(x: number, y: number, z: number): void {
		this.Character.PivotTo(new CFrame(new Vector3(x, y, z)));
	}

	/**
	 * @param {number} rotation The rotation to be set (0-360)
	 */
	setRotation(rotation: CFrame): void {
		this.Character.PivotTo(rotation);
	}

	/**
	 * @return {number} Current rotation of the entity
	 */
	getRotation(): CFrame {
		return this.Character.GetPivot();
	}

	/**
	 * @return {number} Returns the height of the bounding box
	 */
	getHeight(): number {
		return this.Character.GetExtentsSize().Y;
	}

	/**
	 * @return {number} Returns the eye height of the entity, used in this like canSee and such
	 */
	getEyeHeight?(): number;

	/**
	 * @return {number} Returns the width of the bounding box
	 */
	getWidth(): number {
		return this.Character.GetExtentsSize().X;
	}

	/**
	 * @param {number} pitch The viewing pitch
	 */
	setPitch(pitch: number): void {
		this.Pitch = pitch;
	}

	/**
	 * @return {number} Entities viewing pitch
	 */
	getPitch(): number {
		return this.Pitch;
	}

	getMount(): Model | Actor | void {
		return undefined;
	}

	setMount(entity: Model | Actor): void {}

	/**
	 * @return {IEntity<Humanoid, BasePart, HumanoidDescription>[]} Returns the entities riding this entity
	 */
	getRiders(): (Model | Actor)[] {
		return [];
	}

	/**
	 * @return {(Model | Actor)[]} Returns the entities riding this entity including the entities riding those entities
	 */
	getAllRiders(): (Model | Actor)[] {
		return [];
	}

	addRider(entity: Model | Actor): void {}

	clearRiders(): void {}

	/**
	 * @param {number} power How strong the knockback is
	 * @param {number} direction The direction in which he flies back (0-360). Usually based on getRotation()
	 */
	knockback(power: number, direction: CFrame): void {
		if (this.Character.GetPivot()) {
			//
		}
	}

	isSneaking(): boolean {
		return this.Sneaking;
	}

	isSprinting(): boolean {
		return this.Sprinting;
	}

	inWater(): boolean {
		return this.InWater;
	}

	/**
	 * Temp data stores anything but only untill it's reloaded
	 *
	 * public IData getTempdata();
	 *
	 * /**
	 * Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
	 *
	 * public IData getStoreddata();
	 *
	 * /**
	 * The Entity's extra stored NBT data
	 * @return {boolean} The Entity's extra stored NBT data
	 *
	 *
	 * public INbt getNbt();
	 */
	isAlive(): boolean {
		if (this.Character) {
			return true;
		}

		return false;
	}

	/**
	 * @return {number} The age of this entity in ticks
	 */
	getAge(): number {
		return this.Age;
	}

	/**
	 * Despawns this entity. Removes it permanently
	 */
	despawn(): void {
		this.Character.Destroy();

		task.spawn(() => {
			table.clear(this);
			table.freeze(this);
		});
	}

	/**
	 * Spawns this entity into the world (For NPCs dont forget to set their home position)
	 */
	spawn(): void {}

	/**
	 * Kill the entity, doesnt't despawn it
	 */
	kill(): void {
		const Humanoid = this.Character.FindFirstChild("Humanoid");
		if (Humanoid?.IsA("Humanoid")) {
			Humanoid.Health = 0;
		}
	}

	/**
	 * @return {boolean} Return whether or not this entity is on fire
	 */
	// isBurning(): boolean;

	/**
	 * @param {number} seconds Amount of seconds this entity will burn.
	 */
	// setBurning(seconds: number): void;

	/**
	 * Removes fire from this entity
	 */
	// extinguish?(): void;

	/**
	 * @return {string} Name as which it's registered in minecraft
	 */
	getTypeName(): string {
		return "Type names do not exist yet";
	}

	/**
	 * @return {number} Returns the {@link EntitiesType} of this entity
	 */
	getType(): number {
		return 0;
	}

	/**
	 * @param {number} type {@link EntitiesType} to check
	 * @return {boolean} Returns whether the entity is type of the given {@link EntitiesType}
	 */
	typeOf(status: number): boolean {
		return false;
	}

	/**
	 * Expert users only
	 * @return {string} Returns CustomNPCs entity
	 *
	 */
	getUUID(): string {
		return this.Character.GetDebugId();
	}

	generateNewUUID(): string {
		return "Cannot Generate UUID";
	}

	/**
	 * Stores the entity as clone server side
	 * @param {number} tab
	 * @param {string} name
	 */
	storeAsClone(tab: number, name: string): void {
		Bindings.Core.Entity.SaveAsClone.Invoke(tab, name, this.Character);
	}

	/**
	 * Gets the entities within distance the npc is looking at sorted by distance
	 * @param {number} distance
	 * @param {boolean} stopOnLiquid
	 * @param {boolean} ignoreBlockWithoutBoundingBox
	 * @return
	 * @return {IEntity<Humanoid, BasePart, HumanoidDescription>[]}
	 */
	// rayTraceEntities(
	// 	distance: number,
	// 	stopOnLiquid: boolean,
	// 	ignoreBlockWithoutBoundingBox: boolean,
	// ): IEntity<Humanoid, BasePart, HumanoidDescription>[];

	/**
	 * Tags are used by scoreboards and can be used in commands
	 * @return {java.lang.String[]}
	 */
	getTags(): string[] {
		return CollectionService.GetTags(this.Character);
	}

	addTag(tag: string): void {
		CollectionService.AddTag(this.Character, tag);
	}

	hasTag(tag: string): boolean {
		return CollectionService.HasTag(this.Character, tag);
	}

	removeTag(tag: string): void {
		CollectionService.RemoveTag(this.Character, tag);
	}

	/**
	 * Play specific minecraft animations client side
	 * 0 and 3 are for LivingEntity entities and 2 is only for players
	 * @param {number} type 0:Swing main hand, 1:Hurt animation, 2:Wakeup Player 3:Swing offhand hand, 4:Crit particle, 5:Spell crit particle
	 */
	playAnimation(status: number): void {}

	damage(amount: number): void {
		const Humanoid = this.Character.FindFirstChild("Humanoid");
		if (Humanoid?.IsA("Humanoid")) {
			Humanoid.TakeDamage(amount);
		}
	}

	getMotionX(): number {
		const Part =
			this.Character.FindFirstChildOfClass("BasePart") || this.Character.FindFirstChildOfClass("MeshPart");

		if (Part) {
			return Part.AssemblyLinearVelocity.X;
		}

		return 0;
	}

	getMotionY(): number {
		const Part =
			this.Character.FindFirstChildOfClass("BasePart") || this.Character.FindFirstChildOfClass("MeshPart");

		if (Part) {
			return Part.AssemblyLinearVelocity.Y;
		}

		return 0;
	}

	getMotionZ(): number {
		const Part =
			this.Character.FindFirstChildOfClass("BasePart") || this.Character.FindFirstChildOfClass("MeshPart");

		if (Part) {
			return Part.AssemblyLinearVelocity.Z;
		}

		return 0;
	}

	setMotionX(motion: number): void {
		const Part =
			this.Character.FindFirstChildOfClass("BasePart") || this.Character.FindFirstChildOfClass("MeshPart");

		if (Part) {
			const Vel = Part.AssemblyLinearVelocity;
			Part.AssemblyLinearVelocity = new Vector3(motion, Vel.Y, Vel.Z);
		}
	}

	setMotionY(motion: number): void {
		const Part =
			this.Character.FindFirstChildOfClass("BasePart") || this.Character.FindFirstChildOfClass("MeshPart");

		if (Part) {
			const Vel = Part.AssemblyLinearVelocity;
			Part.AssemblyLinearVelocity = new Vector3(Vel.X, motion, Vel.Z);
		}
	}

	setMotionZ(motion: number): void {
		const Part =
			this.Character.FindFirstChildOfClass("BasePart") || this.Character.FindFirstChildOfClass("MeshPart");

		if (Part) {
			const Vel = Part.AssemblyLinearVelocity;
			Part.AssemblyLinearVelocity = new Vector3(Vel.X, Vel.Y, motion);
		}
	}

	/**
	 * @return {string} Returns the current name displayed by the entity
	 */
	getName(): string {
		return this.Character.Name;
	}

	/**
	 * @param {string} name Set a custom name for this entity
	 */
	setName(name: string): void {
		this.Character.Name;
	}

	hasCustomName(): boolean {
		return false;
	}

	/**
	 * @return {string} Returns the original name incase a custom name has been set
	 */
	getEntityName(): string {
		return "Entity names do not exist yet";
	}
}
