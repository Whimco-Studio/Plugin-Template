type NPCAiProperties = {
	Animation: number;
	CurrentAnimation: number;
	ReturnsHome: boolean;
	RetaliateType: number;
	MovingType: number;
	NavigationType: number;
	StandingType: number;
	AttackInvisible: boolean;
	WanderingRange: number;
	InteractWithNPCs: boolean;
	StopOnInteract: boolean;
	WalkingSpeed: number | 16;
	MovingPathName: string;
	MovingPathType: number;
	MovingPathPauses: boolean;
	DoorInteract: number;
	CanSwim: boolean;
	SheltersFrom: number;
	AttackLOS: boolean;
	AvoidsWater: boolean;
	LeapAtTarget: boolean;
};

export default class NPCAi implements INPCAi {
	Animation: number;
	CurrentAnimation: number;
	// /**
	//  * @property {boolean} Returns the npcs current animation. E.g. when npc is set to LYING it wont be lying while walking so it will be NORMAL
	//  * @see noppes.npcs.api.constants.AnimationType
	//  */
	ReturnsHome: boolean;
	RetaliateType: number;
	/**
	 * @property {number} 0:Standing, 1:Wandering, 2:MovingPath
	 */
	MovingType: number;
	NavigationType: number;
	StandingType: number;
	AttackInvisible: boolean;
	WanderingRange: number;
	InteractWithNPCs: boolean;
	StopOnInteract: boolean;
	WalkingSpeed: number | 16;
	MovingPathName: string;
	MovingPathType: number;
	MovingPathPauses: boolean;
	DoorInteract: number;
	CanSwim: boolean;
	SheltersFrom: number;
	AttackLOS: boolean;
	AvoidsWater: boolean;
	LeapAtTarget: boolean;

	constructor(Info?: NPCAiProperties) {
		this.Animation = Info?.Animation || 0;
		this.CurrentAnimation = Info?.CurrentAnimation || this.Animation;
		this.ReturnsHome = Info?.ReturnsHome || true;
		this.RetaliateType = Info?.RetaliateType || 0;
		this.MovingType = Info?.MovingType || 0;
		this.NavigationType = Info?.NavigationType || 0;
		this.StandingType = Info?.StandingType || 0;
		this.AttackInvisible = Info?.AttackInvisible || false;
		this.WanderingRange = Info?.WanderingRange || 0;
		this.InteractWithNPCs = Info?.InteractWithNPCs || false;
		this.StopOnInteract = Info?.StopOnInteract || true;
		this.WalkingSpeed = Info?.WalkingSpeed || 16;
		this.MovingPathName = Info?.MovingPathName || "NaN";
		this.MovingPathType = Info?.MovingPathType || 0;
		this.MovingPathPauses = Info?.MovingPathPauses || false;
		this.DoorInteract = Info?.DoorInteract || 0;
		this.CanSwim = Info?.CanSwim || true;
		this.SheltersFrom = Info?.SheltersFrom || 2;
		this.AttackLOS = Info?.AttackLOS || false;
		this.AvoidsWater = Info?.AvoidsWater || false;
		this.LeapAtTarget = Info?.LeapAtTarget || false;
	}

	getAnimation(): number {
		return this.Animation;
	}

	setAnimation(status: number): void {
		this.Animation = status;
	}

	getCurrentAnimation(): number {
		return this.CurrentAnimation;
	}

	setReturnsHome(bo: boolean): void {
		this.ReturnsHome = bo;
	}

	getReturnsHome(): boolean {
		return this.ReturnsHome;
	}

	getRetaliateType(): number {
		return this.RetaliateType;
	}

	setRetaliateType(status: number): void {
		this.RetaliateType = status;
	}

	getMovingType(): number {
		return this.MovingType;
	}

	setMovingType(status: number): void {
		this.MovingType = status;
	}

	getNavigationType(): number {
		return this.NavigationType;
	}

	setNavigationType(status: number): void {
		this.NavigationType = status;
	}

	getStandingType(): number {
		return this.StandingType;
	}

	setStandingType(status: number): void {
		this.StandingType = status;
	}

	getAttackInvisible(): boolean {
		return this.AttackInvisible;
	}

	setAttackInvisible(attack: boolean): void {
		this.AttackInvisible = attack;
	}

	getWanderingRange(): number {
		return this.WanderingRange;
	}

	setWanderingRange(range: number): void {
		this.WanderingRange = range;
	}

	getInteractWithNPCs(): boolean {
		return this.InteractWithNPCs;
	}

	setInteractWithNPCs(interact: boolean): void {
		this.InteractWithNPCs = interact;
	}

	getStopOnInteract(): boolean {
		return this.StopOnInteract;
	}

	setStopOnInteract(stopOnInteract: boolean): void {
		this.StopOnInteract = stopOnInteract;
	}

	getWalkingSpeed(): number {
		return this.WalkingSpeed;
	}

	setWalkingSpeed(speed: number): void {
		this.WalkingSpeed = speed;
	}

	getMovingPathType(): number {
		return this.MovingPathType;
	}

	getMovingPathPauses(): boolean {
		return this.MovingPathPauses;
	}

	setMovingPath(value: string): void {
		this.MovingPathName = value;
	}

	setMovingPathType(status: number, pauses: boolean): void {
		this.MovingPathType = status;
		this.MovingPathPauses = pauses;
	}

	getDoorInteract(): number {
		return this.DoorInteract;
	}

	setDoorInteract(status: number): void {
		this.DoorInteract = status;
	}

	getCanSwim(): boolean {
		return this.CanSwim;
	}

	setCanSwim(canSwim: boolean): void {
		this.CanSwim = canSwim;
	}

	getSheltersFrom(): number {
		return this.SheltersFrom;
	}

	setSheltersFrom(status: number): void {
		this.SheltersFrom = status;
	}

	getAttackLOS(): boolean {
		return this.AttackLOS;
	}

	setAttackLOS(enabled: boolean): void {
		this.AttackLOS = enabled;
	}

	getAvoidsWater(): boolean {
		return this.AvoidsWater;
	}

	setAvoidsWater(enabled: boolean): void {
		this.AvoidsWater = enabled;
	}

	getLeapAtTarget(): boolean {
		return this.LeapAtTarget;
	}

	setLeapAtTarget(leap: boolean): void {
		this.LeapAtTarget = leap;
	}
}
