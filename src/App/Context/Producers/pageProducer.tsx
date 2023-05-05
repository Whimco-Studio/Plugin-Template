import { createProducer } from "@rbxts/reflex";
import { UseProducerHook, useProducer } from "@rbxts/roact-reflex";

const InitialState = {
	SelectedTab: "Display",
};

const pageProducer = createProducer(InitialState, {
	set: (state, tab: string) => ({ ...state, SelectedTab: tab }),
});

export const useAppProducer: UseProducerHook<typeof pageProducer> = useProducer;

export default pageProducer;
