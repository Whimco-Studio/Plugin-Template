import Object from "@rbxts/object-utils";
import DialogCategory from "./data/DialogCategory";
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

export default class DialogHandler implements IDialogHandler {
	DialogsCategories: DialogCategory[];
	CustomDialogGUI: boolean;

	constructor() {
		const tempId = GenerateID();
		this.DialogsCategories = [];
		this.CustomDialogGUI = false;

		Bindings.Core.Compiling.CompileTable.Invoke("Dialogs");
	}

	categories(): IDialogCategory[] {
		return Object.values(this.DialogsCategories);
	}

	create(Name?: string): DialogCategory {
		const newCategory = new DialogCategory({
			Name: Name,
		});

		this.DialogsCategories.push(newCategory);

		Bindings.Core.Compiling.CompileTable.Invoke("Dialogs");

		return newCategory;
	}

	getCategory(CategoryID: number): DialogCategory | void {
		for (let index = 0; index < this.DialogsCategories.size(); index++) {
			const DialogCategory = this.DialogsCategories[index];
			if (DialogCategory.Id === CategoryID) {
				return DialogCategory;
			}
		}
		return undefined;
	}

	setCustomDialogGUI(value: boolean) {
		this.CustomDialogGUI = value;
	}

	get(id: number): IDialog | void {
		let temp: void | IDialog;

		for (let index = 0; index < this.DialogsCategories.size(); index++) {
			const DialogCategory = this.DialogsCategories[index];
			const Dialogs = DialogCategory.Dialogs;
			for (let index = 0; index < DialogCategory.Dialogs.size(); index++) {
				const Dialog = DialogCategory.Dialogs[index];
				if (Dialog.Id === id) {
					temp = Dialog;
				}
			}
		}

		return temp;
	}

	delete(id: number): void {
		Object.values(this.DialogsCategories).forEach((DialogCategoryElement: DialogCategory) => {
			DialogCategoryElement.dialogs().forEach((DialogElement) => {
				if (id === DialogElement.getId()) {
					DialogCategoryElement.delete(id);
				}
			});
		});

		return print("Dialog does not exist");
	}
}
