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

const safeList = [
  "bg-zinc-950",
  "select-none",
  "overflow-hidden",
  "flex",
  "h-full",
  "w-screen",
  "flex-col",
  "items-center",
  "bg-gradient-to-r",
  "from-zinc-400/15",
  "via-zinc-950",
  "to-violet-200/15",
  "text-zinc-50",
  "max-w-[1440px]",
  "justify-center",
  "h-auto",
  "w-full",
  "justify-start",
  "p-16",
  "grid",
  "grid-flow-row",
  "grid-cols-1",
  "gap-4",
  "lg:grid-cols-2",
  "mb-16",
  "flex-row",
  "gap-2",
  "h-[96px]",
  "w-[96px]",
  "from-zinc-400",
  "to-violet-200",
  "bg-clip-text",
  "text-8xl",
  "font-bold",
  "leading-tight",
  "text-transparent",
  "mb-10",
  "text-5xl",
  "inline",
  "from-slate-400",
  "via-gray-400",
  "to-zinc-400",
  "from-blue-200",
  "via-indigo-200",
  "text-2xl",
  "text-zinc-500",
  "w-[400px]",
  "grid-cols-2",
  "button",
  "font-medium",
  "mx-8",
  "mt-16",
  "mb-0",
  "rotate-[-10deg]",
  "scale-100",
  "rounded-3xl",
  "rotate-[10deg]",
  "scale-90",
  "blur-sm",
  "scale-[0.8]",
  "blur-md",
  "blur-xl",
  "from-blue-500/15",
  "to-green-500/15",
  "from-blue-500",
  "to-green-500",
  "from-cyan-500",
  "via-sky-500",
  "to-blue-500",
  "from-teal-500",
  "via-emerald-500",
  "from-purple-500/15",
  "to-blue-500/15",
  "from-purple-500",
  "via-violet-500",
  "to-indigo-500",
  "from-green-500/15",
  "to-orange-500/15",
  "from-green-500",
  "to-orange-500",
  "from-yellow-500",
  "via-amber-500",
  "from-yellow-500/15",
  "to-red-500/15",
  "to-red-500",
  "from-pink-500",
  "via-rose-500",
  "from-red-500/15",
  "to-violet-500/15",
  "from-red-500",
  "to-violet-500",
  "from-blue-200/15",
  "to-zinc-400/15",
  "pb-0",
  "opacity-50",
  "gap-10",
  "lg:grid-cols-4",
  "card",
  "aspect-square",
  "pb-3",
  "pt-1",
  "text-center",
  "text-4xl",
  "absolute",
  "bottom-[-30px]",
  "right-[-165px]",
  "h-[225px]",
  "w-[450px]",
  "left-[-140px]",
  "top-[-70px]",
  "h-[180px]",
  "w-[360px]",
  "left-[-165px]",
  "right-[-140px]",
  "pb-16",
  "pt-0",
  "!w-[200px]",
  "!items-end",
  "!justify-start",
  "!px-10",
  "pb-12",
  "text-end",
  "bottom-[-40px]",
  "left-[-170px]",
  "bottom-[5px]",
  "left-[295px]",
  "h-[360px]",
  "w-[720px]",
  "!items-start",
  "!py-6",
  "mt-4",
  "items-start",
  "min-w-[48px]",
  "text-start",
  "text-[22px]/[30px]",
  "font-light",
  "top-[-80px]",
  "right-[-170px]",
  "right-[295px]",
  "px-16",
  "!w-[150px]",
  "items-end",
  "mb-[-34px]",
  "font-black",
  "!p-0",
  "aspect-video",
  "p-[2px]",
  "overflow-x-scroll",
  "rounded-[22px]",
  "relative",
  "h-[calc(100%+2px)]",
  "right-0",
  "top-0",
  "m-8",
  "ml-auto",
  "mr-0",
  "rounded-l-3xl",
  "bg-zinc-950/75",
  "backdrop-blur-xl",
  "peer/hide",
  "hidden",
  "left-2",
  "top-2",
  "z-[1]",
  "cursor-pointer",
  "appearance-none",
  "p-4",
  "peer-checked/hide:!hidden",
  "peer/open",
  "peer-checked/open:!hidden",
  "transition-all",
  "duration-500",
  "ease-in-out",
  "peer-checked/hide:!w-[60px]",
  "peer-checked/open:!w-[654px]",
  "peer-checked/hide:min-w-[60px]",
  "peer-checked/open:min-w-[654px]",
  "min-w-[654px]",
  "pt-12",
  "peer-checked/hide:opacity-0",
  "peer-checked/open:opacity-100",
  "bottom-[calc(50%-210.5px-95px)]",
  "left-[calc(50%-360px-95px)]",
  "h-[421px]",
  "mix-blend-overlay",
  "my-2",
  "w-auto",
  "bg-zinc-950/60",
  "from-slate-400/60",
  "via-gray-400/60",
  "to-zinc-400/60",
  "from-blue-200/60",
  "via-indigo-200/60",
  "to-violet-200/60",
  "from-cyan-500/60",
  "via-sky-500/60",
  "to-blue-500/60",
  "from-purple-500/60",
  "via-violet-500/60",
  "to-indigo-500/60",
  "from-teal-500/60",
  "via-emerald-500/60",
  "to-green-500/60",
  "from-yellow-500/60",
  "via-amber-500/60",
  "to-orange-500/60",
  "from-pink-500/60",
  "via-rose-500/60",
  "to-red-500/60",
  "opacity-60",
  "!from-zinc-500", 
  "!to-violet-200",
  "!from-blue-500",
  "!to-green-500",
  "!from-purple-500",
  "!to-blue-500",
  "!from-green-500",
  "!to-orange-500",
  "!from-yellow-500",
  "!to-red-500",
  "!from-red-500",
  "!to-violet-500",
  "!from-blue-200",
  "!to-zinc-500",
  "!flex-row",
  "!min-h-[60px]",
  "!min-w-[200px]",
  "!py-3",
  "bottom-[-55px]",
  "brightness-[0.35]",
  "brightness-[0.75]",
  "gap-6",
  "grid-cols-3",
  "left-[-70px]",
  "left-[55px]",
  "lg:grid-cols-5",
  "me-3",
  "right-[-70px]",
  "right-[55px]",
  "top-[-165px]",
  "w-[640px]",
  "z-[-1]",
  "grayscale",
  "!min-h-[156px]",
  "!min-w-[200px]",
  "!p-[2px]",
  "opacity-25",
  "pointer-events-none",
  "h-[152px]",
  "w-[calc(100%-4px)]",
  "left-[2px]",
  "top-[2px]",
  "from-slate-600",
  "via-gray-600",
  "to-zinc-600",
  "m-5",
  "pt-8",
  "gap-16",
  "mb-auto",
  "!rotate-[10deg]",
  "!scale-[0.88]",
  "left-[16px]",
  "top-[12px]",
  "font-semibold",
  "ml-3",
  "!rotate-[-10deg]",
  "!scale-[0.8]",
  "bottom-[30px]",
  "left-[-60px]",
  "text-3xl",
  "min-w-[24px]",
  "text-xl",
  "p-12",
  "rounded-bl-none",
  "rounded-tr-none",
  "border",
  "border-b-zinc-500/25",
  "border-l-zinc-500",
  "border-r-zinc-500/25",
  "border-t-zinc-500",
  "pb-4",
  "rounded-br-none",
  "rounded-tl-none",
  "pt-0",
  "rounded-t-none",
  "mt-3",
  "border-b-zinc-500/25", 
  "border-l-zinc-500", 
  "border-r-zinc-500/25", 
  "border-t-zinc-500", 
  "border-l-zinc-500/25", 
  "border-r-zinc-500", 
  "border-b-violet-200/25", 
  "border-l-violet-200", 
  "border-r-violet-200/25", 
  "border-t-violet-200", 
  "border-l-violet-200/25", 
  "border-r-violet-200", 
  "border-zinc-500", 
  "border-t-zinc-500/25", 
  "border-b-violet-200", 
  "border-t-violet-200/25", 
  "border-b-blue-500/25", 
  "border-l-blue-500", 
  "border-r-blue-500/25", 
  "border-t-blue-500", 
  "border-l-blue-500/25", 
  "border-r-blue-500", 
  "border-b-green-500/25", 
  "border-l-green-500", 
  "border-r-green-500/25", 
  "border-t-green-500", 
  "border-l-green-500/25", 
  "border-r-green-500", 
  "border-blue-500", 
  "border-t-blue-500/25", 
  "border-b-green-500", 
  "border-t-green-500/25", 
  "border-b-purple-500/25", 
  "border-l-purple-500", 
  "border-r-purple-500/25", 
  "border-t-purple-500", 
  "border-l-purple-500/25", 
  "border-r-purple-500", 
  "border-purple-500", 
  "border-t-purple-500/25", 
  "border-b-blue-500", 
  "border-b-orange-500/25", 
  "border-l-orange-500", 
  "border-r-orange-500/25", 
  "border-t-orange-500", 
  "border-l-orange-500/25", 
  "border-r-orange-500", 
  "border-green-500", 
  "border-b-orange-500", 
  "border-t-orange-500/25", 
  "border-b-yellow-500/25", 
  "border-l-yellow-500", 
  "border-r-yellow-500/25", 
  "border-t-yellow-500", 
  "border-l-yellow-500/25", 
  "border-r-yellow-500", 
  "border-b-red-500/25", 
  "border-l-red-500", 
  "border-r-red-500/25", 
  "border-t-red-500", 
  "border-l-red-500/25", 
  "border-r-red-500", 
  "border-yellow-500", 
  "border-t-yellow-500/25", 
  "border-b-red-500", 
  "border-t-red-500/25", 
  "border-b-violet-500/25", 
  "border-l-violet-500", 
  "border-r-violet-500/25", 
  "border-t-violet-500", 
  "border-l-violet-500/25", 
  "border-r-violet-500", 
  "border-red-500", 
  "border-b-violet-500", 
  "border-t-violet-500/25", 
  "border-b-blue-200/25", 
  "border-l-blue-200", 
  "border-r-blue-200/25", 
  "border-t-blue-200", 
  "border-l-blue-200/25", 
  "border-r-blue-200", 
  "border-blue-200", 
  "border-t-blue-200/25", 
  "border-b-zinc-500",
  "border-opacity-75",
  "bottom-[85px]",
  "top-[40px]",
  "right-[-50px]",
  "left-[-50px]",
  "top-[180px]",
  "z-[2]",
  "pb-8",
  "underline",
  "decoration-zinc-50/50",
  "mt-1.5",
  "rotate-[20deg]",
  "mt-10",
  "mb-6",
  "pt-16",
  "pb-10",
  "pt-10",
  "mx-32",
  "!to-blue-200",
  "!to-teal-500",
  "!to-cyan-500",
  "!to-yellow-500",
  "!to-pink-500",
  "!to-purple-500",
  "!to-slate-500",
  "!from-violet-200",
  "!from-orange-500",
  "!from-indigo-500",
  "grid-cols-[repeat(15,_minmax(0,_1fr))]",
  "!min-h-[65px]",
  "!min-w-[65px]",
  "!p-2",
  "grid-cols-7",
  "right-0",
  "top-0",
  "p-4",
  "p-2",
  "!min-w-min",
  "!min-h-min",
  "mb-2",
  "h-[15px]",
  "w-[15px]",
  "rounded-full",
  "border",
  "border-solid",
  "border-zinc-50",
  "hover:border",
  "hover:border-solid",
  "hover:border-zinc-50",
  "mr-2",
  "bottom-0",
  "left-0",
  "!flex-row",
  "!w-min",
  "p-[5px]",
  "z-[4]",
  "peer-checked/project-0:!flex",
  "peer/project-0",
  "peer-checked/project-1:!flex",
  "peer/project-1",
  "peer-checked/project-2:!flex",
  "peer/project-2",
  "peer-checked/project-3:!flex",
  "peer/project-3",
  "peer-checked/project-4:!flex",
  "peer/project-4",
  "peer-checked/project-5:!flex",
  "peer/project-5",
  "peer-checked/project-6:!flex",
  "peer/project-6"
]

const tailyUI = plugin(
  function ({addComponents}) {
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
  }
)

export { tailyUI, safeList, OpenSourcePromo, KPICards, FeatureCards, Projects, Skills, Jobs, Footer, Theme }