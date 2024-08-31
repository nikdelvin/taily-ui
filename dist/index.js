import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
import { buttonGroup, buttonGroupItem } from './components/buttonGroup'
import { card } from './components/card'
import { OpenSourcePromo } from './layouts/OpenSourcePromo'
import { KPICards } from './layouts/KPICards'
import { FeatureCards } from './layouts/FeatureCards'
import { Projects } from './layouts/Projects'
import { Skills } from './layouts/Skills'
import { Jobs } from './layouts/Jobs'
import { Footer } from './layouts/Footer'
import { Theme } from './layouts/Theme'
import { colorsConfig } from './config'

const safeList = [
  "!flex-row",
  "!items-end",
  "!items-start",
  "!justify-start",
  "!min-h-[156px]",
  "!min-h-[65px]",
  "!min-h-min",
  "!min-w-[200px]",
  "!min-w-[275px]",
  "!min-w-[65px]",
  "!min-w-min",
  "!p-0",
  "!p-2",
  "!p-[2px]",
  "!px-10",
  "!py-6",
  "!w-[150px]",
  "!w-[200px]",
  "!w-min",
  "absolute",
  "appearance-none",
  "aspect-square",
  "aspect-video",
  "backdrop-blur-xl",
  "bg-clip-text",
  "bg-gradient-to-r",
  "bg-zinc-950",
  "bg-zinc-950/60",
  "bg-zinc-950/75",
  "blur-md",
  "blur-sm",
  "blur-xl",
  "border",
  "border-opacity-75",
  "border-solid",
  "border-zinc-50",
  "bottom-0",
  "bottom-[-30px]",
  "bottom-[-40px]",
  "bottom-[30px]",
  "bottom-[5px]",
  "bottom-[63px]",
  "bottom-[85px]",
  "bottom-[calc(50%-306px)]",
  "brightness-125",
  "button",
  "card",
  "cursor-pointer",
  "decoration-zinc-50/50",
  "duration-500",
  "ease-in-out",
  "flex",
  "flex-col",
  "flex-row",
  "font-bold",
  "font-light",
  "font-medium",
  "font-semibold",
  "gap-10",
  "gap-16",
  "gap-4",
  "gap-6",
  "grayscale",
  "grid",
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-[repeat(15,_minmax(0,_1fr))]",
  "grid-flow-row",
  "group",
  "h-[152px]",
  "h-[15px]",
  "h-[24px]",
  "h-[32px]",
  "h-[96px]",
  "h-[169px]",
  "h-[180px]",
  "h-[225px]",
  "h-[360px]",
  "h-[421px]",
  "h-[96px]",
  "h-[calc(100%+2px)]",
  "h-auto",
  "h-full",
  "hidden",
  "hover:border",
  "hover:border-solid",
  "hover:border-zinc-50",
  "inline",
  "items-center",
  "items-end",
  "items-start",
  "justify-center",
  "justify-start",
  "leading-tight",
  "leading-none",
  "left-0",
  "left-2",
  "left-[-140px]",
  "left-[-165px]",
  "left-[-170px]",
  "left-[-41.5%]",
  "left-[-50px]",
  "left-[-60px]",
  "left-[-70px]",
  "left-[16px]",
  "left-[295px]",
  "left-[2px]",
  "left-[calc(50%-455px)]",
  "lg:grid-cols-2",
  "lg:grid-cols-4",
  "lg:grid-cols-5",
  "m-6",
  "max-w-[1440px]",
  "max-h-[190px]",
  "mb-10",
  "mb-16",
  "mb-2",
  "mb-6",
  "mb-[-34px]",
  "mb-auto",
  "min-h-[24px]",
  "min-h-[32px]",
  "min-h-[96px]",
  "min-w-[24px]",
  "min-w-[32px]",
  "min-w-[48px]",
  "min-w-[654px]",
  "min-w-[96px]",
  "min-w-max",
  "mix-blend-overlay",
  "ml-auto",
  "mr-0",
  "mr-2",
  "mt-2",
  "mt-10",
  "mt-4",
  "mx-auto",
  "my-2",
  "my-auto",
  "opacity-25",
  "opacity-50",
  "opacity-60",
  "overflow-hidden",
  "p-0",
  "p-12",
  "p-16",
  "p-2",
  "p-4",
  "p-[2px]",
  "pb-0",
  "pb-2",
  "pb-10",
  "pb-12",
  "pb-16",
  "pb-4",
  "pb-8",
  "pb-[5px]",
  "peer-checked/hide:!hidden",
  "peer-checked/hide:!w-[60px]",
  "peer-checked/hide:min-w-[60px]",
  "peer-checked/hide:opacity-0",
  "peer-checked/open:!hidden",
  "peer-checked/open:!w-[654px]",
  "peer-checked/open:min-w-[654px]",
  "peer-checked/open:opacity-100",
  "peer-checked/project-0:!flex",
  "peer-checked/project-1:!flex",
  "peer-checked/project-2:!flex",
  "peer-checked/project-3:!flex",
  "peer-checked/project-4:!flex",
  "peer-checked/project-5:!flex",
  "peer-checked/project-6:!flex",
  "peer/hide",
  "peer/open",
  "peer/project-0",
  "peer/project-1",
  "peer/project-2",
  "peer/project-3",
  "peer/project-4",
  "peer/project-5",
  "peer/project-6",
  "pl-4",
  "pointer-events-none",
  "pt-0",
  "pt-12",
  "pt-16",
  "pt-6",
  "pt-8",
  "px-16",
  "relative",
  "right-0",
  "right-[-140px]",
  "right-[-165px]",
  "right-[-170px]",
  "right-[-50px]",
  "right-[-70px]",
  "right-[295px]",
  "rotate-90",
  "rotate-[-10deg]",
  "rotate-[10deg]",
  "rotate-[20deg]",
  "rounded-3xl",
  "rounded-[22px]",
  "rounded-b-none",
  "rounded-bl-none",
  "rounded-br-none",
  "rounded-full",
  "rounded-l-3xl",
  "rounded-t-none",
  "rounded-tl-none",
  "rounded-tr-none",
  "scale-100",
  "scale-90",
  "scale-[0.8]",
  "select-none",
  "text-2xl",
  "text-3xl",
  "text-4xl",
  "text-5xl",
  "text-8xl",
  "text-[22px]/[30px]",
  "text-center",
  "text-end",
  "text-start",
  "text-transparent",
  "text-xl",
  "text-xs",
  "text-zinc-50",
  "top-0",
  "top-2",
  "top-[-165px]",
  "top-[-70px]",
  "top-[-80px]",
  "top-[12px]",
  "top-[180px]",
  "top-[2px]",
  "top-[40px]",
  "top-[41.5%]",
  "transition-all",
  "underline",
  "w-[15px]",
  "w-[24px]",
  "w-[32px]",
  "w-[96px]",
  "w-[169px]",
  "w-[360px]",
  "w-[400px]",
  "w-[450px]",
  "w-[640px]",
  "w-[720px]",
  "w-[96px]",
  "w-[calc(100%-4px)]",
  "w-auto",
  "w-full",
  "w-screen",
  "w-min",
  "z-[1]",
  "z-[2]",
  "z-[4]",
  "max-sm:text-5xl",
  "max-sm:mb-8",
  "max-sm:p-6",
  "max-sm:mb-6",
  "max-sm:text-2xl",
  "max-sm:text-base",
  "max-sm:grid-cols-1",
  "max-sm:w-full",
  "max-sm:h-[48px]",
  "max-sm:w-[48px]",
  "max-sm:min-h-[48px]",
  "max-sm:min-w-[48px]",
  "max-sm:mt-0",
  "max-sm:!min-w-[calc(100%-111px)]",
  "top-[28px]",
  "top-[-28px]",
  "max-sm:ml-[9px]",
  "max-sm:top-[calc(((100vw_-_345px)/17*-1)_+_28px)]",
  "max-sm:top-[16px]",
  "max-sm:!w-[75%]",
  "max-sm:!h-[85%]",
  "max-sm:!w-[60%]",
  "max-sm:gap-8",
  "max-sm:py-10",
  "max-sm:max-w-[459px]",
  "max-lg:max-w-[759px]",
  "max-md:h-[64px]",
  "max-md:w-[64px]",
  "max-md:min-h-[64px]",
  "max-md:min-w-[64px]",
  "max-md:text-[4rem]",
  "max-md:mb-12",
  "max-md:text-[2rem]",
  "max-md:mb-8",
  "max-md:text-lg",
  "max-md:max-w-[640px]",
  "max-md:p-8", 
  "max-md:py-12",
  "max-md:!h-[85%]",
  "max-md:mt-6",
  "max-lg:mt-10",
  "min-[1024px]:max-[1439px]:h-[64px]",
  "min-[1024px]:max-[1439px]:w-[64px]",
  "min-[1024px]:max-[1439px]:min-h-[64px]",
  "min-[1024px]:max-[1439px]:min-w-[64px]",
  "min-[1024px]:max-[1439px]:mb-12",
  "min-[1024px]:max-[1439px]:text-[4rem]",
  "min-[1024px]:max-[1439px]:mb-8",
  "min-[1024px]:max-[1439px]:text-[2rem]",
  "min-[1024px]:max-[1439px]:text-lg",
  "min-[1024px]:max-[1439px]:top-[8px]",
  "min-[1024px]:max-[1439px]:top-[-48px]",
  "min-[1024px]:max-[1439px]:mb-0",
  "min-[1024px]:max-[1439px]:mb-[-40px]",
  "min-[1024px]:max-[1439px]:max-w-[1024px]",
  "max-sm:pt-4",
  "max-md:pt-6",
  "min-[1024px]:max-[1439px]:py-12",
  "max-sm:text-[2rem]",
  "min-[1024px]:max-[1439px]:text-2xl",
  "max-sm:text-[4rem]",
  "max-sm:pb-4",
  "max-md:pb-6",
  "min-[1024px]:max-[1439px]:!min-w-[200px]",
  "min-[1024px]:max-[1439px]:!min-h-[200px]",
  "max-sm:!w-[250px]",
  "max-sm:!h-[250px]",
  "ml-[10px]", 
  "max-sm:ml-0",
  "max-sm:px-6",
  "max-md:px-8",
  "max-sm:grid-cols-1",
  "text-nowrap",
  "max-md:text-5xl",
  "max-lg:text-[3.5rem]",
  "min-[1024px]:max-[1439px]:text-[3.5rem]",
  "max-sm:pb-10", 
  "max-md:pb-12",
  "max-md:!px-8", 
  "max-md:!py-6", 
  "max-sm:!px-6", 
  "max-sm:!py-4",
  "min-[1024px]:max-[1439px]:!px-6", 
  "min-[1024px]:max-[1439px]:!py-4",
  "min-[1024px]:max-[1439px]:min-w-[24px]", 
  "max-md:min-w-[24px]", 
  "max-sm:min-w-[18px]",
  "max-md:text-2xl", 
  "mb-4",
  "min-[1024px]:max-[1439px]:leading-[1.15]",
  "max-md:leading-[1.15]",
  "max-sm:text-[3.5rem]", 
  "min-[1024px]:max-[1439px]:leading-[1.2]",
  "max-md:leading-[1.35]", 
  "max-md:pb-8", 
  "min-[1024px]:max-[1439px]:pb-8",
  "max-sm:!min-h-[200px]", 
  "max-md:!min-h-[200px]",
  "max-lg:order-last",
  "min-[1024px]:max-[1439px]:mt-2",
  "min-[1024px]:max-[1439px]:mb-2",
  "max-sm:mb-10", 
  "max-md:mb-12", 
  "min-[1024px]:max-[1439px]:mb-12",
  "max-lg:hidden",
  "min-[1024px]:max-[1439px]:pb-4",
  "min-[1024px]:max-[1439px]:pt-8",
  "max-[1439px]:p-2",
  "max-[1439px]:bottom-[47px]",
  "min-[1024px]:max-[1439px]:hidden",
  "min-[1024px]:max-[1439px]:pt-0", 
  "min-[1024px]:max-[1439px]:items-end",
  "min-[1024px]:max-[1439px]:pr-12",
  "max-sm:pt-10", 
  "max-md:pt-12", 
  "min-[1024px]:max-[1439px]:pt-12",
  "max-sm:pb-10",
  "max-md:pb-12",
  "min-[1024px]:max-[1439px]:grid-cols-10", 
  "max-lg:grid-cols-6", 
  "max-md:grid-cols-6", 
  "max-sm:grid-cols-5",
  "mt-[-8px]",
  "max-[1439px]:hidden",
  "max-[1439px]:pt-0",
  "min-[1024px]:max-[1439px]:pb-12",
  "max-md:pb-8", 
  "max-sm:pb-6", 
  "min-[1024px]:max-[1439px]:pb-8",
  "min-[1024px]:max-[1439px]:pb-2",
  "min-[1024px]:max-[1439px]:gap-6",
  "min-[1024px]:max-[1439px]:gap-10",
  "min-[1024px]:max-[1439px]:text-xl", 
  "max-md:text-2xl", 
  "max-sm:text-xl",
  "min-[1024px]:max-[1439px]:text-base", 
  "max-md:text-lg", 
  "max-sm:text-base",
  "min-[1024px]:max-[1439px]:pb-4",
  "max-sm:pb-0", 
  "max-md:pb-2", 
  "min-[1024px]:max-[1439px]:pb-0",
  "max-sm:pt-4", 
  "max-md:pt-6", 
  "min-[1024px]:max-[1439px]:pt-4",
  "grid-cols-2",
  "max-lg:gap-10",
  "max-sm:text-lg",
  "max-sm:!min-w-[150px]",
  "max-sm:!min-h-[150px]",
  "max-sm:pb-0",
  "max-md:pb-1", 
  "min-[1024px]:max-[1439px]:pb-0",
  "max-sm:gap-6",
  "!pb-0",
  "max-sm:gap-4",
  "max-sm:!min-w-[50px]",
  "max-sm:text-[3.25rem]",
  "max-sm:!min-h-[150px]",
  "max-sm:text-sm",
  "max-sm:left-[12px]", 
  "max-sm:top-[8px]",
  "max-sm:pb-2",
  "md:grid-cols-2",
  "sm:grid-cols-2",
  "max-lg:rounded-tl-none", 
  "max-lg:rounded-br-none",
  "max-lg:rounded-tr-none", 
  "max-lg:rounded-bl-none",
  "max-lg:rounded-br-3xl", 
  "max-lg:rounded-tl-3xl",
  "max-lg:rounded-bl-3xl", 
  "max-lg:rounded-tr-3xl",
  "max-lg:rounded-b-none", 
  "max-lg:rounded-t-3xl",
  "max-sm:!rounded-3xl",
  "max-sm:!aspect-auto",
  "min-[1024px]:max-[1439px]:pb-16",
  "!max-h-[322px]",
  "min-[1024px]:max-[1439px]:!max-h-[360px]",
  "max-sm:!max-h-[200px]", 
  "max-md:!max-h-[247px]",
  "max-sm:!max-h-full", 
  "max-md:!max-h-full",
  "!max-h-[65px]",
  "!max-h-[156px]",
  "content-start",
  "whitespace-nowrap",
  "translate-z-0",
  "max-[1439px]:!aspect-auto",
  "max-sm:mx-auto",
  "max-sm:!max-h-[408px]", 
  "max-md:!max-h-[308px]",
  "max-sm:!min-h-fit",
  "max-sm:gap-6",
  "max-md:gap-8",
  "min-[1024px]:max-[1439px]:gap-8"
].concat(Object.values(colorsConfig).flatMap((color) => Object.values(color).flatMap((style) => Array.isArray(style) ? style.flatMap((subStyle) => subStyle.split(' ')) : style.split(' '))))

const tailyUI = plugin(
  function ({addComponents, matchUtilities, theme}) {
    addComponents({
      '.button': {
        [button]: {}
      },
      '.button-group': {
        [buttonGroup]: {}
      },
      '.button-group-item': {
        [buttonGroupItem]: {}
      },
      '.card': {
        [card]: {}
      }
    })
    matchUtilities(
      {
        'translate-z': (value) => ({
          '--tw-translate-z': value,
          transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`
        })
      },
      { values: theme('translate'), supportsNegativeValues: true }
    )
  }
)

export { tailyUI, safeList, OpenSourcePromo, KPICards, FeatureCards, Projects, Skills, Jobs, Footer, Theme }