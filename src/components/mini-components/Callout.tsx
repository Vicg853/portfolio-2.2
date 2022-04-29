import Image from 'next/image'
import { styled } from 'linaria/react'

const CardContainer = styled.div`
   display: inline-flex;
   justify-content: flex-start;
   align-items: flex-start;
   padding: 0.9rem;
   border-radius: 0.7rem;
   background-color: var(--pallete-bgContrast);
   color: var(--pallete-text);
   gap: 0.6rem;
   max-width: 100%;
   width: 400px;
   height: auto;
   border: 1px solid var(--pallete-opaque-accent);


   .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      background: var(--pallete-opaque-bg);
      padding: 0.2rem;
      border-radius: 0.4rem;
      font-size: 0.9rem;
   }

   p {
      padding: 0.6rem 0rem;
      font-size: 0.8rem;
      font-family: var(--font-secondary);
      font-weight: 400;
      max-width: 440px;
      text-align: justify;
   }

   sub {
      display: inline-flex;
   }
   &&[data-quote='true'] {
      sub {
         font-style: italic;
      }
      sub:after, sub:before {
         content: '"';
         display: block;
         font-size: 1.4rem;
         margin: 0.3rem;
      }
      sub:after {
         align-self: flex-end;
      }
   }

   &&[data-special='warn'] {
      border: 1px solid var(--pallete-constants-warn);
   }
   &&[data-special='err'] {
      border: 1px solid var(--pallete-constants-err);
   }
   &&[data-special='success'] {
      border: 1px solid var(--pallete-constants-success);
   }
   &&[data-special='info'] {
      border: 1px solid var(--pallete-constants-info);
   }

`

interface CalloutProps {
   icon: {
      type: 'icon' 
      source: any
   } | {
      type: 'emoji'
      source: string
   }
   children: JSX.Element | string
   quote?: boolean,
   special?: 'warn' | 'err' | 'success' | 'info'
   className?: string
}

const Callout: React.FC<CalloutProps> = ({
   icon,
   children,
   quote,
   special,
   className
}) => {
   return ( 
      <CardContainer 
      className={className} 
      data-quote={quote ? 'true' : 'false'}
      data-special={special ?? 'false'}>
         <span className='icon'>
            {icon.type === 'icon' && (<Image src={icon.source} alt='Callout icon' layout='fill' objectFit='cover' />)}
            {icon.type === 'emoji' && (<>{icon.source}</>)}
         </span>
         <sub>
            <p>
               {children}
            </p>
         </sub>
      </CardContainer>
   )
}

export {
   Callout
}
export type {
   CalloutProps
}