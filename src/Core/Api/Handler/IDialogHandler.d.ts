interface IDialogHandler {
	categories(): IDialogCategory[];

	get(id: number): IDialog | void;

	delete(id: number): void;
}
