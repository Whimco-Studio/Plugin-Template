interface INPCRanged {
	getStrength(): number;

	setStrength(strength: number): void;

	/**
	 * @return {number} Speed of the projectile shot
	 */
	getSpeed(): number;

	/**
	 * @param {number} speed Speed of the projectile shot (default:10)
	 */
	setSpeed(speed: number): void;

	/**
	 * Burst is the ammount shot at a time. E.g. a burst of 5 burst delay of 2 and a normal delay of 20,
	 * will shoot 5 projectiles with a delay of 2 ticks every 20 ticks.
	 * @return {number}
	 */
	getBurst(): number;

	setBurst(count: number): void;

	getBurstDelay(): number;

	setBurstDelay(delay: number): void;

	getKnockback(): number;

	setKnockback(punch: number): void;

	getSize(): number;

	setSize(size: number): void;

	getRender3D(): boolean;

	setRender3D(render3d: boolean): void;

	getSpins(): boolean;

	setSpins(spins: boolean): void;

	getSticks(): boolean;

	setSticks(sticks: boolean): void;

	getHasGravity(): boolean;

	setHasGravity(hasGravity: boolean): void;

	getAccelerate(): boolean;

	setAccelerate(accelerate: boolean): void;

	getExplodeSize(): number;

	setExplodeSize(size: number): void;

	/**
	 * @see noppes.npcs.api.constants.PotionEffectType
	 * @return {number}
	 */
	getEffectType(): number;

	getEffectTime(): number;

	getEffectStrength(): number;

	setEffect(status: number, strength: number, time: number): void;

	getGlows(): boolean;

	setGlows(glows: boolean): void;

	/**
	 * @see noppes.npcs.api.constants.ParticleType
	 * @return {number}
	 */
	getParticle(): number;

	setParticle(status: number): void;

	/**
	 * @param {number} type 0:Fire
	 * @return {string}
	 */
	getSound(status: number): string;

	/**
	 * @param {number} type 0:Fire, 1:Hit, 2:Ground
	 * @param {string} sound
	 */
	setSound(status: number, sound: string): void;

	getShotCount(): number;

	setShotCount(count: number): void;

	getHasAimAnimation(): boolean;

	setHasAimAnimation(aim: boolean): void;

	getAccuracy(): number;

	setAccuracy(accuracy: number): void;

	getRange(): number;

	setRange(range: number): void;

	getDelayMin(): number;

	getDelayMax(): number;

	/**
	 * @return {number} Returns a value between delayMin and delayMax
	 */
	getDelayRNG(): number;

	setDelay(min: number, max: number): void;

	getFireType(): number;

	setFireType(status: number): void;

	getMeleeRange(): number;

	setMeleeRange(range: number): void;
}
