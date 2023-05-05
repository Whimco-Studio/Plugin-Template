import PluginBindables from "Plugin/Events";
import Dialog from "./Dialog";

type DialogCategoryProperties = {
	Name?: string;
};

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

export default class DialogCategory implements IDialogCategory {
	Id = GenerateID();
	Dialogs: Dialog[];

	Name: string;

	constructor(Info: DialogCategoryProperties) {
		this.Dialogs = [];
		this.Name = Info.Name || "Dialog Category Name";
	}

	dialogs(): IDialog[] {
		return this.Dialogs;
	}

	getName(): string {
		return this.Name;
	}

	create(name: string): Dialog {
		const temp = new Dialog({ Name: name || "New", CategoryID: this.Id });
		this.Dialogs.insert(this.Dialogs.size(), temp);
		return temp;
	}

	delete(id: number): void {
		let index: number | boolean = false;
		this.Dialogs.forEach((element, dialogIndex) => {
			if (element.Id === id) {
				index = dialogIndex;
			}
		});

		if (index) {
			table.clear(this.Dialogs[index]);
			table.freeze(this.Dialogs[index]);
			this.Dialogs.remove(index);
		}
	}
}
