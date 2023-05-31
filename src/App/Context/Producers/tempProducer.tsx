import { createProducer } from "@rbxts/reflex";
import { UseProducerHook, useProducer } from "@rbxts/roact-reflex";

const InitialState = {
	SelectedTab: "Display",
};

const tempProducer = createProducer(InitialState, {
	set: (state, tab: string) => ({ ...state, SelectedTab: tab }),
});

export const useAppProducer: UseProducerHook<typeof tempProducer> = useProducer;

export default tempProducer;
