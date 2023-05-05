interface IQuestObjective {
	getProgress(): void;

	/**
	 * Does not work for Item or Dialog quests
	 * @param progress Progress of the objective
	 */
	setProgress(progress: number): void;

	getMaxProgress(): number;

	isCompleted(): boolean;

	getText(): string;
}
