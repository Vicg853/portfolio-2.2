import { toFlatPropertyMap } from './objects'

/**
* Creates css vars in: "--varName: value;" format and exports it as an string Array, with each string containing a var or exports an Object containing key: var name, and value: value
* @param {object} jsTheme - The theme values to be converted to css vars.
* @param {boolean} [toArray=false] - Boolean that defines result will be returned as an Array or an Object. Defaults to false
* @param {string?} [namespace] - Defines the namespace to use for the css vars. Is optional and defaults to "".
* @returns {string[]|object} - Return either an string array: '--varName: value;' or an object: {'--varName': value}
*/
export function makeCssThemeVars<T extends true | false = false>(
   jsTheme: Object, toArray?: T, namespace?: string
   ): T extends true ? string[] : Object {
   const flattenedObject = toFlatPropertyMap(jsTheme, '-')
   const recordEntries = Object.entries(flattenedObject)
  
   if(toArray) return recordEntries.map(
      ([key, value]) => `--${namespace ? `${namespace}-` : ''}${key}: ${value};`
   ) as string[]
   return recordEntries.reduce(
      (cssTheme, [key, value]) => ({
         ...cssTheme,
         [`--${namespace ? `${namespace}-` : ``}${key}`]: value
      }), {}
   ) as any
  }