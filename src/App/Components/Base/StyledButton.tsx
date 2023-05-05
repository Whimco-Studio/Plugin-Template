import Roact from "@rbxts/roact";
import { Button, Label, TextInput } from "@rbxts/studiocomponents";
import { LabelSize } from "App/Config/Sizing";

// StyledButton

interface StyledButtonProps {
	Size?: UDim2;
	name: string;
	LayoutOrder?: number;
	Disabled?: boolean;
	OnActivated?: () => void;
}

export default function StyledButton(props: StyledButtonProps) {
	return (
		<frame BackgroundTransparency={1} Size={props.Size || LabelSize} LayoutOrder={props.LayoutOrder}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>
			<Button
				LayoutOrder={2}
				TextScaled={true}
				Text={props.name}
				Disabled={props.Disabled || false}
				Size={UDim2.fromScale(1, 1)}
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
