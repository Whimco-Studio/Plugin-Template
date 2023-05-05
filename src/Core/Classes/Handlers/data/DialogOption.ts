import OptionType from "../../Constants/OptionType";
import DialogResponse from "./Dialog";

type DialogOptionProperties = {
	Node: number;
	Type: number;
	Name?: string;
	Color?: Color3;
	Response?: IDialog;
};

export default class DialogOption implements IDialogOption {
	Node: number;
	Name: string;
	Type: number;
	Color?: Color3;
	Response: IDialog | undefined;

	constructor(Info: DialogOptionProperties) {
		this.Node = Info.Node;
		this.Type = Info.Type || OptionType.DIALOG_OPTION;
		this.Name = Info.Name || "New Dialog Option";
		this.Color = Info.Color || new Color3(1, 1, 1);
		this.Response = Info.Response;
	}

	getNode(): number {
		return this.Node;
	}

	getName(): string {
		return this.Name;
	}

	getType(): number {
		return this.Type;
	}

	setResponse(Dialog: DialogResponse) {
		this.Response = Dialog;
	}
}
