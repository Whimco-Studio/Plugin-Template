import OptionType from "../../Constants/OptionType";
import DialogCategory from "./DialogCategory";
import DialogOption from "./DialogOption";
import Quest from "./Quest";
import Bindings from "Core/Bin/Config/Binds";

const CreatedIDsCache: {
	[key: number]: string;
} = {};

function GenerateID(): number {
	const ID = math.random(100000000, 2147483647);

	if (CreatedIDsCache[ID]) {
		return GenerateID();
	} else {
		CreatedIDsCache[ID] = "";
	}

	return ID;
}

type DialogProperties = {
	Name: string;
	Text?: string;
	CategoryID: number;
};

export default class Dialog implements IDialog {
	Id = 1;
	Name: string;
	Text: string;
	Quest: Quest | void;
	CategoryID: number;
	DialogOptions: IDialogOption[];

	constructor(Info: DialogProperties) {
		this.Name = Info.Name || "";
		this.Text = Info.Text || "";
		this.DialogOptions = [];
		this.Quest = undefined;
		this.CategoryID = Info.CategoryID;
	}

	getId(): number {
		return this.Id;
	}

	getName(): string {
		return this.Name;
	}

	setName(name: string): void {
		this.Name = name;
	}

	getText(): string {
		return this.Text;
	}

	setText(text: string): void {
		this.Text = text;
		print("Setting text");
	}

	getQuest(): IQuest | void {}

	setQuest(quest: IQuest): void {}

	getCommand(): string {
		return "";
	}

	setCommand(command: string): void {}

	createOption(Name?: string) {
		this.DialogOptions.push(
			new DialogOption({
				Node: this.DialogOptions.size(),
				Name: "",
				Type: OptionType.ROLE_OPTION,
			}),
		);
	}

	getOptions(): IDialogOption[] {
		return this.DialogOptions;
	}

	/**
	 * @param slot (0-5)
	 * @return
	 */

	getOption(slot: number): IDialogOption {
		return this.DialogOptions[slot];
	}

	getCategory(): IDialogCategory {
		return Bindings.Core.Dialog.GetDialogCategory.Invoke(this.CategoryID);
	}

	save(): void {}
}
