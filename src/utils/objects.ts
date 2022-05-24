/**
 * Flattens an object into a single level object.
 * Code from https://stackoverflow.com/a/65883097/11699778 , thx to gkunz on StackOverflow
* @param {object} obj - The object that needs to be flattened.
* @param {string} keySeparator - The separator to use between keys that are joined when flattening.
* @returns {object} - The flattened object.
* @example 
* flattenObject({
*   a: {
*     b: {
*       c: 1
*     }
*   }
* }, '.') => { 'a.b.c': 1 }
*/
export function toFlatPropertyMap(obj: object, keySeparator = '.') {
   const flattenRecursive = (obj: object, parentProperty?: string, propertyMap: Record<string, unknown> = {}) => {
     for(const [key, value] of Object.entries(obj)){
       const property = parentProperty ? `${parentProperty}${keySeparator}${key}` : key;
       if(value && typeof value === 'object'){
            flattenRecursive(value, property, propertyMap);
       } else {
            propertyMap[property] = value;
       }
     }
     return propertyMap;
   };
   return flattenRecursive(obj);
}