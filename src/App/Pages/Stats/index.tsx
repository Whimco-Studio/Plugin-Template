import Roact from "@rbxts/roact";
import ButtonLabel from "App/Components/Base/ButtonLabel";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import { LabelSize, LabelSizeThirdWidth } from "App/Config/Sizing";
import { producer } from "App/Context/Producers";

// Stats

interface StatsProps {}

const Stats: Roact.FunctionComponent<StatsProps> = (props) => {
	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout FillDirection={Enum.FillDirection.Vertical} Padding={new UDim(0.025, 0)} />
			<LabelContainer Key={"1"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<InputLabel Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)} name={"Health"} text={"Test"} />
				<InputLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"AggroRange"}
					text={"Test"}
				/>
				{/* <ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"CreatureType"}
					text={"Test"}
				/> */}
			</LabelContainer>
			<LabelContainer Key={"2"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"Respawn"}
					text={"Edit"}
					OnActivated={() => {
						producer.set("StatsRespawn");
					}}
				/>
			</LabelContainer>
			<LabelContainer Key={"3"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"MeleeOptions"}
					text={"Edit"}
					OnActivated={() => {
						producer.set("MeleeOptions");
					}}
				/>
			</LabelContainer>
			<LabelContainer Key={"4"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"RangedOptions"}
					text={"Edit"}
					OnActivated={() => {
						producer.set("RangedOptions");
					}}
				/>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"ProjectileType"}
					text={"Edit"}
				/>
			</LabelContainer>
			<LabelContainer Key={"5"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"Resistance"}
					text={"Edit"}
				/>
			</LabelContainer>
			<LabelContainer Key={"6"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<InputLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"ImmuneToFire"}
					text={"No"}
				/>
				<InputLabel Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)} name={"CanDrown"} text={"Yes"} />
				<InputLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"Health Regen"}
					text={"0"}
				/>
			</LabelContainer>
			<LabelContainer Key={"7"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<InputLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"BurnsInSun"}
					text={"No"}
				/>
				<InputLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"NoFallDamage"}
					text={"Yes"}
				/>
				<InputLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"Combat Regen"}
					text={"0"}
				/>
			</LabelContainer>

			<LabelContainer Key={"8"} Size={LabelSize} Padding={new UDim(0.025, 0)}>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"PotionImmune"}
					text={"Edit"}
				/>
				<ButtonLabel
					Size={UDim2.fromScale(LabelSizeThirdWidth.Width.Scale, 1)}
					name={"CobwebAffected"}
					text={"Edit"}
				/>
			</LabelContainer>
		</frame>
	);
};

export default Stats;
