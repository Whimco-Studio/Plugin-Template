interface IProjectile {
	getItem(): MeshPart | Model | BasePart | void;
	setItem(Item: MeshPart | Model | BasePart): void;

	/**
	 * @return Returns whether the arrow flies in a straight line or not
	 */

	/**
	 * @return Returns whether the arrow flies in a straight line or not
	 */
	getHasGravity(): boolean;

	/**
	 * @param bo Whether the arrow flies in a straight line or not
	 */
	setHasGravity(bo: boolean): void;

	getAccuracy(): number;

	setAccuracy(accuracy: number): void;

	/**
         * Entity where the projectile heads towards
         * The position for the projectile needs to have been set for this
        public void setHeading(IEntity entity);
    
         */

	/**
	 * Position where the projectile heads towards.
	 * The position for the projectile needs to have been set for this
	 */
	setHeading(Destination: IEntityLiving | Vector3 | BasePart): void;

	/**
	 * @param yaw Rotation yaw
	 * @param pitch Rotation pitch
	 */
	// public void setHeading(float yaw, float pitch);

	/**
	 * For scripters to enable projectile events in their current scripting container
	 */
	// public void enableEvents();
}
