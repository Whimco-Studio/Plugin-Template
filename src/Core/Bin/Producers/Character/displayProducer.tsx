import { createProducer } from "@rbxts/reflex";
import { UseProducerHook, useProducer } from "@rbxts/roact-reflex";

const InitialState = {
	Name: "Name",
	Title: "Title",
	HasLivingAnimation: true,
	Visible: true,
	BossBar: false,
	Size: 1,
	Tint: Color3.fromRGB(0, 0, 0),
	ShowName: true,
	Interactable: false,
};

const displayProducer = createProducer(InitialState, {
	setName: (state, Name: string) => ({
		...state,
		Name: Name,
	}),
	setTitle: (state, Title: string) => ({
		...state,
		Title: Title,
	}),
	setHasLivingAnimation: (state, HasLivingAnimation: boolean) => ({
		...state,
		HasLivingAnimation: HasLivingAnimation,
	}),
	setVisible: (state, Visible: boolean) => ({
		...state,
		Visible: Visible,
	}),
	setBossBar: (state, BossBar: boolean) => ({
		...state,
		BossBar: BossBar,
	}),
	setSize: (state, Size: number) => ({
		...state,
		Size: Size,
	}),
	setTint: (state, Tint: Color3) => ({
		...state,
		Tint: Tint,
	}),
	setShowName: (state, ShowName: boolean) => ({
		...state,
		ShowName: ShowName,
	}),
	setInteractable: (state, Interactable: boolean) => ({
		...state,
		Interactable: Interactable,
	}),

	setDisplay: (state, display: typeof state) => display,
});

export const useAppProducer: UseProducerHook<typeof displayProducer> = useProducer;

export default displayProducer;
