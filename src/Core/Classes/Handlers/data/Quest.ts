import QuestType from "../../Constants/QuestType";
import CustomNPC from "../../Entity/CustomNPC";

const CreatedIDsCache: {
	[key: number]: string;
} = {};

function GenerateID(): number {
	const ID = math.random(100000000, 2147483647);

	if (CreatedIDsCache[ID]) {
		return GenerateID();
	} else {
		CreatedIDsCache[ID] = "";
	}

	return ID;
}

type QuestProperties = {
	Npc: CustomNPC;
	/**
	 * 0: Item
	 * 1: Dialog
	 * 2: Kill
	 * 3: Location
	 * 4: Area_Kill
	 * 5: Area_Kill
	 */
	Type: number;
	Name: string;
	Text: string;
	LogText: string;
	Completeted: boolean;
	CompleteText: string;
	IsRepeatable: boolean;
	NextQuest: IQuest | void;
	QuestObjectives: {
		[key: string]: IQuestObjective[];
	};
	QuestCategory: IQuestCategory;
};

export default class Quest implements IQuest {
	Id = GenerateID();
	Npc: CustomNPC;
	Type: number;
	Name: string;
	Text: string;
	LogText: string;

	Completeted: boolean;
	CompleteText: string;
	IsRepeatable: boolean;
	NextQuest: IQuest | void;
	// QuestObjectives: {
	// 	[key: string]: IQuestObjective[];
	// };
	QuestCategory: IQuestCategory;

	constructor(Info: QuestProperties) {
		this.Type = Info.Type || QuestType.DIALOG;

		this.Name = Info.Name || "";
		this.Text = Info.Text || "";
		this.LogText = Info.LogText || "";
		this.CompleteText = Info.CompleteText || "";
		this.NextQuest = Info.NextQuest || undefined;
		// this.QuestObjectives = Info.QuestObjectives || {};
		this.QuestCategory = Info.QuestCategory;

		this.Completeted = false;
		this.IsRepeatable = Info.IsRepeatable || false;

		this.Npc = Info.Npc;
	}

	getId(): number {
		return this.Id;
	}

	getName(): string {
		return this.Name;
	}

	setName(name: string): void {
		this.Name = name;
	}

	getType(): number {
		return this.Type;
	}

	setType(status: number): void {
		this.Type = status;
	}

	getLogText(): string {
		return "";
	}

	setLogText(text: string): void {}

	getCompleteText(): string {
		return this.CompleteText;
	}

	setCompleteText(text: string): void {
		this.CompleteText = text;
	}

	getNextQuest(): IQuest | void {
		return this.NextQuest;
	}

	setNextQuest(quest: IQuest): void {
		this.NextQuest = quest;
	}

	getObjectives(player: Player): IQuestObjective[] {
		return []; //this.QuestObjectives[player.Name]
	}

	getCategory(): IQuestCategory {
		return this.QuestCategory;
	}

	questCompleted(player: Player): void {
		// this.CompletetedEvent.FireClient(player, this.Id, this);
	}

	/**
	 *
	 * /**
	 * @return {string} The npcs name where this quest can be completed
	 */
	getNpcName(): string {
		return this.Npc.Character.Name;
	}

	/**
	 * @param {string} name The npcs name where this quest can be completed
	 */
	setNpcName(name: string): void {
		this.Npc.Character.Name = name;
	}

	save(): void {}

	getIsRepeatable(): boolean {
		return this.IsRepeatable;
	}
}
