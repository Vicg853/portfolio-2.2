import { useState as useGlobalState, createState, Downgraded } from "@hookstate/core"

const menuGlobalState = createState<boolean>(false).attach(Downgraded)

/** 
 * Controls the mini menu open/closed state.
 * @returns {[boolean, (boolean) => void]} - Returns a boolean with the current mini menu state and a function to set the mini menu state.
 * @example
 * // Inside a React component
 * const [isMiniMenuOpen, setIsMiniMenuOpen] = useMiniMenuState()
 * console.log(isMiniMenuOpen) -> false
 * setIsMiniMenuOpen(true)
 * console.log(isMiniMenuOpen) -> true
*/
export const useMenu = () => {
   const hook = useGlobalState(menuGlobalState)
   return [hook.get(), hook.set] as [boolean, (val: boolean) => void]
}