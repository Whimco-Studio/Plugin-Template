import Object from "@rbxts/object-utils";
import { ReplicatedStorage } from "@rbxts/services";
import PluginBindables from "Plugin/Events";
import convertToConfiguration from "Start/Manager/Compiling/Compile";
import Faction from "./data/Faction";

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

export default class FactionHandler implements IFactionHandler {
	Factions: Faction[];

	constructor() {
		const tempId = GenerateID();
		this.Factions = [];

		this.create("Enemy", new Color3(1, 0, 0));
		this.create("Friendly", new Color3(0, 1, 0));

		PluginBindables.CompileManager.Fire("Factions");
	}

	monitor() {}

	list(): Faction[] {
		return this.Factions;
	}

	create(name: string, color: Color3): Faction {
		const tempId = GenerateID();

		const NewFaction = new Faction({ Id: tempId, Name: name, Color: color });

		this.Factions.push(NewFaction);

		PluginBindables.CompileManager.Fire("Factions");
		return NewFaction;
	}

	get(id: number): Faction | void {
		let temp: void | Faction;

		for (let index = 0; index < this.Factions.size(); index++) {
			const Faction = this.Factions[index];
			if (Faction.Id === id) {
				temp = Faction;
				break;
			}
		}

		return temp;
	}

	delete(id: number): void {
		this.Factions.forEach((Faction, index) => {
			if (Faction.Id === id && this.Factions.size() > 1) {
				table.clear(Faction);
				table.freeze(Faction);
				this.Factions.remove(index);
			}
		});

		PluginBindables.CompileManager.Fire("Factions");
	}
}