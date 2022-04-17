import Image from 'next/image'

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
   const realAlt = alt ?? 'Header background image.'

   return (
      <>
         {(srcType === 'svg' || srcType === 'local') && (
            <Image priority layout='fill' objectFit='cover' src={src} alt={realAlt} />
         )}
         {/* 
            //TODO Needs custom loader for Cloudinary or other 
         */}
         {srcType === 'remote' && (
            <Image priority layout='fill' objectFit='cover' src={src} alt={realAlt} />
         )}
         {srcType === 'data' && (
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={src} alt={realAlt} />
         )}
      </>
   )
}