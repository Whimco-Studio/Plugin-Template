import Roact from "@rbxts/roact";
import { Background } from "@rbxts/studiocomponents";
import Navbar from "./Components/Navbar";
import { useEffect, useState, withHooks } from "@rbxts/roact-hooked";
import { RootState, producer } from "./Context/Producers";
import Display from "./Pages/Display";
import Stats from "./Pages/Stats";
import { GetPageFromDirectory } from "./Modules/Url";
import AI from "./Pages/AI";
import Advanced from "./Pages/Advanced";
import ErrorPage from "./Pages/Error";
import Bindings, { Interface } from "../Core/Bin/Config/Binds";

// Selectors

// App

interface AppProps {
	DockWidgetPluginGui?: DockWidgetPluginGui;
}

function App(props: AppProps) {
	const [url, setUrl] = useState("Display");

	useEffect(() => {
		const selectURL = (state: RootState) => state.page;
		const unsubscribeFromLink = producer.subscribe(selectURL, (url, prevUrl) => {
			// print(`Routing from ${prevUrl} to ${url}`);
			setUrl(url.SelectedTab);
		});
		return () => {
			unsubscribeFromLink();
		};
	}, []);

	useEffect(() => {}, [url]);

	function renderSelectedTab() {
		const RouteSafeGuard = Interface.RouteSafeGuard.Invoke(url) as boolean;

		print(url, RouteSafeGuard);
		if (RouteSafeGuard) {
			const Component = Interface.IndexRoutes.Invoke(url) as () => Roact.Element;
			return <Component />;
		}
		return <ErrorPage />;
	}

	return (
		<Background>
			<uilistlayout FillDirection={Enum.FillDirection.Vertical} />
			<Navbar Size={UDim2.fromScale(1, 0.1)} />
			<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 0.9)}>
				{renderSelectedTab()}
			</frame>
		</Background>
	);
}

export default withHooks(App);
