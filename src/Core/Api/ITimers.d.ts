/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
interface ITimers {
	/**
	 * Used for timer events, will throw an error if a timer with the id is already started
	 * @param {number} id The timers id
	 * @param {number} ticks After how many ticks the timer triggers
	 * @param {boolean} repeat Whether it resets the timer when done or deletes it
	 */
	start(id: number, ticks: number, repeat: boolean): void;

	/**
	 * Used for timer events, wont throw an error if an timer with this id already exists and will overwrite it with this new one
	 * @param {number} id The timers id
	 * @param {number} ticks After how many ticks the timer triggers
	 * @param {boolean} repeat Whether it resets the timer when done or deletes it
	 */
	forceStart(id: number, ticks: number, repeat: boolean): void;

	/**
	 * @return {boolean} Returns true if a timer with this id is already active
	 * @param {number} id
	 */
	has(id: number): boolean;

	/**
	 * @return {boolean} Returns false if there was no timer with the giver id
	 * @param {number} id
	 */
	stop(id: number): boolean;

	/**
	 * Resets the timer back to 0
	 * @param {number} id
	 */
	reset(id: number): void;

	clear(): void;
}
