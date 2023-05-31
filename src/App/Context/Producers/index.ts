import { InferDispatchers, InferState, combineProducers } from "@rbxts/reflex";
import tempProducer from "./tempProducer";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;
export type RootDispatchers = InferDispatchers<RootProducer>;

export const producer = combineProducers({
	tempt: tempProducer,
});
