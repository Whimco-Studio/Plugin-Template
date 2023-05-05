import { UseProducerHook, useProducer } from "@rbxts/roact-reflex";
import { RootProducer } from "./Producers";

export const useAppProducer: UseProducerHook<RootProducer> = useProducer;
