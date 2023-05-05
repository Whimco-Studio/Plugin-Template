/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface IDialog {
	getId(): number;

	getName(): string;

	getQuest(): IQuest | void;

	setQuest(quest: IQuest): void;

	setName(name: string): void;

	getText(): string;

	setText(text: string): void;

	getCommand(): string;

	setCommand(command: string): void;

	getOptions(): IDialogOption[];

	getOption(slot: number): IDialogOption;

	getCategory(): IDialogCategory;

	/**
	 * @param slot (0-5)
	 * @return
	 */
	save?(): void;
}
