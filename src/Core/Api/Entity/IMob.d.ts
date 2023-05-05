interface IMob<T extends IEntityLiving> {
	/**
	 * @return {boolean} Whether or not this entity is navigating somewhere
	 */
	isNavigating(): boolean;

	/**
	 * Stop navigating wherever this npc was walking to
	 */
	clearNavigation(): void;

	/**
	 * Start path finding toward this target
	 * @param {number} x Destination x position
	 * @param {number} y Destination x position
	 * @param {number} z Destination x position
	 * @param {number} speed
	 */
	navigateTo(pos: Vector3, speed: number): boolean;

	getNavigationPath(): Vector3[];
}
