interface IFactionHandler {
	list(): IFaction[];

	delete(id: number): void;

	/**
	 * Example: create("Bandits", 0xFF0000)
	 */
	create(name: string, color: Color3 | string): IFaction;

	get(id: number): IFaction | void;
}
