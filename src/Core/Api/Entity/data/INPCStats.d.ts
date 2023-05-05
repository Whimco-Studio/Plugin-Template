/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface INPCStats {
	getMaxHealth(): number;

	setMaxHealth(maxHealth: number): void;

	/**
	 * @param {number} type 0:Melee, 1:Ranged, 2:Explosion, 3:Knockback
	 * @return {number} Returns value between 0 and 2. 0 being no resistance so increased damage and 2 being fully resistant. Normal is 1
	 */
	getResistance(status: number): number;

	setResistance(status: number, value: number): void;

	/**
	 * @return {number} Returns the combat health regen per second
	 */
	getCombatRegen(): number;

	/**
	 * @param {number} regen The combat health regen per second
	 */
	setCombatRegen(regen: number): void;

	/**
	 * @return {number} Returns the health regen per second when not in combat
	 */
	getHealthRegen(): number;

	/**
	 * @param {number} regen The health regen per second when not in combat
	 */
	setHealthRegen(regen: number): void;

	getMelee(): INPCMelee;

	getRanged(): INPCRanged;

	/**
	 * @param {number} type 0:Potion, 1:Falldamage, 2:Sunburning, 3:Fire, 4:Drowning, 5:Cobweb
	 * @return {boolean}
	 */
	getImmune(status: number): boolean;

	/**
	 * @param {number} type 0:Potion, 1:Falldamage, 2:Sunburning, 3:Fire, 4:Drowning, 5:Cobweb
	 * @param {boolean} bo
	 */
	setImmune(status: number, bo: boolean): void;

	/**
	 * (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
	 * @param {number} type
	 */
	setCreatureType(status: number): void;

	/**
	 * (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
	 * @return {number}
	 */
	getCreatureType(): number;

	/**
	 * @return {number} 0:Yes, 1:Day, 2:Night, 3:No, 4:Naturally
	 */
	getRespawnType(): number;

	/**
	 * @param {number} type 0:Yes, 1:Day, 2:Night, 3:No, 4:Naturally
	 */
	setRespawnType(status: number): void;

	getRespawnTime(): number;

	setRespawnTime(seconds: number): void;

	getHideDeadBody(): boolean;

	setHideDeadBody(hide: boolean): void;

	getAggroRange(): number;

	setAggroRange(range: number): void;
}
