export default class NPCRanged implements INPCRanged {
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

	constructor(Info?: RangedProperties) {
		this.Strength = Info?.Strength || 0;
		this.Delay = Info?.Delay || 0;
		this.Range = Info?.Range || 25;
		this.Knockback = Info?.Knockback || 10;
		this.EffectType = Info?.EffectType || 15;
		this.EffectTime = Info?.EffectTime || 15;
		this.EffectStrength = Info?.EffectStrength || 15;
		this.Effect = Info?.Effect || 12;
		this.Burst = Info?.Burst || 1;
		this.BurstDelay = Info?.BurstDelay || 1;
		this.Size = Info?.Size || 12;
		this.Speed = Info?.Speed || 12;
		this.Render3D = Info?.Render3D || true;
		this.Spins = Info?.Spins || false;
		this.Sticks = Info?.Sticks || false;
		this.HasGravity = Info?.HasGravity || true;
		this.Accelerate = Info?.Accelerate || true;
		this.ExplosionSize = Info?.ExplosionSize || 0;
		this.Glows = Info?.Glows || false;
		this.Particle = Info?.Particle || 0;
		this.Sound = Info?.Sound || [0, 0, 0];
		this.ShotCount = Info?.ShotCount || 1;
		this.HasAimAnimation = Info?.HasAimAnimation || false;
		this.Accuracy = Info?.Accuracy || 1;
		this.DelayMin = Info?.DelayMin || 50;
		this.DelayMax = Info?.DelayMax || 100;
		this.DelayRNG = Info?.DelayRNG || 25;
		this.Fire = Info?.Fire || 25;
	}

	getStrength(): number {
		return this.Strength;
	}

	setStrength(strength: number): void {
		this.Strength = strength;
	}

	getDelay(): number {
		return this.Delay;
	}

	getRange(): number {
		return this.Range;
	}

	setRange(range: number): void {
		this.Range = range;
	}

	getKnockback(): number {
		return this.Knockback;
	}

	setKnockback(knockback: number): void {
		this.Knockback = knockback;
	}

	getEffectType(): number {
		return this.EffectType;
	}

	getEffectTime(): number {
		return this.EffectTime;
	}

	getEffectStrength(): number {
		return this.EffectStrength;
	}

	setEffect(status: number, strength: number, time: number): void {}

	getSpeed(): number {
		return this.Speed;
	}
	setSpeed(speed: number): void {
		this.Speed = speed;
	}

	getAccelerate(): boolean {
		return this.Accelerate;
	}

	setAccelerate(accelerate: boolean): void {
		this.Accelerate = accelerate;
	}

	getAccuracy(): number {
		return this.Accuracy;
	}

	setAccuracy(accuracy: number): void {
		this.Accuracy = accuracy;
	}

	getBurst(): number {
		return this.Burst;
	}

	setBurst(count: number): void {
		this.Burst = count;
	}

	getBurstDelay(): number {
		return this.BurstDelay;
	}

	setBurstDelay(delay: number): void {
		this.BurstDelay = delay;
	}

	getDelayMin(): number {
		return this.DelayMin;
	}

	getDelayMax(): number {
		return this.DelayMax;
	}

	setDelay(min: number, max: number): void {
		this.DelayMin = min;
		this.DelayMax = max;
	}

	getDelayRNG(): number {
		return this.DelayRNG;
	}

	getExplodeSize(): number {
		return this.ExplosionSize;
	}

	setExplodeSize(size: number): void {
		this.ExplosionSize = size;
	}

	getFireType(): number {
		return this.Fire;
	}

	setFireType(status: number): void {
		this.Fire = status;
	}

	getGlows(): boolean {
		return this.Glows;
	}

	setGlows(glows: boolean): void {
		this.Glows = glows;
	}

	getHasAimAnimation(): boolean {
		return this.HasAimAnimation;
	}

	setHasAimAnimation(aim: boolean): void {
		this.HasAimAnimation = aim;
	}

	getHasGravity(): boolean {
		return this.HasGravity;
	}

	setHasGravity(hasGravity: boolean): void {
		this.HasGravity = hasGravity;
	}

	getMeleeRange(): number {
		return this.Range;
	}

	setMeleeRange(range: number): void {
		this.Range = range;
	}

	getParticle(): number {
		return this.Particle;
	}
	setParticle(status: number): void {
		this.Particle = status;
	}

	getRender3D(): boolean {
		return this.Render3D;
	}

	getShotCount(): number {
		return this.ShotCount;
	}

	setShotCount(count: number): void {
		this.ShotCount = count;
	}

	getSize(): number {
		return this.Size;
	}

	getSound(status: number): string {
		return tostring(this.Sound[status]);
	}

	setSound(status: number, sound: string): void {
		if (typeIs(type, "string") || typeIs(type, "number")) {
			// this.Sound[type] = tonumber(sound);
		}
	}

	getSpins(): boolean {
		return this.Spins;
	}

	setSpins(spins: boolean): void {
		this.Spins = spins;
	}

	getSticks(): boolean {
		return this.Sticks;
	}

	setRender3D(render3d: boolean): void {
		this.Render3D = render3d;
	}

	setSize(size: number): void {
		this.Size = size;
	}

	setSticks(sticks: boolean): void {
		this.Sticks = sticks;
	}
}
