interface INPCMelee {
	Speed: number;

	getSpeed(): number;

	setSpeed(speed: number): void;

	getStrength(): number;

	setStrength(strength: number): void;

	getDelay(): number;

	setDelay(speed: number): void;

	getRange(): number;

	setRange(range: number): void;

	getKnockback(): number;

	setKnockback(knockback: number): void;

	getEffectType(): number;

	getEffectTime(): number;

	getEffectStrength(): number;

	setEffect(status: number, strength: number, time: number): void;
}
