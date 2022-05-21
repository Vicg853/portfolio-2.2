import { styled } from 'linaria/react'
import Image from 'next/image'

export const LinkComponent = styled.a`
   background-color: var(--pallete-bg);
   color: var(--pallete-text);
   border-radius: 0.5rem;
   border: 1px solid transparent;
   padding: 0.5rem 0.8rem;
   font-size: 0.8rem;
   font-weight: 500;
   font-family: var(--fonts-secondary);
   transition-property: color, border-color;
   transition-duration: 0.3s;
   transition-timing-function: ease-in-out;
   cursor: pointer;

   display: inline-flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;

   .icon {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
   }

   margin: 0.4rem 0;
   &&[data-remove-top-margin='true'] {
      margin-top: 0;
   }
   &&[data-remove-bot-margin='true'] {
      margin-bottom: 0;
   }
   
   &:hover {
      border: 1px solid var(--pallete-accent);
      color: var(--pallete-accent);
   }
`

interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
   icon?: ({
      srcType: 'local' | 'external' | 'data'
      src: string
      alt?: string
   } | {
      srcType: 'comp'
      src: React.ElementType<any>
      alt?: string
   })
   label: string
}

export const ExternalLink: React.FC<LinkProps> = ({
   label,
   icon,
   ...props
}) => (
   <LinkComponent {...props}
   rel='noopener noreferrer'
   target='_blank'>
      {icon && icon.srcType === 'comp' && <icon.src className='icon' />}
      {icon && icon.srcType === 'local' && (
         <Image src={icon.src} 
            alt={icon.alt ?? `Access to ${label}`}
            className='icon'
            loading='lazy' placeholder='blur'
            width={16} height={16}
            blurDataURL={icon.src} />
      )}
      {icon && (icon.srcType === 'external' || icon.srcType === 'data') && (<>
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img src={icon.src}
            alt={icon.alt ?? `Access to ${label}`}
            className='icon' />
      </>)}


      {label}
   </LinkComponent>   
)

