import { styled } from "linaria/react"

//* Importing menu state
import { useMenu } from './menu/state'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transform-origin: center center;
   
   transition: transform 0.5s;
   transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
   
   && > sub {
      min-height: 100vh;
   }
   &&[data-menu-open="true"] {
      filter: blur(5px) brightness(0.8);
      transform: scale(0.85);
   }

   &&[data-menu-open="false"] {
      transform: scale(1);
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