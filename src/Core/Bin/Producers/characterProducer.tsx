import { createProducer } from "@rbxts/reflex";
import { UseProducerHook, useProducer } from "@rbxts/roact-reflex";

const InitialState = {
	SelectedTab: "Display",
};

const characterProducer = createProducer(InitialState, {
	// setName: (state, Name: string) => ({

	// }),
	selectCharacter: (state, character: typeof state) => character,
});

export const useAppProducer: UseProducerHook<typeof characterProducer> = useProducer;

export default characterProducer;
