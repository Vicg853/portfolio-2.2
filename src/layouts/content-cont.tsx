import anime from 'animejs'
import { styled } from "linaria/react"
import { useEffect } from 'react'

//* Importing menu state
import { useMenu } from './menu/state'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transform-origin: center center;

   &&[data-menu-open="true"] {
      filter: blur(5px) brightness(0.8);
   }
`
//TODO check out why this children error happens
{/* @ts-ignore */}
export const ContentContainer: React.FC = ({ children }) => {
   const [isMenuOpen] = useMenu()

   useEffect(() => {
      anime({
         targets: `.${Container.__linaria.className}`,
         scale: isMenuOpen ? 0.75 : 1, 
         duration: 500,
         easing: 'easeInOutBack'
      })
   })

   return (
      <Container data-menu-open={isMenuOpen ? 'true' : 'false'}>
         {children}
      </Container>
   )
}