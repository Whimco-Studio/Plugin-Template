/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface IData {
	put(key: string, value: string | number | boolean | Instance): void;

	get(key: string): string | number | boolean | Instance;

	remove(key: string): void;

	has(key: string): boolean;

	getKeys(): string[];

	/**
	 * Removes all data
	 */
	clear(): void;
}
