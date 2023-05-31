import { createProducer } from "@rbxts/reflex";
import { UseProducerHook, useProducer } from "@rbxts/roact-reflex";
import { ServerScriptService } from "@rbxts/services";
import CustomNPC from "Core/Classes/Entity/CustomNPC";
import Manager from "Core/Manager";

const Temp = new Instance("Model");
Temp.Name = "Ignore";
Temp.Parent = ServerScriptService;

const InitialState = Manager.createNPC(Temp);

const characterProducer = createProducer(InitialState, {
	selectCharacter: (state, character: CustomNPC) => character,
});

export const useAppProducer: UseProducerHook<typeof characterProducer> = useProducer;

export default characterProducer;
