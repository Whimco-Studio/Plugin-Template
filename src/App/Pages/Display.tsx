import Roact from "@rbxts/roact";
import { Div } from "@rbxts/rowindcss";
import { Label, VerticalCollapsibleSection, VerticalExpandingList } from "@rbxts/studiocomponents";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import StyledButton from "App/Components/Base/StyledButton";
import { ContainedLabelSize, ContainedLabelSizeHalfWidth, LabelSizeHalfWidth } from "App/Config/Sizing";

// Display

interface DisplayProps {}

export default function Display(props: DisplayProps) {
	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout FillDirection={Enum.FillDirection.Vertical} />
			<LabelContainer Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel Size={ContainedLabelSizeHalfWidth} name="Name" text="" onSubmit={() => {}} />
				<StyledButton Size={ContainedLabelSizeHalfWidth} name="Visible" />
			</LabelContainer>
			{/* <VerticalCollapsibleSection OnToggled={() => {}}>
				<Label LayoutOrder={1} Size={UDim2.fromScale(1, 0.1)} Text="Done" />
			</VerticalCollapsibleSection> */}
		</frame>
	);
}
