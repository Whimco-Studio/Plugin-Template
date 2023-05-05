import Roact from "@rbxts/roact";
import { withHookDetection } from "@rbxts/roact-hooked";
import { ReplicatedStorage, ServerScriptService } from "@rbxts/services";

const Storybook = ServerScriptService.Plugin.App.Storybook;

export = {
	roact: withHookDetection(Roact),
	storyRoots: [Storybook],
};
