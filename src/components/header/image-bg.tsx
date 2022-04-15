import {
   HeaderImageBgOpts,
   IHeaderProps
} from './types.d'

type FullBgImgProps = Pick<IHeaderProps['background'], 'parallaxNo' | 'alt'>

export const ImageBackground: React.FC<HeaderImageBgOpts & FullBgImgProps> = ({
   src,
   srcType,
   alt,
}) => {


   return (
      <>
         Hey
      </>
   )
}