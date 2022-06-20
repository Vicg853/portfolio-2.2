import { useState } from 'react'
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
   blurData
}) => {
   const realAlt = alt ?? 'Header background image.'

   return (
      <>
         {(srcType === 'svg' || srcType === 'local') && (
            <Image priority loading='lazy' placeholder='blur' blurDataURL={blurData}
            layout='fill' objectFit='cover' src={src} alt={realAlt} />
         )}
         {/* 
            //TODO Needs custom loader for Cloudinary or other 
         */}
         {srcType === 'remote' && (
            <Image priority loading='lazy' placeholder='blur' blurDataURL={blurData}
            layout='fill' objectFit='cover' src={src} alt={realAlt} />
         )}
            
         {srcType === 'data' && ( /* eslint-disable-next-line  */
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={src} alt={realAlt} />
         )}
      </>
   )
}