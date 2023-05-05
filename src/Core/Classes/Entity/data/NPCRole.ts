export default class NPCRole implements INPCRole {
	Role: number;

	constructor(Info?: { Role: number }) {
		this.Role = Info?.Role || 0;
	}

	getType(): number {
		return this.Role;
	}
}
