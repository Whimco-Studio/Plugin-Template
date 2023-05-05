/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface INPCAi {
	getAnimation(): number;

	setAnimation(status: number): void;

	/**
	 * @return {number} Returns the npcs current animation. E.g. when npc is set to LYING it wont be lying while walking so it will be NORMAL
	 * @see noppes.npcs.api.constants.AnimationType
	 */
	getCurrentAnimation(): number;

	/**
	 * @param {boolean} bo Whether or not the npc will try to return to his home position
	 */
	setReturnsHome(bo: boolean): void;

	getReturnsHome(): boolean;

	/**
	 * @return {number} Retaliation type. 0:Normal, 1:Panic, 2:Retreat, 3:Nothing
	 */
	getRetaliateType(): number;

	/**
	 * @param {number} type Retaliation type. 0:Normal, 1:Panic, 2:Retreat, 3:Nothing
	 */
	setRetaliateType(status: number): void;

	/**
	 * @return {number} 0:Standing, 1:Wandering, 2:MovingPath
	 */
	getMovingType(): number;

	/**
	 * @param {number} type 0:Standing, 1:Wandering, 2:MovingPath
	 */
	setMovingType(status: number): void;

	/**
	 * @return {number} type 0:Ground, 1:Flying, 2:Swimming
	 */
	getNavigationType(): number;

	/**
	 * @param {number} type 0:Ground, 1:Flying, 2:Swimming
	 */
	setNavigationType(status: number): void;

	/**
	 * @return {number} 0:RotateBody, 1:NoRotation, 2:Stalking, 3:HeadRotation
	 */
	getStandingType(): number;

	/**
	 * @param {number} type 0:RotateBody, 1:NoRotation, 2:Stalking, 3:HeadRotation
	 */
	setStandingType(status: number): void;

	/**
	 * @return {boolean} Returns whether or not he can attack invisible entities
	 */
	getAttackInvisible(): boolean;

	setAttackInvisible(attack: boolean): void;

	getWanderingRange(): number;

	/**
	 * @param {number} range (1-50)
	 */
	setWanderingRange(range: number): void;

	getInteractWithNPCs(): boolean;

	setInteractWithNPCs(interact: boolean): void;

	getStopOnInteract(): boolean;

	setStopOnInteract(stopOnInteract: boolean): void;

	getWalkingSpeed(): number;

	/**
	 * @param {number} speed 0-10
	 */
	setWalkingSpeed(speed: number): void;

	/**
	 * @return {number} 0:Looping, 1:Backtracking
	 */
	getMovingPathType(): number;

	getMovingPathPauses(): boolean;

	/**
	 * @param {number} type 0:Looping, 1:Backtracking
	 * @param {boolean} pauses
	 */
	setMovingPathType(status: number, pauses: boolean): void;

	getDoorInteract(): number;

	setDoorInteract(status: number): void;

	getCanSwim(): boolean;

	setCanSwim(canSwim: boolean): void;

	/**
	 * @return {number} 0:Darkness, 1:Sunlight, 2:Disabled
	 */
	getSheltersFrom(): number;

	/**
	 * @param {number} type 0:Darkness, 1:Sunlight, 2:Disabled
	 */
	setSheltersFrom(status: number): void;

	/**
	 * @return {boolean} Whether the NPC requires Direct Line of Sight to Attack
	 */
	getAttackLOS(): boolean;

	/**
	 * @param {boolean} enabled Whether the NPC requires Direct Line of Sight to Attack
	 */
	setAttackLOS(enabled: boolean): void;

	getAvoidsWater(): boolean;

	setAvoidsWater(enabled: boolean): void;

	getLeapAtTarget(): boolean;

	setLeapAtTarget(leap: boolean): void;
}
