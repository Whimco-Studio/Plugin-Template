import Roact from "@rbxts/roact";
import { Button, Label, TextInput } from "@rbxts/studiocomponents";
import { LabelSize } from "App/Config/Sizing";

// ButtonLabel

interface ButtonLabelProps {
	Size?: UDim2;
	name: string;
	text: string;
	LayoutOrder?: number;
	OnActivated?: () => void;
}

export default function ButtonLabel(props: ButtonLabelProps) {
	return (
		<frame BackgroundTransparency={1} Size={props.Size || LabelSize} LayoutOrder={props.LayoutOrder}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>
			<Label Text={props.name} LayoutOrder={1} Size={UDim2.fromScale(0.25, 1)} TextScaled={true}>
				<uitextsizeconstraint MaxTextSize={32} />
			</Label>
			<Button
				LayoutOrder={2}
				TextScaled={true}
				Text={props.text}
				Size={UDim2.fromScale(0.75, 1)}
				OnActivated={() => {
					if (props.OnActivated) {
						props.OnActivated();
					}
				}}
			>
				<uitextsizeconstraint MaxTextSize={32} />
			</Button>
		</frame>
	);
}
