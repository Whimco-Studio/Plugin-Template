/* eslint-disable roblox-ts/lua-truthiness */
import Roact from "@rbxts/roact";
import { useEffect, useState } from "@rbxts/roact-hooked";
import { Array } from "@rbxts/sift";
import { Button, Label, TextInput } from "@rbxts/studiocomponents";
import { ContainerPadding, LabelSize } from "App/Config/Sizing";

// CarouselContainer

interface CarouselContainerProps {
	Size?: UDim2;
	Padding?: UDim;
	Label?: string;
	Options: string[];
	LayoutOrder?: number;
	CurrentSelection: string;
	FillDirection?: Enum.FillDirection;
	HorizontalAlignment?: Enum.HorizontalAlignment;
	onSubmit?: (text: string) => void;
	changed?: (currentSelection: string) => void;
}

const CarouselContainer: Roact.FunctionComponent<CarouselContainerProps> = (props) => {
	const Indexed = Array.find(props.Options, props.CurrentSelection);
	const [currentSelection, setCurrentSelection] = useState(Indexed ? Indexed : 0);

	useEffect(() => {
		if (props.changed) {
			const currentOption = props.Options[currentSelection - 1];
			props.changed(currentOption);
		}
	}, [currentSelection]);

	function increment(postive: boolean) {
		if (postive) {
			const temp = currentSelection + 1 > props.Options.size() ? 1 : currentSelection + 1;
			setCurrentSelection(currentSelection + 1 > props.Options.size() ? 1 : currentSelection + 1);
		} else {
			print(currentSelection - 1 < 1 ? props.Options.size() : currentSelection - 1);
			setCurrentSelection(currentSelection - 1 < 1 ? props.Options.size() : currentSelection - 1);
		}
	}

	return (
		<frame BackgroundTransparency={1} Size={props.Size || LabelSize} LayoutOrder={props.LayoutOrder}>
			<uipadding PaddingLeft={new UDim(0, 0)} PaddingRight={new UDim(0, 0)} />
			<uilistlayout
				Padding={props.Padding || new UDim(0, 0)}
				FillDirection={props.FillDirection || Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={props.HorizontalAlignment || Enum.HorizontalAlignment.Left}
			/>
			{props.Label !== undefined && (
				<Label Text={props.Label} LayoutOrder={1} Size={UDim2.fromScale(0.25, 1)} TextScaled={true}>
					<uitextsizeconstraint MaxTextSize={32} />
				</Label>
			)}
			<Button
				Text="<"
				TextScaled={true}
				LayoutOrder={2}
				Size={UDim2.fromScale(0.05, 1)}
				OnActivated={() => {
					increment(false);
				}}
			>
				<uiaspectratioconstraint AspectRatio={0.5} />
			</Button>
			<Button
				LayoutOrder={3}
				Text={props.Options[currentSelection - 1]}
				TextScaled={true}
				Size={UDim2.fromScale(0.1, 1)}
			/>
			<Button
				Text=">"
				LayoutOrder={4}
				TextScaled={true}
				Size={UDim2.fromScale(0.05, 1)}
				OnActivated={() => {
					increment(true);
				}}
			>
				<uiaspectratioconstraint AspectRatio={0.5} />
			</Button>
		</frame>
	);
};

export default CarouselContainer;
