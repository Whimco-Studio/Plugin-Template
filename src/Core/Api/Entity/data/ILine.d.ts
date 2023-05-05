/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface ILine {
	getText(): string;

	setText(text: string): void;

	getSound(): string;

	setSound(sound: string): void;

	/**
	 * @return {boolean} If false the text will not show in the chat only in the text bubble
	 */
	getShowText(): boolean;

	setShowText(show: boolean): void;
}
