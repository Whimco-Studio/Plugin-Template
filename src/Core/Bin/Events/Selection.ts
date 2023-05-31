/* eslint-disable roblox-ts/lua-truthiness */
import { producer } from "App/Context/Producers";
import Display from "App/Pages/Display";
import Bindings from "../Config/Binds";
import CustomNPC from "Core/Classes/Entity/CustomNPC";

// Services
const SelectionService = game.GetService("Selection");

//Events
const CreateNPC = Bindings.Core.Entity.CreateNPC;
const EntitySafeguard = Bindings.Core.Entity.EntitySafeguard;

function decompileConfiguration(model: Model | Actor, moduleScript: ModuleScript): void {
	const config = require(moduleScript) as PresetInfo;

	if (config.Id && EntitySafeguard.Invoke(config.Id)) {
		const NPC = EntitySafeguard.Invoke(config.Id) as CustomNPC;

		// Manager.LastSelected_NPC = Manager.Selected_NPC;
		// Manager.Selected_NPC = NPC;

		// Manager.SelectionChanged.Fire(Manager.Selected_NPC, Manager.LastSelected_NPC);
	} else {
		CreateNPC.Invoke(model, moduleScript);
	}
}

SelectionService.SelectionChanged.Connect(() => {
	const selection = SelectionService.Get();
	const character = selection[0];

	producer.set("Error");

	if (!character.IsA("Model") || character.IsA("Actor")) {
		return;
	}

	const configModuleScript = character.FindFirstChild("CustomNPC") as ModuleScript | undefined;

	if (configModuleScript) {
		decompileConfiguration(character, configModuleScript);
	} else {
		// Manager.Selected_Model = model;
		// promptConfigInjection();
	}
});
