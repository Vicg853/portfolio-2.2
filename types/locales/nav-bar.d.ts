export interface NavAltsLocale {
   logoAlt: string;
   menuButton: () => (mode: boolean) => string;
   themeButton: () => (theme: string) => string;
   localesMenu: {
      closeMeMsg: string;
      mainAlt: () => (isActive: boolean) => string;
   }
}