import { InferDispatchers, InferState, combineProducers } from "@rbxts/reflex";
import pageProducer from "./pageProducer";
import urlProducer from "./urlProducer";
import characterProducer from "Core/Bin/Producers/Character/characterProducer";
import displayProducer from "Core/Bin/Producers/Character/displayProducer";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;
export type RootDispatchers = InferDispatchers<RootProducer>;

export const producer = combineProducers({
	// character: characterProducer,
	display: displayProducer,
	page: pageProducer,
	url: urlProducer,
});
