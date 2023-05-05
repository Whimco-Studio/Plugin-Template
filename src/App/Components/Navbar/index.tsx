import Roact from "@rbxts/roact";
import { useState } from "@rbxts/roact-hooked";
import { Button, TabContainer } from "@rbxts/studiocomponents";
import { producer } from "App/Context/Producers";
import pageProducer from "App/Context/Producers/pageProducer";

// Navbar

interface NavbarProps {
	Size: UDim2;
}

export default function Navbar(props: NavbarProps) {
	const [selectedTab, setSelectedTab] = useState("Display");
	return (
		<TabContainer
			Size={props.Size}
			Tabs={[
				{
					Name: "Display",
				},
				{
					Name: "Stats",
				},
				{
					Name: "AI",
				},
				{
					Name: "Inventory",
					Disabled: true,
				},
				{
					Name: "Advanced",
				},
				{
					Name: "Global",
				},
				{
					Name: "Delete",
				},
			]}
			OnTabSelected={(tab: string) => {
				// producer.Link(`${tab}`);
				producer.set(tab);
				setSelectedTab(tab);
			}}
			SelectedTab={selectedTab}
		/>
	);
}
