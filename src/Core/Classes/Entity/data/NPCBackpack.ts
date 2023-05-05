export default class NPCBackpack implements INPCBackpack {
	Backpack: number;

	constructor() {
		this.Backpack = 1;
	}

	getBackpack(): number {
		return this.Backpack;
	}

	setBackpack(status: number): void {
		this.Backpack = status;
	}
}
