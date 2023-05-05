import Roact from "@rbxts/roact";
import ErrorPage from "App/Pages/Error";
import { RouteInfo } from "../../../App/Config/Settings";

const Bindings = {
	Core: {
		Entity: {
			SaveAsClone: new Instance("BindableFunction"),
		},
		Compiling: {
			CompileAll: new Instance("BindableFunction"),
			CompileTable: new Instance("BindableFunction"),
		},
		Dialog: {
			GetDialogCategory: new Instance("BindableFunction"),
		},
	},
	Interface: {
		IndexRoutes: new Instance("BindableFunction"),
		RouteSafeGuard: new Instance("BindableFunction"),
	},
};

Bindings.Interface.RouteSafeGuard.OnInvoke = (Route: string) => {
	const QueriedRoute = RouteInfo.Routes?.FindFirstChild(Route, true);
	if (QueriedRoute) {
		return true;
	} else {
		return false;
	}
};

Bindings.Interface.IndexRoutes.OnInvoke = (Route: string) => {
	const QueriedRoute = RouteInfo.Routes?.FindFirstChild(Route, true);
	if (QueriedRoute) {
		const Component = require(QueriedRoute as ModuleScript) as {
			default: Roact.Element;
		};

		return Component.default;
	} else {
		return ErrorPage({});
	}
};

export default Bindings;
export const Interface = Bindings.Interface;
