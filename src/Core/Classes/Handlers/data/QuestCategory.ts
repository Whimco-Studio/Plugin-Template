import CustomNPC from "Plugin/Modules/Classes/Entity/CustomNPC";
import Quest from "./Quest";

export class QuestCategory implements IQuestCategory {
	private _name: string;
	private _quests: Array<IQuest>;

	constructor(name: string) {
		this._name = name;
		this._quests = [];
	}

	public quests(): Array<IQuest> {
		return this._quests;
	}

	public getName(): string {
		return this._name;
	}

	public create(CustomNPC: CustomNPC): IQuest {
		const quest = new Quest({
			Npc: CustomNPC,
			Type: 0,
			Name: "Quest",
			Text: "I need you to complete this quest...",
			LogText: "",
			Completeted: false,
			CompleteText: "Quest Completed",
			IsRepeatable: true,
			NextQuest: undefined,
			QuestObjectives: {},
			QuestCategory: this,
		});
		this._quests.push(quest);
		return quest;
	}
}
