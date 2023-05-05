/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface IFaction {
	Id: number;

	Name: string;

	DefaultPoints: number;

	// HostileTo: { id: number }[];

	Hidden: boolean;

	AttackedByMobs: boolean;

	getId(): number;

	getName(): string;

	getDefaultPoints(): number;

	setDefaultPoints(points: number): void;

	getColor(): string | Color3 | number;

	/**
	 * @return {boolean} Returns -1:Unfriendly, 0:Neutral, 1:Friendly
	 *
	 * public int playerStatus(IPlayer player);
	 *
	 * public boolean hostileToNpc(ICustomNpc npc);
	 * @param {number} factionId
	 */
	hostileToFaction(factionId: number): boolean;

	getHostileList(): number[];

	addHostile(id: number): void;

	removeHostile(id: number): void;

	hasHostile(id: number): boolean;

	getIsHidden(): boolean;

	setIsHidden(bo: boolean): void;

	getAttackedByMobs(): boolean;

	setAttackedByMobs(bo: boolean): void;

	save(): void;
}
