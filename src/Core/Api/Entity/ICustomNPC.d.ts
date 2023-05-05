interface ICustomNPC {
	getDisplay(): INPCDisplay;

	getBackpack(): INPCBackpack;

	getStats(): INPCStats;

	getAi(): INPCAi;

	getAdvanced(): INPCAdvanced;

	getFaction(): IFaction;

	setFaction(id: number): void;

	getRole(): INPCRole;

	getJob(): INPCJob;

	getTimers(): ITimers;

	getHome(): Vector3;

	getOwner(): IEntityLiving;

	setHome(home: Vector3): void;

	reset(): void;

	say(message: string): void;

	sayTo(player: Player, message: string): boolean | void;

	/**
	 * @param item The item you want to shoot
	 * @param accuracy Accuracy of the shot (1-100)
	 */
	shootItem(
		target: IEntityLiving | Vector3 | BasePart,
		item: MeshPart | BasePart | Model,
		accuracy: number,
	): IProjectile;

	giveItem?(player: Player, item: number): void;

	/**
	 * @param slot (0-11)
	 */
	setDialog(slot: number, dialog: IDialog): void;

	/**
	 * @param slot (0-11)
	 */
	getDialog(slot: number): IDialog;

	/**
	 * Force update client. Normally it updates client once every 10 ticks
	 */
	updateClient(player: Player): void;

	/**
	 * On servers the enable-command-block option in the server.properties needs to be set to true <br>
	 * Use /gamerule commandBlockOutput false/true to turn off/on command block feedback <br>
	 * Setting NpcUseOpCommands to true in the CustomNPCs.cfg should allow the npc to run op commands, be warned this could be a major security risk, use at own risk <br>
	 * For permission plugins the commands are run under uuid:c9c843f8-4cb1-4c82-aa61-e264291b7bd6 and name:[customnpcs]
	 * @param command loadstring you want to be executed
	 * @return Returns the commands output
	 */
	executeCommand(command: string): boolean;

	/**
	 * Fires trigger event for npc scripts
	 * @param id, Id for the event
	 * @param parameters, arguments you can give with it
	 */
	trigger(id: number, parameters: []): void;
}
