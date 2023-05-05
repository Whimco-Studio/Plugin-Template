const CreatedIDsCache: { [key: number]: string } = {};

function GenerateID(): number {
	const ID = math.random(100000000, 2147483647);

	if (CreatedIDsCache[ID]) {
		return GenerateID();
	} else {
		CreatedIDsCache[ID] = "";
	}

	return ID;
}

class Timers implements ITimers {
	Timers: { [key: number]: string };

	constructor(Info?: {}) {
		this.Timers = {};
	}

	start(id: number, ticks: number, repeating: boolean): void {}

	forceStart(id: number, ticks: number, repeating: boolean): void {}

	has(id: number): boolean {
		// this.Timers.forEach((element: IFaction) => {
		// 	if (element.Id === id) {
		// 		return element;
		// 	}
		// });
		return true;
	}

	stop(id: number): boolean {
		return true;
	}

	reset(id: number): void {}

	clear(): void {}
}

export default Timers;
