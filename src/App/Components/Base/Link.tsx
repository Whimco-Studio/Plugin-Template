import Roact from "@rbxts/roact";
import { slice } from "@rbxts/sift/out/Array";
import { Button } from "@rbxts/studiocomponents";
import { producer } from "App/Context/Producers";

// Link

interface LinkProps {
	text: string;
	to: string;
}

const Link: Roact.FunctionComponent<LinkProps> = (props) => {
	return (
		<Button
			Text={props.text}
			OnActivated={() => {
				if (props.to.sub(-1) === "/") {
					producer.Link(props.to);
				} else {
					warn(`${props.to} is missing ending slash /`);
				}
			}}
		/>
	);
};

export default Link;
