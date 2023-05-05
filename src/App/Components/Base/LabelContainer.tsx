import Roact from "@rbxts/roact";
import { Label, TextInput } from "@rbxts/studiocomponents";
import { ContainerPadding, LabelSize } from "App/Config/Sizing";

// InputLabel

interface InputLabelProps {
	Size?: UDim2;
	Padding?: UDim;
	LayoutOrder?: number;
	FillDirection?: Enum.FillDirection;
	HorizontalAlignment?: Enum.HorizontalAlignment;
	onSubmit?: (text: string) => void;
}

const LabelContainer: Roact.FunctionComponent<InputLabelProps> = (props) => {
	return (
		<frame BackgroundTransparency={1} Size={props.Size || LabelSize} LayoutOrder={props.LayoutOrder}>
			<uipadding PaddingLeft={new UDim(0, 0)} PaddingRight={new UDim(0, 0)} />
			<uilistlayout
				Padding={props.Padding || new UDim(0, 0)}
				FillDirection={props.FillDirection || Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={props.HorizontalAlignment || Enum.HorizontalAlignment.Left}
			/>
			{props[Roact.Children]}
		</frame>
	);
};

export default LabelContainer;
