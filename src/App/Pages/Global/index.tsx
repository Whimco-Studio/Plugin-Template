import Roact from "@rbxts/roact";
import LabelContainer from "App/Components/Base/LabelContainer";
import StyledButton from "App/Components/Base/StyledButton";
import { ContainedLabelSizeHalfWidth, LabelSize } from "App/Config/Sizing";
import { producer } from "App/Context/Producers";

// Global

interface GlobalProps {
	name: string;
}

const ButtonNames = [
	{
		Name: "Bank",
		Disabled: true,
	},
	{
		Name: "Factions",
	},
	{
		Name: "Dialogs",
	},
	{
		Name: "Quests",
	},
	{
		Name: "Transport",
	},
	{
		Name: "PlayerData",
	},
	{
		Name: "Linked",
	},
];

const Global: Roact.FunctionComponent<GlobalProps> = (props) => {
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
						<StyledButton
							Size={ContainedLabelSizeHalfWidth}
							name={element.Name}
							Disabled={element.Disabled}
							OnActivated={() => {
								print(element.Name);
								// producer.set(ButtonName);
							}}
						/>
					</LabelContainer>
				);
			})}
		</frame>
	);
};

export default Global;
