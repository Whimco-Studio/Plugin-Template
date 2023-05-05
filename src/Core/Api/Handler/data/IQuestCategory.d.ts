interface IQuestCategory {
	quests(): Array<IQuest>;
	getName(): string;
	create(CustomNPC: ICustomNPC): IQuest;
}
