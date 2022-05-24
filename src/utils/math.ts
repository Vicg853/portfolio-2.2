/**
* Converts a degree value to a radian value.
* @param {number} degrees - The degree value to be converted.
* @returns {number} The converted radian value.
*/
export const degToRad = (degrees: number): number => degrees * (Math.PI / 180)

/**
* Converts a value from one range to another.
* @param {number} val - The value to be converted.
* @param {number} inMin - The minimum value of the input range.
* @param {number} inMax - The maximum value of the input range.
* @param {number} outMin - The minimum value of the output range.
* @param {number} outMax - The maximum value of the output range.
* @returns {number} The converted value.
* @example
* scale(0, 0, 100, 0, 1) => 0
* scale(50, 0, 100, 0, 1) => 0.5
* scale(100, 0, 100, 0, 1) => 1
*/
export function scale (val: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
   return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}