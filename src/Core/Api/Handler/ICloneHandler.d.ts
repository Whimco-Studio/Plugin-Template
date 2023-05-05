export interface ICloneHandler {
	spawn(Pos: Vector3, tab: number, name: string, parent?: Instance): IEntity<Humanoid, BasePart, HumanoidDescription>;

	get(tab: number, name: string, parent?: Instance): IEntity<Humanoid, BasePart, HumanoidDescription>;

	set(tab: number, name: string, entity: IEntity<Humanoid, BasePart, HumanoidDescription>): void;

	remove(tab: number, name: string): void;
}
