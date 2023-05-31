import Roact from "@rbxts/roact";
import { useEffect, useState } from "@rbxts/roact-hooked";
import { Input } from "@rbxts/rowindcss";
import ButtonLabel from "App/Components/Base/ButtonLabel";
import CarouselContainer from "App/Components/Base/CarouselContainer";
import InputLabel from "App/Components/Base/InputLabel";
import LabelContainer from "App/Components/Base/LabelContainer";
import StyledButton from "App/Components/Base/StyledButton";
import { ContainedLabelSize, LabelSize, LabelSizeHalfWidth, LabelSizeThirdWidth } from "App/Config/Sizing";
import { producer } from "App/Context/Producers";

// StatsRespawn

interface StatsRespawnProps {
	name: string;
}

const StatsRespawn: Roact.FunctionComponent<StatsRespawnProps> = (props) => {
	const [option, setOption] = useState("Yes");

	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Vertical}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Left}
			/>

			<CarouselContainer
				changed={(currentOption: string) => {
					setOption(currentOption);
				}}
				LayoutOrder={1}
				CurrentSelection="Yes"
				Options={["Yes", "No"]}
				Label="Respawn"
			/>

			{option === "Yes" && <InputLabel LayoutOrder={3} Size={LabelSizeHalfWidth} name={"Time"} text={"20"} />}
			<StyledButton
				LayoutOrder={10}
				name="Done"
				Size={LabelSizeHalfWidth}
				OnActivated={() => {
					producer.set("Stats");
				}}
			/>
		</frame>
	);
};

export default StatsRespawn;
