import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
import { buttonGroup, buttonGroupItem } from './components/buttonGroup'
import { card } from './components/card'
import { OpenSourcePromo } from './layouts/OpenSourcePromo'
import { KPICards } from './layouts/KPICards'

const safeList = [
  "flex",
  "h-screen",
  "w-screen",
  "flex-col",
  "overflow-y-scroll",
  "h-full",
  "bg-gradient-to-tr",
  "via-zinc-950",
  "from-zinc-500/25",
  "to-violet-200/25",
  "from-blue-500/25",
  "to-green-500/25",
  "from-purple-500/25",
  "to-blue-500/25",
  "from-green-500/25",
  "to-orange-500/25",
  "from-yellow-500/25",
  "to-red-500/25",
  "from-red-500/25", 
  "to-violet-500/25",
  "from-blue-200/25", 
  "to-zinc-500/25",
  "text-zinc-50",
  "w-full",
  "items-center",
  "justify-start",
  "gap-4",
  "p-16",
  "grid",
  "grid-flow-row",
  "grid-cols-1",
  "lg:grid-cols-2",
  "mb-16",
  "flex-row",
  "gap-2",
  "h-[96px]",
  "w-[96px]",
  "bg-gradient-to-r",
  "from-zinc-500", 
  "to-violet-200",
  "from-blue-500",
  "to-green-500",
  "from-purple-500",
  "to-blue-500",
  "from-green-500", 
  "to-orange-500",
  "from-yellow-500",
  "to-red-500",
  "from-red-500", 
  "to-violet-500",
  "from-blue-200", 
  "to-zinc-500",
  "bg-clip-text",
  "text-8xl",
  "font-bold",
  "leading-tight",
  "text-transparent",
  "mb-10",
  "text-5xl",
  "inline",
  "from-slate-500", 
  "via-gray-500",
  "to-zinc-500",
  "from-slate-400", 
  "via-gray-400",
  "to-zinc-400",
  "from-cyan-500", 
  "via-sky-500", 
  "to-blue-500",
  "from-purple-500", 
  "via-violet-500", 
  "to-indigo-500",
  "from-teal-500", 
  "via-emerald-500", 
  "to-green-500",
  "from-yellow-500", 
  "via-amber-500", 
  "to-orange-500",
  "from-pink-500", 
  "via-rose-500", 
  "to-red-500",
  "from-blue-200", 
  "via-indigo-200", 
  "to-violet-200",
  "text-2xl",
  "text-zinc-500",
  "w-[400px]",
  "grid-cols-2",
  "button",
  "font-medium",
  "mx-8",
  "mt-16",
  "mb-0",
  "pb-3",
  "pt-1",
  "rotate-[-10deg]",
  "scale-100",
  "justify-center",
  "rounded-3xl",
  "py-4",
  "rotate-[10deg]",
  "scale-90",
  "blur-sm",
  "scale-[0.8]",
  "blur-md",
  "mix-blend-overlay",
  "overflow-hidden",
  "my-2",
  "grid-cols-2",
  "gap-16",
  "lg:grid-cols-4",
  "text-4xl",
  "bottom-[-40px]",
  "right-[-115px]",
  "h-[180px]",
  "w-[360px]",
  "left-[-50px]",
  "top-0",
  "h-[135px]",
  "w-[270px]"
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

export { tailyUI, safeList, OpenSourcePromo, KPICards }