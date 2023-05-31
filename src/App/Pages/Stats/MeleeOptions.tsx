import Roact from "@rbxts/roact";
import { Div } from "@rbxts/rowindcss";
import { Label, VerticalCollapsibleSection, VerticalExpandingList } from "@rbxts/studiocomponents";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import StyledButton from "App/Components/Base/StyledButton";
import { ContainedLabelSize, ContainedLabelSizeHalfWidth, LabelSizeHalfWidth } from "App/Config/Sizing";
import { producer } from "App/Context/Producers";

// MeleeOptions

interface MeleeOptionsProps {}

export default function MeleeOptions(props: MeleeOptionsProps) {
	// const Character = producer.getState().character;
	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Vertical}
				Padding={new UDim(0.5, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
			/>
			<LabelContainer
				Size={LabelSizeHalfWidth}
				Padding={new UDim(0.1, 0)}
				FillDirection={Enum.FillDirection.Vertical}
			>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="MeleeStrength"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="MeleeRange"
					text={"Character.Stats.Melee.getRange()"}
					onSubmit={() => {}}
				/>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="MeleeSpeed"
					text={"Character.Stats.Melee.getSpeed()"}
					onSubmit={() => {}}
				/>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="Knockback"
					text={"Character.Stats.Melee.getKnockback()"}
					onSubmit={() => {}}
				/>
			</LabelContainer>
			<LabelContainer Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<StyledButton
					Size={ContainedLabelSizeHalfWidth}
					name="Done"
					OnActivated={() => {
						producer.set("Stats");
					}}
				/>
			</LabelContainer>
		</frame>
	);
}
