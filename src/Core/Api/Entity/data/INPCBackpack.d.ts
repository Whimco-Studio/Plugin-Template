/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface INPCBackpack {
	/**
	 * @return {Instance[]} Returns instances in the backpack folder of NPC
	 */
	getBackpack(): number;

	/**
	 * @param {number} type 0:visible, 1:invisible, 2:semi-invisible
	 */
	setBackpack(status: number): void;
}
