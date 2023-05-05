import Roact from "@rbxts/roact";
import App from "App";
import Object from "@rbxts/object-utils";
import { ServerStorage } from "@rbxts/services";
import { withHookDetection } from "@rbxts/roact-hooked";
import { ReflexProvider } from "@rbxts/roact-reflex";
import { producer } from "App/Context/Producers";

const toolbar = plugin.CreateToolbar("CustomNPCs");
const button = toolbar.CreateButton("CustomNPCS", "", "");

const widgetInfo = new DockWidgetPluginGuiInfo(
	Enum.InitialDockState.Float, // Widget will be initialized in floating panel
	true, // Widget will be initially enabled
	true, // Don't override the previous enabled state
	700, // Default width of the floating window
	500, // Default height of the floating window
	200, // Minimum width of the floating window (optional)
	100, // Minimum height of the floating window (optional)
	// 700, // Minimum width of the floating window (optional)
	// 500, // Minimum height of the floating window (optional)
);

const CustomNPCsWidget = plugin.CreateDockWidgetPluginGui("CustomNPCsWidget", widgetInfo);

if (game.GetService("RunService").IsEdit()) {
	withHookDetection(Roact);

	Roact.mount(
		<ReflexProvider producer={producer}>
			<App DockWidgetPluginGui={CustomNPCsWidget} />
		</ReflexProvider>,
		CustomNPCsWidget,
		"HelloWorld",
	);
}

CustomNPCsWidget.Title = "Custom NPCs";

button.Click.Connect(() => {
	CustomNPCsWidget.Enabled = !CustomNPCsWidget.Enabled;
});
