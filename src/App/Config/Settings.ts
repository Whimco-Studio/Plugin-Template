const App = script.Parent?.Parent;

const _RouteInfo = {
	Routes: App?.FindFirstChild("Pages") || App,
};

export const RouteInfo = _RouteInfo;
