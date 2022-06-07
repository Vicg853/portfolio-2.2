import { styled } from "linaria/react"

//* Importing menu state
import { useMenu } from './menu/state'

const Container = styled.div`
   position: relative;
   transform-origin: center center;
   min-height: 100vh;
   
   transition: transform 0.5s;
   transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
   
   overflow-y: auto;
   overflow-x: hidden;

   &&[data-menu-open="true"] {
      filter: blur(5px) brightness(0.8);
      transform: scale(0.85) translateY(-10%);
   }

   &&[data-menu-open="false"] {
      transform: scale(1);
   }

   && > * {
      margin: 0 auto;
   }
`
//TODO check out why this children error happens
{/* @ts-ignore */}
export const ContentContainer: React.FC = ({ children }) => {
   const [isMenuOpen] = useMenu()

   return (
      <Container data-menu-open={isMenuOpen ? 'true' : 'false'}>
         {children}
      </Container>
   )
}