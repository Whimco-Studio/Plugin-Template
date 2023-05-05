// import CustomNPC from "../Classes/Entity/CustomNPC";
// import NPCMelee from "../Classes/Entity/data/NPCMelee";
// import NPCRanged from "../Classes/Entity/data/NPCRanged";
// import DialogCategory from "../Classes/Handlers/data/DialogCategory";

interface EntityProperties {
	Character: Model | Actor;
	Pitch: number;
	Sneaking?: boolean;
	InWater: boolean;
	Age: number;
}

interface EntityLivingProperties {
	Character: Model | Actor;
	Attacking?: boolean;
	AttackingTarget?: ICustomNPC | Player | undefined;
	LastAttacked?: ICustomNPC | Player | undefined;
	canSeeEntity?: boolean;
	MainHandItem?: MeshPart | BasePart | Model | undefined;
	OffHandITem?: MeshPart | BasePart | Model | undefined;
}

interface ProjectileProperties {
	target: IEntityLiving | Vector3 | BasePart;
	item: MeshPart | BasePart | Model;
	accuracy: number;
}

interface AiProperties {
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
}

interface DisplayProperties {
	Name: string;
	Title: string;
	HasLivingAnimation: boolean;
	Visible: number;
	BossBar: number;
	Size: number;
	Tint: string;
	ShowName: number;
	BossColor: number;
	Interactable: boolean;
	HitboxState: number;
}

interface MeleeProperties {
	Strength: number;
	Delay: number;
	Range: number;
	Knockback: number;
	EffectType: number;
	EffectTime: number;
	EffectStrength: number;
	Effect: number;
}

interface RangedProperties {
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
}

interface DialogProperties {
	Name: string;
	Text?: string;
	Category: IDialogCategory;
}

interface DialogCategoryProperties {
	Name?: string;
}

interface DialogOptionProperties {
	Node: number;
	Name?: string;
	Type: number;
}

interface QuestProperties {
	Npc: ICustomNPC;
	Type: number;
	Name: string;
	Text: string;
	LogText: string;
	CompletetedEvent: RemoteEvent;
	Completeted: boolean;
	CompleteText: string;
	IsRepeatable: boolean;
	NextQuest: IQuest | void;
	QuestObjectives: {
		[key: string]: IQuestObjective[];
	};
	QuestCategory: IQuestCategory;
}

interface NPCMeleeProperties {
	Strength: number;
	Delay: number;
	Range: number;
	Knockback: number;
	EffectType: number;
	EffectTime: number;
	EffectStrength: number;
	Effect: number;
}

interface StatsProperties {
	MaxHealth: number;
	Health: number;
	HealthRegen: number;
	CombatRegen: number;
	Melee: INPCMelee & NPCMeleeProperties;
	Ranged: INPCRanged & RangedProperties;
	Immune: boolean[];
	CreatureType: number;
	RespawnType: number;
	RespawnTime: number;
	HideDeadBody: boolean;
	AggroRange: number;
	Resistance: [];
}

interface PresetInfo {
	Id?: string;
	Display?: DisplayProperties;
	Backpack?: {};
	Stats?: StatsProperties;
	Ai?: AiProperties;
	Role?: {};
	Job?: {};
	Timers?: {};
	Advanced?: {};
}
