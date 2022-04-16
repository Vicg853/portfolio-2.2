
//* Header background options types
export interface HeaderImageBgOpts {
   type: 'image'
   src: string
   srcType: 'remote' | 'local' | 'data' | 'svg'
}
export type HeaderBackground = ({
   type: 'video'
   src: string
} | HeaderImageBgOpts | {
   type: 'component'
   component: React.ComponentType<any>
} | {
   type: 'threejs'
   scene: any
} | {
   type: 'transparent'
} | {
   type: 'color'
   color: string
})


//* Header optional button types
export type HeaderButtonAction = ({
   type: 'link'
   href: string
} | {
   type: 'function'
   action: () => void
})
export interface HeaderButton {
   text: string
   action: HeaderButtonAction
}

export interface IHeaderProps {
   title: string
   description: string
   dimensions?: {
      height?: number
   }
   background: HeaderBackground & {
      alt?: string
      parallaxNo?: true
   }
   button?: HeaderButton
}