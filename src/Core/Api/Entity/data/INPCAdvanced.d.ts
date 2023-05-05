/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface INPCAdvanced {
	/**
	 * @param {number} type 0:Interact, 1:Attack, 2:Level, 3:Killed, 4:Kill, 5:NPC Interact
	 * @param {number} slot 0-7
	 * @param {string} text
	 * @param {string} sound
	 */
	setLine(status: string, slot: number, text: string, sound: string): void;

	/**
	 * @param {number} type 0:Interact, 1:Attack, 2:Level, 3:Killed, 4:Kill, 5:NPC Interact
	 * @param {number} slot 0-7
	 * @return {string}
	 */
	getLine(status: string, slot: number): string;

	/**
	 * @param {number} type 0:Interact, 1:Attack, 2:Level, 3:Killed, 4:Kill, 5:NPC Interact
	 * @return {number}
	 */
	getLineCount(status: string): number;

	/**
	 * @param {number} type 0:Idle, 1:Angry, 2:Hurt, 3:Death, 4:Step
	 * @return {string}
	 */
	getSound(status: string): string;

	/**
	 * @param {number} type 0:Idle, 1:Angry, 2:Hurt, 3:Death, 4:Step
	 * @param {string} sound
	 */
	setSound(status: string, slot: number, sound: string): void;
}
