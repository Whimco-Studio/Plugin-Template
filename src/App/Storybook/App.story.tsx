import Roact from "@rbxts/roact";
import { ReflexProvider } from "@rbxts/roact-reflex";
import App from "App";
import { producer } from "App/Context/Producers";

export = {
	summary: "A generic button component that can be used anywhere",
	story: (
		<ReflexProvider producer={producer}>
			<App />
		</ReflexProvider>
	),
};
