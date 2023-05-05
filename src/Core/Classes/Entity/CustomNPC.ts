import Backpack from "./data/NPCBackpack";
import { Chat, HttpService } from "@rbxts/services";
import NPCAi from "./data/NPCAi";
import NPCStats from "./data/NPCStats";
import NPCRole from "./data/NPCRole";
import { NPCJob } from "./data/NPCJob";
import EntityLiving from "./EntityLiving";
import NPCAdvanced from "./data/NPCAdvanced";
import Timers from "../Timers";
import { Projectile } from "./Projectile";
import Dialog from "../Handlers/data/Dialog";
import NPCDisplay from "./data/NPCDisplay";
import NPCBackpack from "./data/NPCBackpack";
import Faction from "../Handlers/data/Faction";
import FactionHandler from "../Handlers/FactionHandler";
import Object from "@rbxts/object-utils";
// import { PresetInfo } from "Plugin/Modules/Info/PropertyTypes";

type DisplayReturn = {
	Name: string;
	Title: string;
	Model: string;
	Size: number;
	LivingAnimation: boolean;
	Tint: string;
	Visible: number;
	Interactable: boolean;
};

// const FactionHandler = NPCManager.FactionHandler;

type loadstring = (arg0: Callback) => unknown;

// function loadstring(str: string): (...args: unknown[]) => any ;
export default class CustomNPC implements ICustomNPC {
	Id = HttpService.GenerateGUID(false);
	Character: Model | Actor;
	Display: NPCDisplay;
	Backpack: NPCBackpack;
	Stats: NPCStats;
	Ai: NPCAi;
	Faction: Faction;
	Role: NPCRole;
	Job: NPCJob;
	Timers: Timers;
	Home: Vector3;
	Owner: EntityLiving;
	Advanced: NPCAdvanced;
	Dialog: {
		[slot: number]: Dialog;
	};
	Handlers: {
		FactionHandler: FactionHandler;
	};

	constructor(
		Character: Model | Actor,
		Handlers: {
			FactionHandler: FactionHandler;
		},
		Info: {
			Dialog?: {
				[slot: number]: Dialog;
			};
			Faction: Faction;
		},
		InfoDictionaries: PresetInfo,
	) {
		this.Character = Character;
		this.Display = new NPCDisplay(Character, InfoDictionaries.Display);
		this.Backpack = new NPCBackpack();
		this.Advanced = new NPCAdvanced(InfoDictionaries.Advanced);
		this.Stats = new NPCStats(InfoDictionaries.Stats);
		this.Timers = new Timers();
		this.Role = new NPCRole();
		this.Job = new NPCJob();
		this.Ai = new NPCAi(InfoDictionaries.Ai);

		this.Faction = Info.Faction;
		this.Home =
			Character.FindFirstChildOfClass("MeshPart")?.Position ||
			Character.FindFirstChildOfClass("BasePart")?.Position ||
			new Vector3();

		this.Owner = new EntityLiving({
			Character: this.Character,
		});

		this.Dialog = Info.Dialog || {};
		this.Handlers = Handlers;
	}

	unpack() {
		return Object.deepCopy(this);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	set(object: { [key: string]: any }) {}

	getCharacter() {
		return this.Character;
	}

	getDisplay(): NPCDisplay {
		return this.Display;
	}
	getBackpack(): NPCBackpack {
		return this.Backpack;
	}

	getStats(): NPCStats {
		return this.Stats;
	}

	getOwner(): EntityLiving {
		return this.Owner;
	}

	getHome(): Vector3 {
		return this.Home;
	}

	getAi(): NPCAi {
		return this.Ai;
	}

	getAdvanced(): NPCAdvanced {
		return this.Advanced;
	}

	getFaction(): Faction {
		return this.Faction;
	}

	getRole(): NPCRole {
		return this.Role;
	}

	setFaction(id: number): void {
		const Faction = this.Handlers.FactionHandler.get(id);
		if (Faction) {
			const currentIndex = this.Faction.NPCs.indexOf(this.Id);
			if (currentIndex > -1) {
				this.Faction.NPCs.remove(currentIndex);
			}

			this.Faction = Faction;
			this.Faction.NPCs.push(this.Id);
		}
	}

	setHome(home: Vector3) {
		this.Home = home;
	}

	reset() {}

	say(message: string) {
		const Head = this.Character.FindFirstChild("Head");
		Chat.Chat(this.Character, message);
	}

	sayTo(player: Player, message: string) {}

	getJob(): INPCJob {
		return this.Job;
	}
	getTimers(): ITimers {
		return this.Timers;
	}
	shootItem(
		target: IEntityLiving | Vector3 | BasePart,
		item: MeshPart | BasePart | Model,
		accuracy: number,
	): IProjectile {
		return new Projectile({
			target: target,
			item: item,
			accuracy: accuracy,
		});
	}
	setDialog(slot: number, Dialog: Dialog): void {}

	getDialog(slot: number): Dialog {
		return this.Dialog[slot];
	}

	updateClient(player: Player): void {}
	executeCommand(command: string): boolean {
		//  Loadstring
		return true;
	}
	trigger(): void {}
}
