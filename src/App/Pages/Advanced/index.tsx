import Roact from "@rbxts/roact";
import ButtonLabel from "App/Components/Base/ButtonLabel";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import StyledButton from "App/Components/Base/StyledButton";
import {
	ContainedLabelSizeHalfWidth,
	ContainedLabelSizeHeightFull,
	LabelSize,
	LabelSizeHalfWidth,
	LabelSizeThirdWidth,
} from "App/Config/Sizing";
import { producer } from "App/Context/Producers";

// Advanced

interface AdvancedProps {}

const ButtonNames = [
	["Lines", "Faction"],
	["Dialogs", "Sounds"],
	["Night", "Linked"],
	["Scenes", "Marked"],
];

const Advanced: Roact.FunctionComponent<AdvancedProps> = (props) => {
	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uipadding PaddingLeft={new UDim(0.1, 0)} PaddingRight={new UDim(0.1, 0)} />
			<uilistlayout
				FillDirection={Enum.FillDirection.Vertical}
				Padding={new UDim(0.025, 0)}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
			/>
			{ButtonNames.map((element, index) => {
				return (
					<LabelContainer
						Key={tostring(index)}
						Size={LabelSize}
						Padding={new UDim(0.025, 0)}
						HorizontalAlignment={Enum.HorizontalAlignment.Center}
					>
						{element.map((ButtonName) => {
							return (
								<StyledButton
									Size={ContainedLabelSizeHalfWidth}
									name={ButtonName}
									OnActivated={() => {
										print(ButtonName);
										producer.set(ButtonName);
									}}
								/>
							);
						})}
					</LabelContainer>
				);
			})}
		</frame>
	);
};

export default Advanced;
