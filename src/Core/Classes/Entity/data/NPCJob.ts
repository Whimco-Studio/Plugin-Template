export class NPCJob implements INPCJob {
	Job: number;
	constructor(Info?: { Job: number }) {
		this.Job = Info?.Job || 0;
	}

	getJob(): number {
		return this.Job;
	}
}
