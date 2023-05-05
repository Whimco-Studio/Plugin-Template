interface IPlayerMail {
	getSender(): string;

	setSender(sender: string): void;

	getSubject(): string;

	setSubject(subject: string): void;

	getText(): string | string[];

	setText(text: string | string[]): void;

	getQuest(): IQuest;

	setQuest(id: number): void;
}
