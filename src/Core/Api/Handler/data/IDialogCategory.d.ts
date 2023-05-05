interface IDialogCategory {
	dialogs(): IDialog[];

	getName(): string;

	create(name: string): IDialog | void;

	delete(id: number): void;
}
