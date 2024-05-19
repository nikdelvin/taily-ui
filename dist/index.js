import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
import { buttonGroup, buttonGroupItem } from './components/buttonGroup'
import { card } from './components/card'
import { OpenSourcePromo } from './layouts/OpenSourcePromo'
import { KPICards } from './layouts/KPICards'
import { FeatureCards } from './layouts/FeatureCards'
import { Projects } from './layouts/Projects'

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
  "mb-[-32px]",
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
  "top-3",
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
  "pt-14",
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
  "to-red-500/60"
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

export { tailyUI, safeList, OpenSourcePromo, KPICards, FeatureCards, Projects }