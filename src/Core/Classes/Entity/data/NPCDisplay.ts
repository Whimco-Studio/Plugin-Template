import Object from "@rbxts/object-utils";
import CustomNPC from "../CustomNPC";

type ConfigValue = StringValue | BoolValue | NumberValue | Color3Value | ObjectValue | CFrameValue | Vector3Value;

type ConfigValues = {
	NameValue: ConfigValue;
	TitleValue: ConfigValue;
	HasLivingAnimationValue: ConfigValue;
	VisibleValue: ConfigValue;
	BossBarValue: ConfigValue;
	SizeValue: ConfigValue;
	TintValue: ConfigValue;
	ShowNameValue: ConfigValue;
	CharacterValue: ConfigValue;
	HitboxStateValue: ConfigValue;
	InteractableValue: ConfigValue;
};

function color3ToHex(c3: Color3): string {
	const r = math.floor(c3.R * 255);
	const g = math.floor(c3.G * 255);
	const b = math.floor(c3.B * 255);
	return string.format("#%X%X%X", r, g, b);
}

function hexToColor3(hex: string): Color3 {
	// from https://gist.github.com/jasonbradley/4357406
	hex = hex.gsub("#", "")[0];
	const r = tonumber("0x" + hex.sub(1, 2));
	const g = tonumber("0x" + hex.sub(3, 4));
	const b = tonumber("0x" + hex.sub(5, 6));
	return new Color3(r, g, b);
}
interface IIndexable {
	[key: string]: string | number | any;
}

export interface DisplayProperties {
	Name: string;
	Title: string;
	HasLivingAnimation: boolean;
	Visible: number;
	BossBar: number;
	Size: number;
	Tint: string;
	ShowName: number;
	BossColor: number;
	Interactable: boolean;
	HitboxState: number;
}

export default class NPCDisplay implements INPCDisplay, IIndexable {
	Name: string;
	Title: string;
	HasLivingAnimation: boolean;
	Visible: number;
	BossBar: number;
	Size = 1;
	Tint: string;
	ShowName: number;
	BossColor: number;
	Interactable: boolean;
	Character: Model | Actor;
	HitboxState: number | 0;

	constructor(Character: Model | Actor, Info?: DisplayProperties) {
		this.Character = Character;
		this.Name = Character.Name;
		this.Title = Info?.Title || "";
		this.HasLivingAnimation = Info?.HasLivingAnimation || true;
		this.Visible = Info?.Visible || 0;
		this.BossBar = Info?.BossBar || 0;
		this.Size = Info?.Size || 1;
		this.Tint = Info?.Tint || color3ToHex(new Color3());
		this.ShowName = Info?.ShowName || 0;
		this.BossColor = Info?.BossColor || 0;
		this.HitboxState = Info?.HitboxState || 0;
		this.Interactable = Info?.Interactable || false;
	}

	unpack(): void {
		// const CV = this.ConfigValues;
		// if (typeOf(this.Name) === typeOf(CV.NameValue.Value)) {
		// 	this.Name = CV.NameValue.Value;
		// }
	}

	setValue(valueName: string, value: ValueBase) {}

	getName() {
		return this.Name;
	}

	setName(name: string): void {
		this.Character.Name = name;
		this.Name = name;
	}

	getTitle(): string {
		return this.Title;
	}

	setTitle(title: string): void {
		this.Title = title;
	}

	getInteractable(): boolean {
		return this.Interactable;
	}

	setInteractable(value: boolean): void {
		this.Interactable = value;
	}

	getHasLivingAnimation(): boolean {
		return this.HasLivingAnimation;
	}

	setHasLivingAnimation(enabled: boolean): void {
		this.HasLivingAnimation = enabled;
	}

	getVisible(): number {
		return this.Visible;
	}

	setVisible(status: number): void {
		this.Visible = status;
	}

	isVisibleTo(PlayerTag: string): boolean {
		return true;
	}

	getBossbar(): number {
		return this.BossBar;
	}

	setBossbar(status: number): void {
		this.BossBar = status;
	}

	getSize(): number {
		return this.Size;
	}

	setSize(size: number): void {
		this.Size = size;
	}

	getTint(tint?: string | Color3): string {
		if (tint) {
			if (typeIs(tint, "string")) {
				const Hex = Color3.fromHex(tint);

				if (Hex) {
					return tint;
				} else {
					return "ffffff";
				}
			} else {
				return color3ToHex(tint);
			}
		}

		return "ffffff";
	}

	setTint(color: string): void {}

	getShowName(): number {
		return this.ShowName;
	}

	setShowName(status: number): void {}

	setModelScale(part: number, x: number, y: number, z: number): void {}

	getModelScale(part: number): number[] {
		return [1];
	}

	getBossColor(): number {
		return this.BossBar;
	}

	setBossColor(color: number): void {}

	setModel(model: string): void {
		// }
	}

	getModel(): string {
		return this.Character.Name;
	}

	setHitboxState(state: number): void {}

	getHitboxState(): number {
		return 0;
	}
}
