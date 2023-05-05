import { InferDispatchers, InferState, combineProducers } from "@rbxts/reflex";
import pageProducer from "./pageProducer";
import urlProducer from "./urlProducer";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;
export type RootDispatchers = InferDispatchers<RootProducer>;

export const producer = combineProducers({
	page: pageProducer,
	url: urlProducer,
});
