/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface INPCDisplay {
	getName(): string;

	setName(name: string): void;

	getTitle(): string;

	setTitle(title: string): void;

	getHasLivingAnimation(): boolean;

	setHasLivingAnimation(enabled: boolean): void;

	/**
	 * @return {number} 0:visible, 1:invisible, 2:semi-invisible
	 */
	getVisible(): number;

	/**
	 * @param {number} type 0:visible, 1:invisible, 2:semi-invisible
	 */
	setVisible(status: number): void;

	/**
	 * If the availability is set, you can check if its visible to the player or not
	 * @param {string} PlayerTag
	 * @return {boolean}
	 */
	isVisibleTo(PlayerTag: string): boolean;

	/**
	 * @return {number} 0:invisible, 1:visible, 2:when-attacking
	 */
	getBossbar(): number;

	/**
	 * @param {number} type 0:invisible, 1:visible, 2:when-attacking
	 */
	setBossbar(status: number): void;

	/**
	 * @return {number} 1-30
	 */
	getSize(): number;

	/**
	 * @param {number} size 1-30
	 */
	setSize(size: number): void;

	getTint(tint?: string | Color3): string;

	/**
	 * @param {number} color E.g. setTint(0xFF0000) sets the tint to red. (depending on the language you might want to look up how to convert hexadecimals to integers)
	 */
	setTint(color: string): void;

	/**
	 * @return {number} 0:visible, 1:invisible, 2:when-attacking
	 */
	getShowName(): number;

	/**
	 * @param {number} type 0:visible, 1:invisible, 2:when-attacking
	 */
	setShowName(status: number): void;

	setCapeTexture?(texture: string): void;

	getCapeTexture?(): string;

	setOverlayTexture?(texture: string): void;

	getOverlayTexture?(): string;

	/**
	 * @param {number} part 0:Head, 1:Body, 2:ArmLeft, 3:ArmRight, 4:LegLeft, 5:LegRight
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 */
	setModelScale(part: number, x: number, y: number, z: number): void;

	/**
	 * @param {number} part 0:Head, 1:Body, 2:ArmLeft, 3:ArmRight, 4:LegLeft, 5:LegRight
	 * @return {float[]} Returns a float array
	 */
	getModelScale(part: number): number[];

	/**
	 * @return {number} 0:Pink, 1:Blue, 2:Red, 3:Green, 4:Yellow, 5:Purple, 6:White
	 */
	getBossColor(): number;

	/**
	 * @param {number} color 0:Pink, 1:Blue, 2:Red, 3:Green, 4:Yellow, 5:Purple, 6:White
	 */
	setBossColor(color: number): void;

	/**
	 * @param {string} model Entity id from <a href="https://minecraft.gamepedia.com/Java_Edition_data_values/Entity_IDs">here</a>
	 */
	setModel(model: string): void;

	getModel(): string;

	/**
	 * @param {number} state 0:Normal, 1:None, 2:Solid
	 */
	setHitboxState(state: number): void;

	/**
	 * @return {number} 0:Normal, 1:None, 2:Solid
	 */
	getHitboxState(): number;
}
