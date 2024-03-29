
//* Header background options types
export interface HeaderImageBgOpts {
   type: 'image'
   src: string
   srcType: 'remote' | 'local' | 'data' | 'svg'
   blurData?: string
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
   type: 'color'
   color: string
} | {
   type: undefined | 'transparent' | never | null
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
   noBorderRadius?: boolean
   button?: HeaderButton
}