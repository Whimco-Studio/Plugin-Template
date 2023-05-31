import Roact from "@rbxts/roact";
import { Div } from "@rbxts/rowindcss";
import { Label, VerticalCollapsibleSection, VerticalExpandingList } from "@rbxts/studiocomponents";
import ButtonLabel from "App/Components/Base/ButtonLabel";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import StyledButton from "App/Components/Base/StyledButton";
import { ContainedLabelSize, ContainedLabelSizeHalfWidth, LabelSizeHalfWidth } from "App/Config/Sizing";
import { producer } from "App/Context/Producers";

// RangedOptions

interface RangedOptionsProps {}

export default function RangedOptions(props: RangedOptionsProps) {
	// const Character = producer.getState().character;
	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Vertical}
				Padding={new UDim(0, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			<LabelContainer LayoutOrder={1} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="Accuracy"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="Shot Count"
					text={"Character.Stats.Melee.getRange()"}
					onSubmit={() => {}}
				/>
			</LabelContainer>
			<LabelContainer LayoutOrder={2} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="Range"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="MeleeRange"
					text={"Character.Stats.Melee.getRange()"}
					onSubmit={() => {}}
				/>
			</LabelContainer>
			<LabelContainer LayoutOrder={3} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="MinDelay"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="MaxDelay"
					text={"Character.Stats.Melee.getRange()"}
					onSubmit={() => {}}
				/>
			</LabelContainer>
			<LabelContainer LayoutOrder={4} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="BurstCount"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="BurstRate"
					text={"Character.Stats.Melee.getRange()"}
					onSubmit={() => {}}
				/>
			</LabelContainer>
			<LabelContainer LayoutOrder={5} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="FireSound"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<StyledButton Size={ContainedLabelSizeHalfWidth} name="Select" />
			</LabelContainer>
			<LabelContainer LayoutOrder={6} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="HitSound"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<StyledButton Size={ContainedLabelSizeHalfWidth} name="Select" />
			</LabelContainer>
			<LabelContainer LayoutOrder={7} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<InputLabel
					Size={ContainedLabelSizeHalfWidth}
					name="GroundSound"
					text={"Character.Stats.Melee.getStrength()"}
					onSubmit={() => {}}
				/>
				<StyledButton Size={ContainedLabelSizeHalfWidth} name="Select" />
			</LabelContainer>
			<LabelContainer LayoutOrder={8} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<ButtonLabel
					Size={ContainedLabelSizeHalfWidth}
					name="Aim While Shooting"
					text={"No"}
					OnActivated={() => {}}
				/>
			</LabelContainer>
			<LabelContainer LayoutOrder={9} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
				<ButtonLabel
					Size={ContainedLabelSizeHalfWidth}
					name="Shoot Indirect"
					text={"No"}
					OnActivated={() => {}}
				/>
			</LabelContainer>
			<LabelContainer LayoutOrder={10} Size={LabelSizeHalfWidth} Padding={new UDim(0.1, 0)}>
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
