interface IEntityLiving extends IEntity<Humanoid, BasePart, HumanoidDescription> {
	isAttacking(): boolean;

	setAttackTarget(living: ICustomNPC | Player | undefined): void;

	getAttackTarget(): ICustomNPC | Player | undefined;

	/**
	 * @return {*} Returns the last Entity this Entity attacked
	 */
	getLastAttacked(): ICustomNPC | Player | undefined;

	/**
	 * @return {number} Returns the age of this entity when it was last attacked
	 */
	getLastAttackedTime(): number;

	canSeeEntity?(entity: ICustomNPC | Player | undefined): boolean;

	swingMainhand(): void;

	swingOffhand(): void;

	setMainhandItem(): void;

	getOffhandItem(): void;

	setOffhandItem(): void;
}
