import { CollectionService, ReplicatedStorage, Workspace } from "@rbxts/services";
import Compile from "Core/Bin/Compiler/Compile";
import Bindings from "Core/Bin/Config/Binds";
import CustomNPC from "Core/Classes/Entity/CustomNPC";
import DialogHandler from "Core/Classes/Handlers/DialogHandler";
import FactionHandler from "Core/Classes/Handlers/FactionHandler";
import DialogCategory from "Core/Classes/Handlers/data/DialogCategory";
import Faction from "Core/Classes/Handlers/data/Faction";

const FactionManager = new FactionHandler();
const DialogManager = new DialogHandler();

class NPCManager {
	Selected_Model: Model | Actor | false;
	LastSelected_NPC: CustomNPC | false;
	Selected_NPC: CustomNPC | false;
	CustomNPCFilesInjected: boolean;

	CustomNPC_Configurations = Compile("Base", Workspace, {}, 1);

	DialogHandler = DialogManager;
	FactionHandler = FactionManager;
	CustomNPCs: CustomNPC[];
	Clones: {
		[key: string]: CustomNPC;
	};

	// Events
	SendPacket: RemoteEvent;
	PrivateMessage: RemoteEvent;
	QuestCompleted: RemoteEvent;
	UpdateCustomNPC: RemoteEvent;

	InjectGameFiles: BindableFunction;
	SelectionChanged: BindableEvent;
	StoreAsCloneEvent: BindableEvent;
	InjectCustomNPCFiles: BindableEvent;
	PromptInjectCustomNPCFiles: BindableEvent;

	BaseFaction: Faction;
	BaseDialogCategory: DialogCategory;

	constructor() {
		this.Selected_NPC = false;
		this.LastSelected_NPC = false;
		this.Selected_Model = false;
		this.CustomNPCFilesInjected = false;
		this.CustomNPCs = [];
		this.Clones = {};

		// Events
		this.SendPacket = new Instance("RemoteEvent");
		this.PrivateMessage = new Instance("RemoteEvent");
		this.QuestCompleted = new Instance("RemoteEvent");
		this.UpdateCustomNPC = new Instance("RemoteEvent");

		this.InjectGameFiles = new Instance("BindableFunction");
		this.SelectionChanged = new Instance("BindableEvent");
		this.StoreAsCloneEvent = new Instance("BindableEvent");
		this.InjectCustomNPCFiles = new Instance("BindableEvent");
		this.PromptInjectCustomNPCFiles = new Instance("BindableEvent");

		this.Listen();

		this.BaseFaction = this.FactionHandler.create("Neutral", new Color3(1, 1, 0));
		this.BaseDialogCategory = this.DialogHandler.create("Welcome");
		// WelcomeToCustomNPCs.create("Welcom to CustomNPCs").createOption("Hello!");
	}

	init() {
		const FriendlyFaction = this.FactionHandler.create("Friendly", new Color3(0, 1, 0));
		const AggressiveFaction = this.FactionHandler.create("Aggressive", new Color3(1, 0, 0));
	}

	getNpc(Character: Model | Actor, configurationFile: ModuleScript): CustomNPC | undefined {
		const Info = require(configurationFile) as PresetInfo;

		this.CustomNPCs.forEach((element) => {
			if (element.Character === Character) {
				print("found");
				return element;
			}
		});

		return undefined;
	}
	getNpcFromID(ID: string): CustomNPC | false {
		for (const [Key, CustomNPC] of pairs(this.CustomNPCs)) {
			if (CustomNPC.Id === ID) {
				return CustomNPC;
			}
		}

		return false;
	}

	applyDescription(originalNPC: CustomNPC, newNPC: CustomNPC) {}

	createNPC(Character: Model | Actor, ConfigurationFile?: ModuleScript) {
		const ConfigurationFileExist = ConfigurationFile ? true : false;
		const Configuration = ConfigurationFile || new Instance("ModuleScript");
		Configuration.Name = "CustomNPC";
		Configuration.Parent = Character;

		if (!ConfigurationFileExist) {
			Configuration.Source = "return {}";
		}

		const DupeId = Configuration.GetAttribute("ID");

		let Copy = {};
		if (DupeId && typeIs(DupeId, "string")) {
			const NPC = this.getNpcFromID(DupeId);
			if (NPC) {
				Copy = {
					...NPC,
				};
			}
		}

		CollectionService.AddTag(Character, "CustomNPC");

		const newCustomNPC =
			this.getNpc(Character, Configuration) ||
			new CustomNPC(
				Character,
				{
					FactionHandler: FactionManager,
				},
				{
					Faction: this.BaseFaction,
				},
				Copy,
			);

		this.CustomNPCs.push(newCustomNPC);

		print("Configuration created");

		Compile("CustomNPC", Character, newCustomNPC, 2);

		this.BaseFaction.NPCs.push(newCustomNPC.Id);
		this.LastSelected_NPC = this.Selected_NPC;
		this.Selected_NPC = newCustomNPC;

		this.compileSelected();

		this.SelectionChanged.Fire(this.Selected_NPC, this.LastSelected_NPC);

		return newCustomNPC;
	}

	Listen() {
		Bindings.Core.Compiling.CompileTable.OnInvoke = (ToCompile: string) => {
			this.CompileBind(ToCompile);
		};
	}

	// repr
	convertToModuleScript() {
		const _CustomNPCs = ReplicatedStorage.FindFirstChild("CustomNPCs");

		if (_CustomNPCs && _CustomNPCs.IsA("ModuleScript")) {
			_CustomNPCs.Destroy();
		}

		const CustomNPCs = new Instance("ModuleScript");
		CustomNPCs.Name = "CustomNPCs";
		CustomNPCs.Parent = ReplicatedStorage;
		CustomNPCs.Source = "return {'This is just a parent insteads'}";

		for (const [key, value] of pairs(this)) {
			if (typeIs(key, "string") && typeIs(value, "table")) {
				Compile(key, CustomNPCs, value as object, 4);
			}
		}
	}

	CompileBind(ToCompile: string) {
		const Temp = this.CustomNPC_Configurations.FindFirstChild(ToCompile);
		if (Temp) {
			Temp.Destroy();
		}

		switch (ToCompile) {
			case "Factions":
				return Compile(ToCompile, this.CustomNPC_Configurations, this.FactionHandler.Factions, 1);
			case "Dialogs":
				return Compile(ToCompile, this.CustomNPC_Configurations, this.DialogHandler, 1);

			default:
				break;
		}

		this.convertToModuleScript();
	}

	compileSelected() {
		if (this.Selected_NPC) {
			const Module = Compile("CustomNPC", this.Selected_NPC.Character, this.Selected_NPC, 2);
			Module.SetAttribute("ID", this.Selected_NPC.Id);
		}

		this.convertToModuleScript();
	}

	compileUpdates_NPC() {}

	updateSelected_NPC = (npcToUpdate?: ICustomNPC): void => {
		const Selected_NPC = npcToUpdate || this.Selected_NPC;
		if (Selected_NPC) {
			Selected_NPC;
		}
	};

	StoreAsClone(tab: number, name: string, character: Model | Actor) {}

	DeleteDialogCategory(id: number) {}
	DeleteDialog(id: number) {}

	DeleteFaction(id: number) {
		const Faction = FactionManager.get(id);

		if (Faction) {
			Faction.NPCs.forEach((npcID, index) => {
				const CurrentNPC = this.getNpcFromID(npcID);
				if (CurrentNPC) {
					CurrentNPC.Faction = FactionManager.list()[0];
				}
			});

			FactionManager.delete(id);
		}
	}
}

export default new NPCManager();
