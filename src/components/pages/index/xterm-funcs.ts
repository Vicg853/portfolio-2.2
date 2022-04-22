import type { Terminal } from 'xterm'

export function prompt(term: Terminal): number {
   term.write('\r\n❯ ')
   return term.buffer.active.cursorY + 1
}

export type xTermInitMsgLocales = string[]

export function initMsg(term: Terminal, localesMsgs: xTermInitMsgLocales) {
   prompt(term)
   localesMsgs.forEach((msg) => term.writeln(msg))
   prompt(term)
   return localesMsgs.length + 2
}


//* Functionality handlers
export function handleEnter(term: Terminal, domEvent: KeyboardEvent, callBack: () => void) {
   if(domEvent.shiftKey) term.write('\r\n')
   else callBack()
}