interface IEntity<T extends Humanoid, BasePart, HumanoidDescription> {
	/**
	 * @return {Model | Actor} Returns Character Model or Actor
	 */
	getCharacter(): Model | Actor;

	setPosition(x: number, y: number, z: number): void;

	/**
	 * @param {number} rotation The rotation to be set (0-360)
	 */
	setRotation(rotation: CFrame): void;

	/**
	 * @return {CFrame} Current rotation of the entity
	 */
	getRotation(): CFrame;

	/**
	 * @return {number} Returns the height of the bounding box
	 */
	getHeight?(): number;

	/**
	 * @return {number} Returns the eye height of the entity, used in this like canSee and such
	 */
	getEyeHeight?(): number;

	/**
	 * @return {number} Returns the width of the bounding box
	 */
	getWidth(): number;

	/**
	 * @param {number} pitch The viewing pitch
	 */
	setPitch(pitch: number): void;

	/**
	 * @return {number} Entities viewing pitch
	 */
	getPitch(): number;

	getMount(): Model | Actor | void;

	setMount(entity: Model | Actor): void;

	/**
	 * @return {(Model | Actor)[]} Returns the entities riding this entity
	 */
	getRiders(): (Model | Actor)[];

	/**
	 * @return {(Model | Actor)[]} Returns the entities riding this entity including the entities riding those entities
	 */
	getAllRiders(): (Model | Actor)[];

	addRider(entity: Model | Actor): void;

	clearRiders(): void;

	/**
	 * @param {number} power How strong the knockback is
	 * @param {number} direction The direction in which he flies back (0-360). Usually based on getRotation()
	 */
	knockback(power: number, direction: CFrame): void;

	isSneaking(): boolean;

	isSprinting(): boolean;

	inWater(): boolean;

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
	isAlive(): boolean;

	/**
	 * @return {number} The age of this entity in ticks
	 */
	getAge(): number;

	/**
	 * Despawns this entity. Removes it permanently
	 */
	despawn(): void;

	/**
	 * Spawns this entity into the world (For NPCs dont forget to set their home position)
	 */
	spawn(): void;

	/**
	 * Kill the entity, doesnt't despawn it
	 */
	kill(): void;

	/**
	 * @return {boolean} Return whether or not this entity is on fire
	 */
	isBurning?(): boolean;

	/**
	 * @param {number} seconds Amount of seconds this entity will burn.
	 */
	setBurning?(seconds: number): void;

	/**
	 * Removes fire from this entity
	 */
	extinguish?(): void;

	/**
	 * @return {string} Name as which it's registered in minecraft
	 */
	getTypeName(): string;

	/**
	 * @return {number} Returns the {@link EntitiesType} of this entity
	 */
	getType(): number;

	/**
	 * @param {number} type {@link EntitiesType} to check
	 * @return {boolean} Returns whether the entity is type of the given {@link EntitiesType}
	 */
	typeOf(status: number): boolean;

	/**
	 * Expert users only
	 * @return {string} Returns CustomNPCs entity
	 *
	 */
	getUUID(): string;

	generateNewUUID(): string;

	/**
	 * Stores the entity as clone server side
	 * @param {number} tab
	 * @param {string} name
	 */
	storeAsClone(tab: number, name: string): void;

	/**
	 * Gets the entities within distance the npc is looking at sorted by distance
	 * @param {number} distance
	 * @param {boolean} stopOnLiquid
	 * @param {boolean} ignoreBlockWithoutBoundingBox
	 * @return
	 * @return {IEntity<Humanoid, BasePart, HumanoidDescription>[]}
	 */
	rayTraceEntities?(
		distance: number,
		stopOnLiquid: boolean,
		ignoreBlockWithoutBoundingBox: boolean,
	): IEntity<Humanoid, BasePart, HumanoidDescription>[];

	/**
	 * Tags are used by scoreboards and can be used in commands
	 * @return {java.lang.String[]}
	 */
	getTags(): string[];

	addTag(tag: string): void;

	hasTag(tag: string): boolean;

	removeTag(tag: string): void;

	/**
	 * Play specific minecraft animations client side
	 * 0 and 3 are for LivingEntity entities and 2 is only for players
	 * @param {number} type 0:Swing main hand, 1:Hurt animation, 2:Wakeup Player 3:Swing offhand hand, 4:Crit particle, 5:Spell crit particle
	 */
	playAnimation(status: number): void;

	damage(amount: number): void;

	getMotionX(): number;

	getMotionY(): number;

	getMotionZ(): number;

	setMotionX(motion: number): void;

	setMotionY(motion: number): void;

	setMotionZ(motion: number): void;

	/**
	 * @return {string} Returns the current name displayed by the entity
	 */
	getName(): string;

	/**
	 * @param {string} name Set a custom name for this entity
	 */
	setName(name: string): void;

	hasCustomName(): boolean;

	/**
	 * @return {string} Returns the original name incase a custom name has been set
	 */
	getEntityName(): string;
}
