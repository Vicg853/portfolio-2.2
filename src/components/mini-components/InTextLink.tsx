import type { HTMLAttributes, DetailedHTMLProps, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import type { LinkProps } from 'next/link'
import type { ReactChild } from 'react'
import Link from 'next/link'
import { css } from 'linaria'

const style = css`
   font-size: 0.8rem;
   font-family: var(--font-secondary);
   font-weight: 500;
   color: var(--pallete-opaque-text);
   text-decoration: underline;
   text-decoration-color: var(--pallete-opaque-text);
   margin: 0 0.2rem;

   :hover {
      text-decoration: none;
      color: var(--pallete-opaque-accent);
   }
`

type LinkAndAnchorProps = LinkProps 
type LinkAndButtonProps = LinkProps 

interface InTextLinkActionProps extends LinkAndAnchorProps {
   action: () => any
   children: ReactChild
}

interface InTextLinkProps extends LinkAndButtonProps {
   action?: undefined
   children: ReactChild
}

function InTextLink(props: InTextLinkProps): JSX.Element
function InTextLink(props: InTextLinkActionProps): JSX.Element
function InTextLink(props: InTextLinkProps | InTextLinkActionProps): JSX.Element {
   const {
      action,
      children,
   } = props

   return ( 
      <>
         {action ? (
            <button className={style} onClick={action}>
               {children}
            </button>
         ) : (
            <Link {...props} passHref>
               <a className={style}> 
                  {children}
               </a>
            </Link>
         )}
      </>
   )
}

export {
   InTextLink
}
export type {
   InTextLinkProps
}