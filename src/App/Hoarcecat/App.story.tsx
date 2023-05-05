import Roact from "@rbxts/roact";
import { withHookDetection } from "@rbxts/roact-hooked";
import { ReflexProvider } from "@rbxts/roact-reflex";
import { ReplicatedStorage } from "@rbxts/services";
import App from "App";
import { producer } from "App/Context/Producers";

export = function (target: Instance) {
	withHookDetection(Roact);
	const tree = Roact.mount(
		<ReflexProvider producer={producer}>
			<App />
		</ReflexProvider>,
		target,
	);

	return function () {
		Roact.unmount(tree);
	};
};
