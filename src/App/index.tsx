import Roact from "@rbxts/roact";

// App

interface AppProps {
	name: string;
}

export default function App(props: AppProps) {
	return (
		<textbutton
			Text={`Hello, ${props.name}`}
			TextSize={22}
			Font={Enum.Font.Gotham}
			Event={{ MouseButton1Click: () => print("Click!") }}
		/>
	);
}
