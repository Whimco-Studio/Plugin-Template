import { Component } from "@rbxts/roact";

export default class QuestObjective implements IQuestObjective {
	private _progress: number;
	private _maxProgress: number;
	private _text: string;

	constructor(text: string, maxProgress: number) {
		this._text = text;
		this._maxProgress = maxProgress;
		this._progress = 0;
	}

	public getProgress(): number {
		return this._progress;
	}

	public setProgress(progress: number): void {
		this._progress = progress;
	}

	public getMaxProgress(): number {
		return this._maxProgress;
	}

	public isCompleted(): boolean {
		return this._progress >= this._maxProgress;
	}

	public getText(): string {
		return this._text;
	}
}
