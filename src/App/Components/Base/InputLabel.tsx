import Roact from "@rbxts/roact";
import { Label, TextInput } from "@rbxts/studiocomponents";
import { LabelSize } from "App/Config/Sizing";

// InputLabel

interface InputLabelProps {
	Size?: UDim2;
	name: string;
	text: string;
	LayoutOrder?: number;
	onSubmit?: (text: string) => void;
}

export default function InputLabel(props: InputLabelProps) {
	return (
		<frame BackgroundTransparency={1} Size={props.Size || LabelSize} LayoutOrder={props.LayoutOrder}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>
			{/* <uipadding PaddingLeft={new UDim(0.1, 0)} PaddingRight={new UDim(0.1, 0)} /> */}
			<Label Text={props.name} LayoutOrder={1} Size={UDim2.fromScale(0.25, 1)} TextScaled={true}>
				<uitextsizeconstraint MaxTextSize={32} />
			</Label>
			<TextInput
				LayoutOrder={2}
				Text={props.text}
				Size={UDim2.fromScale(0.75, 1)}
				OnFocusLost={(text: string, enterPressed) => {
					if (props.onSubmit) {
						props.onSubmit(text);
					}
				}}
			>
				<uitextsizeconstraint MaxTextSize={32} />
			</TextInput>
		</frame>
	);
}
