import Roact from "@rbxts/roact";
import { slice } from "@rbxts/sift/out/Array";
import ErrorPage from "App/Pages/Error";

interface LoadPageResult {
	default: Roact.ComponentConstructor<any>;
}

function BreakdownUrl(url: string) {
	if (url.sub(1, 1) === "/") {
		url = url.sub(2);
	}
	return url.split("/");
}

export const GetPageFromDirectory = (url: string) => {
	const toTraverse = BreakdownUrl(url);
	const pageName = toTraverse[0];

	try {
		const pagePath = `pages/${pageName}.tsx`;
		// const loadPage = plugin.CreatePluginAction<LoadPageResult>("LoadPage", "", "Status Tip");
		// const PageComponent = loadPage.Invoke(pagePath).default;

		const params = slice(toTraverse, 1);
		// return <PageComponent {...props} params={params} />;
	} catch (error) {
		return <ErrorPage />;
	}
};
