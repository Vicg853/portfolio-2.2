import type React from 'react'
import type { State } from '@hookstate/core'
import { useEffect, useState } from "react"
import { createState, useHookstate, Downgraded } from '@hookstate/core'

import { makeCssThemeVars } from '@utils'

type ThemesObject<ThemeType> = { themes: { [key: string]: ThemeType } } 

type ThemeProviderProps<ThemeType> = ThemesObject<ThemeType> & ({
   defaultTheme: keyof ThemesObject<ThemeType>['themes']
   isPersistent?: false | undefined | never
   customPersistentKey?: undefined | never
   systemSchemePreferenceKey?: string
} | {
   defaultTheme: keyof ThemesObject<ThemeType>['themes']
   isPersistent: true
   customPersistentKey?: string
   systemSchemePreferenceKey?: string
})

type CssKeyThemeStateType<keyType> = State<keyType>

type CssValThemesStateType<ThemeType> = {
   currentTheme: ThemeType
   themes: ThemesObject<ThemeType>['themes']
}

type CssThemeExportPromise<ThemeType, themeKeysType> = {
   /**
    * Makes css theme state global and accessible inside a component as a hook.
   * @returns {[key, setKey]} - Returns a string with the current css theme key state and key state setter function.
   * @example 
   * // Using the following theme record
   * const themeRecord = {
   *  'main': { mainColor: 'red' },
   *  'alternate': { mainColor: 'green' },
   * }
   * // Default theme is set to 'main' in the provider
   * 
   * //Inside a React component
   * const [themeKey, setThemeKey] = useCssThemeKey()
   * console.log(themeKey) -> 'main'
   * setThemeKey('alternate')
   * console.log(themeKey) -> 'alternate'
   */
   useCssThemeKey: () => [themeKeysType, CssKeyThemeStateType<themeKeysType>['set'] ]
   
   /**
    * Makes css theme state global and accessible inside a React component as a hook.
   * @returns {currentTheme: Object} - Returns an object with the current theme values (the one selected from the inputted ones into the provider component).  
   * @returns {themes: Object} - Returns the object containing a list with all themes (same ones inputted into the provider component).  
   * @example 
   * // Using the following theme record
   * const themeRecord = {
   *  'main': { mainColor: 'red' },
   *  'alternate': { mainColor: 'green' },
   * }
   * // Default theme is set to 'main' in the provider
   * 
   * //Inside a React component
   * const get = useGetCssThemesVal()
   * console.log(get.currentTheme) -> { mainColor: 'red' }
   * console.log(get.themes) -> {
   *                               'main': { mainColor: 'red' },
   *                               'alternate': { mainColor: 'green' },
   *                              }
   */
   useGetCssThemesVal: () => CssValThemesStateType<ThemeType>
   
   /**
    * Provides css themes as css variables in a style component using a :root css selector. Can be placed anywhere in your app, as long as it is rendered.
   * @returns {React.Component} - Provider as a react component. Needs any props to be passed.
   * @example 
   * 
   * import CssThemeCreator from 'css-theme-vars'
   * 
   * cosnt themeRecord = {
   * 'main': { mainColor: 'red' },
   * 'alternate': { mainColor: 'green' },
   * }
   * 
   * //The first bit of magic
   * const CssTheme = CssThemeCreator<typeof themeRecord>(themeRecord, 'main')
   * 
   * function App() {
   * 
   *  //The second bit of magic
   *  return (
   *   <CssTheme.Provider />
   *  )
   * }
   */
    Provider: React.FC

    ThemePreHydration: React.FC

   /**
    * Provides css themes as css variables as a string when called. Can be place anywhere in your app, but it is recommended to be rendered in the <head> tag.
    * @returns {string} - Returns a string with css variables.
    * @example
    *    <style>
    *       {getCssThemeVars()}
    *   </style>
   */
    getThemesStyles: () => string
}

type StoreReturnType<T> = [() => T, (action?: any | undefined) => void, Set<React.Dispatch<React.SetStateAction<string | undefined>>>]

const createStore = <T extends string>(initialStore: T): StoreReturnType<T> => {
   let store = initialStore
   const listeners = new Set<React.Dispatch<React.SetStateAction<string | undefined>>>()
 
   const dispatch = (action?: any | undefined) => {
     store = typeof action === 'function' ? action(store) : action
     listeners.forEach(listener => listener(() => store))
   }
 
   const useStore = () => {
     const [, listener] = useState<string>()
     useEffect(() => {
       listeners.add(listener)
       return () => { listeners.delete(listener) }
     }, [])
     return store
   }
 
   return [useStore, dispatch, listeners]
 }

 /**
    * Creates a global css theme state and css vars provider.
   * @params themes - Object containing objects for your theme, where these objects keys are the ones used to select the theme.
   * @params defaultTheme - Key for the default theme object used.
   * @returns {.Provider -> React.Component} - Provider as a react component. Needs any props to be passed.
   * @returns {.useCssThemeKey -> Hook} - Makes css theme state global and accessible inside a component as a hook.
   * @returns {.useGetCssThemesVal -> Hook (no set function)} - Makes css theme state global and accessible inside a React component as a hook.
   * @returns {.noHookCssThemeKey -> Function} - Makes current css theme key state global and accessible outside a react componente (no hook).
   * @returns {.noHookCssThemesVal -> Function} - Makes css theme state global and accessible outside a react component (no hook).
   * @example 
   * 
   * import CssThemeCreator from 'css-theme-vars'
   * 
   * cosnt themeRecord = {
   * 'main': { mainColor: 'red' },
   * 'alternate': { mainColor: 'green' },
   * }
   * 
   * const {Provider, useCssThemeKey, useGetCssThemesVal} = CssThemeCreator<typeof themeRecord>(themeRecord, 'main')
   * 
   * function App() {
   *   const [themeKey, setThemeKey] = useCssThemeKey()
   *   const {currentTheme} = useGetCssThemesVal()
   * 
   *   useEffect(() => {
   *     console.log(themeKey) -> 'main'
   *     console.log(currentTheme) -> { mainColor: 'red' }
   *     setThemeKey('alternate')
   *     console.log(themeKey) -> 'alternate'
   *     console.log(currentTheme) -> { mainColor: 'green' }
   *   }, [])
   * 
   *   return (
   *     <>
   *       <Provider />
   *       <style>
   *          background-color: {currentTheme.mainColor}
   *          color: var(--mainColor)
   *       </style> 
   *     </> 
   *   )
   * }
   */

function CssTheme<ThemeType extends object>( 
   themes: ThemeProviderProps<ThemeType>['themes'], 
   defaultTheme: ThemeProviderProps<ThemeType>['defaultTheme'],
   isPersistent?: ThemeProviderProps<ThemeType>['isPersistent'], 
   customPersistentKey?: ThemeProviderProps<ThemeType>['customPersistentKey'], 
   systemSchemePreferenceKey: ThemeProviderProps<ThemeType>['systemSchemePreferenceKey'] = 'none'
): CssThemeExportPromise<ThemeType, keyof typeof themes> {
   const initialTheme = (() => {
      if(typeof document !== 'undefined' && isPersistent) {
         const preHydrationVal = document.documentElement.style.getPropertyValue('--initial-theme')
         if(preHydrationVal) return preHydrationVal
      }
      
      return defaultTheme
   })().toString()

   //* Creating the hookstate global state for current theme key and theme values
   const themeKeyListeners = new Set<React.Dispatch<React.SetStateAction<string | undefined>>>()
   let themeKeyStore = initialTheme

   const dispatch = (action?: any | undefined) => {
      themeKeyStore = typeof action === 'function' ? action(themeKeyStore) : action
      themeKeyListeners.forEach(listener => listener(() => themeKeyStore))
   }
   const themesValState = createState<{ currentTheme: ThemeType, themes: typeof themes}>({
      themes,
      currentTheme: themes[initialTheme]
   }).attach(Downgraded)

   //* Creating state hooks for current theme key and theme values
   //eslint-disable-next-line react-hooks/rules-of-hooks
   const cssThemeValHook = () => useHookstate(themesValState)
   
   const bodyThemeClassPrefix = `use-theme`

   //* Creating theme css string
   const cssThemeStyleString = Object.entries(themes).map(([key, val]) => {
      const themeVals = makeCssThemeVars(val, true)
      return `.${bodyThemeClassPrefix}-${key} { ${themeVals.join('')} }`
   }).join('')
   
   
   const ProviderComponent: React.FC = () => {
      const setThemeVals = cssThemeValHook().set
      const themePromised = cssThemeValHook().promised

      const [, listener] = useState<string>()
      useEffect(() => {
         themeKeyListeners.add(listener)
        return () => { themeKeyListeners.delete(listener) }
      }, [])
      
      //*Updates css vars state when theme key value changes
      useEffect(() => {
         const themeKey = themePromised ? initialTheme : themeKeyStore
         
         //* Saves user theme preference in local storage
         if(typeof document !== 'undefined' && isPersistent) 
            localStorage.setItem(customPersistentKey || 'theme-key', themeKey.toString())

         setThemeVals({
            themes,
            currentTheme: themes[themeKey.toString()]
         })

         const invalidClass = 
            document.documentElement.classList.value.match(RegExp(`${bodyThemeClassPrefix}-\\w+`, 'g'))
         if(invalidClass) document.documentElement.classList.remove(invalidClass.toString())
         document.documentElement.classList.add(`${bodyThemeClassPrefix}-${themeKey}`)
      }, [themeKeyStore])

      //* Actually renders the provider component with css vars
      //TODO Give a look into this hydration isseus caused by html entities
      return <></>
   }

   //* Script that willll be injected before body for pre-hydration execution
   function getInitialTheme() {
      const themeKey = localStorage.getItem('theme-key');
      
      const systemColorPreference = window.matchMedia(`(prefers-color-scheme: '-sysSchemeKey-')`)
            .matches
      
      if (themeKey) {
         document.documentElement.classList.add('use-theme-' + themeKey);
         document.documentElement.style.setProperty('--initial-theme', themeKey);
      } else if(systemColorPreference) {
         document.documentElement.classList.add('use-theme-' + '-sysSchemeKey-');
         document.documentElement.style.setProperty('--initial-theme', '-sysSchemeKey-');
      }
      return;
   }
   
   const ThemePreHydration = () => {
     const codeToRunOnClient = `(${getInitialTheme.toString().replaceAll(/-sysSchemeKey-/g, systemSchemePreferenceKey)})()`
     
     // eslint-disable-next-line react/no-danger
     return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
   }

   //* Return the provider and hooks to access values
   return {
      useCssThemeKey: () => {
         const themePromised = cssThemeValHook().promised
         const [state, setState] = useState<string>('')

         useEffect(() => {
            const themeKey = themePromised ? initialTheme : themeKeyStore
            setState(themeKey)
         }, [themeKeyStore])

         return [
            state,
            dispatch
         ]
      },
      useGetCssThemesVal: () => {
         const { get } = cssThemeValHook()
         return get()
      },
      getThemesStyles: () => cssThemeStyleString,
      Provider: ProviderComponent,
      ThemePreHydration: ThemePreHydration,
   }
}

export default CssTheme