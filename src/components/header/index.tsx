import { 
   Container
} from './style'

//* Importing header types
import {
   IHeaderProps
} from './types.d'

//* Importing header components
import { ImageBackground } from './image-bg'

export const Header: React.FC<IHeaderProps> = ({
   dimensions,
   title,
   description,
   background,
   button
}) => {
   return (
      <Container 
      style={{ height: dimensions?.height ?? '100vh' }}>
         <h1>{title}</h1>
         <h2>{description}</h2>
         
         {(background.type === 'color' || background.type === 'transparent') && (
            <div id='header-background'
               style={{
                  background: background.type === 'color' ? background.color : 'transparent',
               }}
             />
         )}

         {background.type === 'image' && (<ImageBackground {...background} />)}
      </Container>
   )
}