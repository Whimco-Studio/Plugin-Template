import Object from "@rbxts/object-utils";
import { HttpService } from "@rbxts/services";

function isObject(value: unknown): value is object {
	return typeIs(value, "table");
}

function isString(value: unknown): value is string {
	return typeIs(value, "string");
}

function isInstance(value: unknown): value is Instance {
	return typeIs(value, "Instance");
}

function isFunction(value: unknown): value is () => void {
	return typeIs(value, "function");
}

function splitStringIntoChunks(str: string, chunkSize: number): string[] {
	const chunks: string[] = [];
	for (let i = 0; i < str.size(); i += chunkSize) {
		chunks.push(str.sub(i + 1, i + chunkSize));
	}
	return chunks;
}

function tableToString(tbl: object, indent: number | undefined): string[] {
	indent = indent ?? 0;
	let str = "{\n";
	for (const [k, v] of Object.entries(tbl)) {
		if (isInstance(v) || isFunction(v)) {
			continue; // Ignore properties of an Instance and functions
		}

		const key = HttpService.JSONEncode(k);
		str += "    ".rep(indent + 1);
		if (isObject(v) && v !== undefined) {
			str += `[${key}] = ${tableToString(v, indent + 1).join("")},\n`;
		} else {
			const value = isString(v) ? HttpService.JSONEncode(v) : tostring(v);
			str += `[${key}] = ${value},\n`;
		}
	}
	str += "    ".rep(indent) + "}";
	const chunks = splitStringIntoChunks(str, 200000); // Split the string into chunks of size 200,000
	return chunks;
}

export default function Compile(name: string, parent: Instance, tbl: object, indent: number | 0): ModuleScript {
	const oldModule = parent.FindFirstChild(name);
	if (oldModule && oldModule.IsA("ModuleScript")) {
		oldModule.Destroy();
	}

	const Module = new Instance("ModuleScript");
	Module.Name = name;
	Module.Parent = parent;

	Module.Source = "return " + tableToString(tbl, undefined).join("");

	return Module;
}
