interface IQuestHandler {
	categories(): IQuestCategory[];

	get(id: number): IQuest;
}
