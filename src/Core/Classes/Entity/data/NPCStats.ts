import NPCMelee from "./NPCMelee";
import NPCRanged from "./NPCRanged";

type NPCStatsProperties = {
	MaxHealth: number;
	Health: number;
	HealthRegen: number;
	CombatRegen: number;
	Melee: NPCMelee;
	Ranged: NPCRangedProperties;
	Immune: boolean[];
	CreatureType: number;
	RespawnType: number;
	RespawnTime: number;
	HideDeadBody: boolean;
	AggroRange: number;
	Resistance: [];
};

type NPCRangedProperties = {
	Strength: number;
	Speed: number;
	Burst: number;
	BurstDelay: number;
	Delay: number;
	Range: number;
	Knockback: number;
	Size: number;
	Render3D: boolean;
	Spins: boolean;
	Sticks: boolean;
	HasGravity: boolean;
	Accelerate: boolean;
	ExplosionSize: number;
	EffectType: number;
	EffectTime: number;
	EffectStrength: number;
	Glows: boolean;
	Particle: number;
	Sound: number[];
	ShotCount: number;
	HasAimAnimation: boolean;
	Accuracy: number;
	DelayMin: number;
	DelayMax: number;
	DelayRNG: number;
	Fire: number;
	Effect: number;
};

export default class NPCStats implements INPCStats {
	MaxHealth: number;
	Health: number;
	HealthRegen: number;
	Resistance: number[];
	CombatRegen: number;
	Melee: INPCMelee;
	Ranged: INPCRanged;
	Immune: boolean[];
	CreatureType: number;
	RespawnType: number;
	RespawnTime: number;
	HideDeadBody: boolean;
	AggroRange: number;
	constructor(Info?: NPCStatsProperties) {
		this.MaxHealth = Info?.MaxHealth || 100;
		this.Health = Info?.Health || this.MaxHealth;
		this.HealthRegen = Info?.HealthRegen || 1;
		this.Resistance = Info?.Resistance || [];
		this.CombatRegen = Info?.CombatRegen || 0;
		this.Melee = new NPCMelee(Info?.Melee);
		this.Ranged = new NPCRanged(Info?.Ranged);
		this.Immune = Info?.Immune || [true, true, true, true, true];
		this.CreatureType = Info?.CreatureType || 1;
		this.RespawnType = Info?.RespawnType || 0;
		this.RespawnTime = Info?.RespawnTime || 3;
		this.HideDeadBody = Info?.HideDeadBody || true;
		this.AggroRange = Info?.AggroRange || 25;
	}

	setHealth(value: number) {
		this.Health = value;
	}

	getMaxHealth(): number {
		return this.MaxHealth;
	}

	setMaxHealth(maxHealth: number): void {}

	/**
	 * @param {number} type 0:Melee, 1:Ranged, 2:Explosion, 3:Knockback
	 * @return {number} Returns value between 0 and 2. 0 being no resistance so increased damage and 2 being fully resistant. Normal is 1
	 */
	getResistance(status: number): number {
		return this.Resistance[status];
	}

	setResistance(status: number, value: number): void {
		this.Resistance[status] = value;
	}

	/**
	 * @return {number} Returns the combat health regen per second
	 */
	getCombatRegen(): number {
		return this.CombatRegen;
	}

	/**
	 * @param {number} regen The combat health regen per second
	 */
	setCombatRegen(regen: number): void {
		this.CombatRegen = regen;
	}

	/**
	 * @return {number} Returns the health regen per second when not in combat
	 */
	getHealthRegen(): number {
		return this.HealthRegen;
	}

	/**
	 * @param {number} regen The health regen per second when not in combat
	 */
	setHealthRegen(regen: number): void {
		this.HealthRegen = regen;
	}

	getMelee(): INPCMelee {
		return this.Melee;
	}

	getRanged(): INPCRanged {
		return this.Ranged;
	}

	/**
	 * @param {number} type 0:Potion, 1:Falldamage, 2:Sunburning, 3:Fire, 4:Drowning, 5:Cobweb
	 * @return {boolean}
	 */
	getImmune(status: number): boolean {
		return this.Immune[status];
	}

	/**
	 * @param {number} type 0:Potion, 1:Falldamage, 2:Sunburning, 3:Fire, 4:Drowning, 5:Cobweb
	 * @param {boolean} bo
	 */
	setImmune(status: number, bo: boolean): void {}

	/**
	 * (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
	 * @param {number} type
	 */
	setCreatureType(status: number): void {}

	/**
	 * (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
	 * @return {number}
	 */
	getCreatureType(): number {
		return this.CreatureType;
	}

	/**
	 * @return {number} 0:Yes, 1:Day, 2:Night, 3:No, 4:Naturally
	 */
	getRespawnType(): number {
		return this.RespawnTime;
	}

	/**
	 * @param {number} type 0:Yes, 1:Day, 2:Night, 3:No, 4:Naturally
	 */
	setRespawnType(status: number): void {
		this.RespawnType = status;

		// Change Bundle?
	}

	setRespawnTime(seconds: number): void {
		this.RespawnTime = seconds;
	}

	getRespawnTime(): number {
		return this.RespawnTime;
	}

	getHideDeadBody(): boolean {
		return this.HideDeadBody;
	}

	setHideDeadBody(hide: boolean): void {
		this.HideDeadBody = hide;
	}

	getAggroRange(): number {
		return this.AggroRange;
	}

	setAggroRange(range: number): void {
		this.AggroRange = range;
	}
}
