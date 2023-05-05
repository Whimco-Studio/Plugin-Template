interface IQuest {
	getId(): number;

	getName(): string;

	setName(name: string): void;

	getType(): number;

	setType(status: number): void;

	getLogText(): string;

	setLogText(text: string): void;

	getCompleteText(): string;

	setCompleteText(text: string): void;

	getNextQuest(): IQuest | void;

	setNextQuest(quest: IQuest): void;

	getObjectives(player: Player): Array<IQuestObjective>;

	getCategory(): IQuestCategory;

	questCompleted(player: Player): void;

	/**
	 *
	 * /**
	 * @return {string} The npcs name where this quest can be completed
	 */
	getNpcName(): string;

	/**
	 * @param {string} name The npcs name where this quest can be completed
	 */
	setNpcName(name: string): void;

	save(): void;

	getIsRepeatable(): boolean;
}
