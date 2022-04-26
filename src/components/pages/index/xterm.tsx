import { useEffect, useState } from 'react'
import { css } from 'linaria'
import Head from 'next/head'

import {
   prompt,
   initMsg,
   handleEnter
} from './xterm-funcs'

const termStyle = css`
   background: var(--pallete-background);
   canvas {
      width: 100% !important;
      background: var(--pallete-background) !important;
      background-color: var(--pallete-background) !important;
      fill: var(--pallete-background) !important;
   }
`

const Term = () => {
   const [term, setTerm] = useState<boolean>(false)
   const [currLine, setCurrLine] = useState<string>('')
   const [currHistory, setCurrHistory] = useState<string>('')

   useEffect(() => {
      async function init() {
         const XtermTerm = (await import('xterm')).Terminal
         const XtermTermFitAdd = (await import('xterm-addon-fit')).FitAddon
         const XtermTermLinksAdd = (await import('xterm-addon-web-links')).WebLinksAddon
         const XtermTermWebGlAdd = (await import('xterm-addon-webgl')).WebglAddon
   
         //* Creating terminal
         const term = new XtermTerm({
            cursorBlink: true,
            cursorStyle: 'block',
            fontSize: 12,
            fontFamily: 'var(--fonts-tertiary)',
            fontWeight: '400',
            rendererType: 'canvas',
         })

         //* Starting addons
         const fitAddon = new XtermTermFitAdd()
         const webglAddon = new XtermTermWebGlAdd()
         
         //* Loading addons
         term.loadAddon(fitAddon)
         term.loadAddon(new XtermTermLinksAdd())
         
         //* Initial terminal setup
         const terElement = document.getElementsByClassName(termStyle)[0]
         term.open(terElement as HTMLElement)

         //* After init addons
         webglAddon.onContextLoss(() => webglAddon.dispose())
         term.loadAddon(webglAddon)
         fitAddon.fit()
         
         //* Init message
         const afterInitCursorPos = initMsg(term, [
            './startup.sh',
            'Heating up the terminal and calling all the dinosaurs 🦖',
            'Terminal ready and dinosaurs are here!',
         ])
         
         
         //* Basic terminal listeners
         terElement.addEventListener('resize', () => fitAddon.fit())
         
         //* Adding terminal functionality
         
         let currLineIdx: number = afterInitCursorPos
         term.onKey(({ key, domEvent }) => {
            const pressedKeyCode = domEvent.key

            console.log(term.buffer.active.cursorY)
            console.log(currLineIdx)

            //* Special keys handling
            if (pressedKeyCode === 'Enter') handleEnter(term, domEvent, () => currLineIdx = prompt(term))
            else if (pressedKeyCode === 'Backspace' && term.buffer.active.cursorX > 2) term.write('\b \b')
            else if(pressedKeyCode === 'Backspace' &&  term.buffer.active.cursorY > currLineIdx) {
               //* Get back to previous line in this case
               console.log(term.buffer.active.cursorX)
               if(term.buffer.active.cursorX !== 0) term.write('\b \b')
               else {
                  term.write('\x1b[K')
                  term.write('\x1b[A')
               }
            }
            else if(pressedKeyCode.match(/(ArrowUp|ArrowDown)/)) domEvent.preventDefault() 
            
            //* Adding any other character
            if(/^.{1}$/.test(pressedKeyCode)) term.write(key)
         })
      }

      //* Preventing the terminal from being re-initialized on re-render
      if(!term) init()
      setTerm(true)
   })
   return (
      <>   
         <Head>
            { /* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel='stylesheet' href='external-styles/xterm.css' />
         </Head>
         <div id='term-content' className={termStyle}></div>
      </>
   )
}

export default Term