export default class NPCMelee implements INPCMelee {
	Strength: number;
	Delay: number;
	Range: number;
	Speed: number;
	Knockback: number;
	EffectType: number;
	EffectTime: number;
	EffectStrength: number;
	Effect: number;
	constructor(Info?: NPCMeleeProperties) {
		this.Strength = Info?.Strength || 0;
		this.Delay = Info?.Delay || 0;
		this.Range = Info?.Range || 25;
		this.Speed = 20;
		this.Knockback = Info?.Knockback || 10;
		this.EffectType = Info?.EffectType || 15;
		this.EffectTime = Info?.EffectTime || 15;
		this.EffectStrength = Info?.EffectStrength || 15;
		this.Effect = Info?.Effect || 12;
	}

	getSpeed(): number {
		return this.Speed;
	}
	setSpeed(value: number) {
		this.Speed = value;
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

	setDelay(speed: number): void {
		this.Delay = speed;
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
}
