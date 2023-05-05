import Roact from "@rbxts/roact";
import ButtonLabel from "App/Components/Base/ButtonLabel";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import { LabelSize, LabelSizeHalfWidth, LabelSizeThirdWidth } from "App/Config/Sizing";

// AI

interface AIProps {}

const AI: Roact.FunctionComponent<AIProps> = (props) => {
	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout FillDirection={Enum.FillDirection.Vertical} Padding={new UDim(0.025, 0)} />
			<LabelContainer Key={"1"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"OnFoundEnemy"}
					text={"Retaliate"}
				/>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"AvoidsWater"}
					text={"No"}
				/>
			</LabelContainer>
			<LabelContainer Key={"2"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"DoorInteract"}
					text={"Disabled"}
				/>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"ReturnToStart"}
					text={"Yes"}
				/>
			</LabelContainer>
			<LabelContainer Key={"3"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)} name={"CanSwim"} text={"Yes"} />
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"LeapAtTarget"}
					text={"No"}
				/>
			</LabelContainer>
			<LabelContainer Key={"4"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"Disabled"}
					text={"Test"}
				/>
			</LabelContainer>
			<LabelContainer Key={"5"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"MustSeeTarget"}
					text={"Yes"}
				/>
			</LabelContainer>
			<LabelContainer Key={"6"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"Attack Invisible"}
					text={"No"}
				/>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"TacticalVariant"}
					text={"Rush"}
				/>
			</LabelContainer>
			<LabelContainer Key={"7"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"Movement"}
					text={"Edit"}
				/>
			</LabelContainer>
		</frame>
	);
};

export default AI;
