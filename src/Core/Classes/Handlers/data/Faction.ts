import Object from "@rbxts/object-utils";
import { Array } from "@rbxts/sift";
import Bindings from "Core/Bin/Config/Binds";

function color3ToHex(c3: Color3) {
	const r = math.floor(c3.R * 255);
	const g = math.floor(c3.G * 255);
	const b = math.floor(c3.B * 255);
	return string.format("#%X%X%X", r, g, b);
}

export default class Faction implements IFaction {
	Id: number;
	Name: string;
	DefaultPoints: number;
	HostileTo: { id: number }[];
	Hidden: boolean;
	AttackedByMobs: boolean;
	Color: Color3;
	NPCs: string[];
	EnemyThreshold: number;
	FriendlyThreshold: number;

	constructor(Info: {
		Id: number;
		Name: string;
		DefaultPoints?: number;
		HostileTo?: { id: number }[];
		Hidden?: boolean;
		AttackedByMobs?: boolean;
		Color?: Color3;
	}) {
		this.Id = Info.Id;
		this.Name = Info.Name;
		this.DefaultPoints = Info.DefaultPoints || 1000;
		this.HostileTo = Info.HostileTo || [];
		this.Hidden = Info.Hidden || false;
		this.AttackedByMobs = Info.AttackedByMobs || false;
		this.Color = Info.Color || new Color3(1, 1, 1);
		this.NPCs = [];
		this.EnemyThreshold = 500;
		this.FriendlyThreshold = 1000;
	}

	update() {
		Bindings.Core.Compiling.CompileTable.Invoke("Factions");
	}

	getId(): number {
		return this.Id;
	}

	getName(): string {
		return this.Name;
	}

	getDefaultPoints(): number {
		return this.DefaultPoints;
	}

	setDefaultPoints(points: number): void {
		this.DefaultPoints = points;
		this.update();
	}

	getColor(): string {
		return color3ToHex(this.Color);
	}

	hostileToFaction(factionId: number): boolean {
		this.HostileTo.forEach((element: { id: number }) => {
			if (element.id === factionId) {
				return true;
			}
		});

		return false;
	}

	getHostileList(): number[] {
		const temp: number[] = [];
		this.HostileTo.forEach((element: { id: number }) => {
			temp.insert(temp.size(), element.id);
		});
		return temp;
	}

	addHostile(id: number): void {
		let found = false;

		this.HostileTo.forEach((element: { id: number }) => {
			if (element.id === id) {
				found = true;
			}
		});

		if (!found) {
			this.HostileTo.push({ id: id });
		}

		this.update();
	}

	removeHostile(id: number): void {
		this.HostileTo.forEach((element: { id: number }, index: number) => {
			if (element.id === id) {
				this.HostileTo.remove(index);
				print(this.HostileTo);
			}
		});

		this.update();
	}

	hasHostile(id: number): boolean {
		let found = false;

		this.HostileTo.forEach((element: { id: number }) => {
			if (element.id === id) {
				found = true;
			}
		});

		return found;
	}

	getIsHidden(): boolean {
		return this.Hidden;
	}

	setIsHidden(hidden: boolean): void {
		this.Hidden = hidden;
		this.update();
	}

	setMinThreshold(Threshold: number) {
		this.EnemyThreshold = Threshold < this.FriendlyThreshold ? Threshold : this.EnemyThreshold;
	}
	setMaxThreshold(Threshold: number) {
		this.FriendlyThreshold = Threshold < this.EnemyThreshold ? Threshold : this.FriendlyThreshold;
	}

	getAttackedByMobs(): boolean {
		return this.AttackedByMobs;
	}

	setAttackedByMobs(AttackedByMobs: boolean): void {
		this.AttackedByMobs = AttackedByMobs;
		this.update();
	}

	save(): void {}
}
