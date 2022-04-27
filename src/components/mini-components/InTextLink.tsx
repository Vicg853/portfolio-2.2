import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { styled } from 'linaria/react'

const IntTextLinkStyled = styled.a`
   flex: none;
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

type InTextLinkProps = LinkProps & {
   children: JSX.Element | string
}

const InTextLink: React.FC<InTextLinkProps> = ({
   children,
   ...props
}) => {
   return ( 
      <Link {...props} passHref>
         <IntTextLinkStyled>
            {children}
         </IntTextLinkStyled>
      </Link>
   )
}

export {
   InTextLink
}
export type {
   InTextLinkProps
}