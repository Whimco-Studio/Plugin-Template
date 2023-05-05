type NPCAdvancedProperties = {};

export default class NPCAdvanced implements INPCAdvanced {
	DialogLines: {
		[key: string]: [string, string, string, string, string, string, string];
		World: [string, string, string, string, string, string, string];
		Attack: [string, string, string, string, string, string, string];
		Interact: [string, string, string, string, string, string, string];
		Killed: [string, string, string, string, string, string, string];
		Kill: [string, string, string, string, string, string, string];
		NPC: [string, string, string, string, string, string, string];
	};
	DialogSounds: {
		[key: string]: [string, string, string, string, string, string, string];
		World: [string, string, string, string, string, string, string];
		Attack: [string, string, string, string, string, string, string];
		Interact: [string, string, string, string, string, string, string];
		Killed: [string, string, string, string, string, string, string];
		Kill: [string, string, string, string, string, string, string];
		NPC: [string, string, string, string, string, string, string];
	};

	AttackHostileFactions: boolean;
	DefendFactionMembers: boolean;

	constructor(Info?: NPCAdvancedProperties) {
		this.DialogLines = {
			World: ["", "", "", "", "", "", ""],
			Attack: ["", "", "", "", "", "", ""],
			Interact: ["", "", "", "", "", "", ""],
			Killed: ["", "", "", "", "", "", ""],
			Kill: ["", "", "", "", "", "", ""],
			NPC: ["", "", "", "", "", "", ""],
		};
		this.DialogSounds = {
			World: ["", "", "", "", "", "", ""],
			Attack: ["", "", "", "", "", "", ""],
			Interact: ["", "", "", "", "", "", ""],
			Killed: ["", "", "", "", "", "", ""],
			Kill: ["", "", "", "", "", "", ""],
			NPC: ["", "", "", "", "", "", ""],
		};

		this.AttackHostileFactions = false;
		this.DefendFactionMembers = true;
	}

	/**
	 * @param {number} type 0:Interact, 1:Attack, 2:Level, 3:Killed, 4:Kill, 5:NPC Interact
	 * @param {number} slot 0-7
	 * @param {string} text
	 * @param {string} sound
	 */
	setLine(status: string, slot: number, text: string, sound: string): void {
		const DialogType = this.DialogLines[status];
		DialogType[slot] = text;

		print(slot, DialogType[slot]);
	}

	/**
	 * @param {number} type 0:Interact, 1:Attack, 2:Level, 3:Killed, 4:Kill, 5:NPC Interact
	 * @param {number} slot 0-7
	 * @return {string}
	 */
	getLine(status: string, slot: number): string {
		return this.DialogLines[status][slot];
	}

	/**
	 * @param {number} type 0:Interact, 1:Attack, 2:Level, 3:Killed, 4:Kill, 5:NPC Interact
	 * @return {number}
	 */
	getLineCount(status: string): number {
		return this.DialogLines[status].size();
	}

	/**
	 * @param {number} type 0:Idle, 1:Angry, 2:Hurt, 3:Death, 4:Step
	 * @return {string}
	 */
	getSound(status: string): string {
		return "";
	}

	/**
	 * @param {number} type 0:Idle, 1:Angry, 2:Hurt, 3:Death, 4:Step
	 * @param {string} sound
	 */
	setSound(status: string, slot: number, sound: string): void {
		this.DialogSounds[status][slot] = sound;
	}

	setAttackHostileFactions(status: boolean) {
		this.AttackHostileFactions = status;
	}
	setDefendFactionMembers(status: boolean) {
		this.DefendFactionMembers = status;
	}
}
