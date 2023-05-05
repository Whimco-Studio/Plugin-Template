import Roact from "@rbxts/roact";
import { Label } from "@rbxts/studiocomponents";

// ErrorPager

interface ErrorPageProps {
	error?: string;
}

const ErrorPage: Roact.FunctionComponent<ErrorPageProps> = (props) => {
	return (
		<frame>
			<Label Text={props.error} />
		</frame>
	);
};

export default ErrorPage;
