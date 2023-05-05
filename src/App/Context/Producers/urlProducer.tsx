import { createProducer } from "@rbxts/reflex";
import { UseProducerHook, useProducer } from "@rbxts/roact-reflex";

const InitialState = {
	directory: "/",
};

const urlProducer = createProducer(InitialState, {
	Link: (state, tab: string) => ({ ...state, SelectedTab: tab }),
});

export const useAppProducer: UseProducerHook<typeof urlProducer> = useProducer;

export default urlProducer;
