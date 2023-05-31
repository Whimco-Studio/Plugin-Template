import Roact from "@rbxts/roact";
import ButtonLabel from "App/Components/Base/ButtonLabel";
import CarouselContainer from "App/Components/Base/CarouselContainer";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import StyledButton from "App/Components/Base/StyledButton";
import {
	ContainedLabelSize,
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
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			{/* <LabelContainer
				Key={tostring(0)}
				LayoutOrder={0 + 1}
				Size={LabelSize}
				Padding={new UDim(0.025, 0)}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
			>
				
			</LabelContainer> */}
			<CarouselContainer
				LayoutOrder={0}
				Size={ContainedLabelSize}
				CurrentSelection="Test"
				Options={["Test", "Failed", "Success"]}
			/>
			{ButtonNames.map((element, index) => {
				return (
					<LabelContainer
						Key={tostring(index)}
						LayoutOrder={index + 3}
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
