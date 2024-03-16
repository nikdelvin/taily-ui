import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
import { buttonGroup, buttonGroupItem } from './components/buttonGroup'
import { OpenSourcePromo } from './layouts/OpenSourcePromo'

const safeList = [
  "flex",
  "h-screen",
  "w-screen",
  "flex-col",
  "overflow-y-scroll",
  "h-full",
  "bg-gradient-to-tr",
  "from-fuchsia-500/25",
  "via-zinc-950",
  "to-blue-500/25",
  "from-blue-500/25",
  "via-zinc-950",
  "to-green-500/25",
  "from-yellow-500/25",
  "via-zinc-950",
  "to-red-500/25",
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
  "from-fuchsia-500",
  "via-violet-500",
  "to-blue-500",
  "from-blue-500",
  "via-cyan-500",
  "to-green-500",
  "from-yellow-500",
  "via-orange-500",
  "to-red-500",
  "bg-clip-text",
  "text-8xl",
  "font-bold",
  "leading-tight",
  "text-transparent",
  "mb-10",
  "text-5xl",
  "inline",
  "from-purple-500",
  "to-indigo-500",
  "from-cyan-500",
  "via-sky-500",
  "from-cyan-500",
  "via-sky-500",
  "to-blue-500",
  "from-teal-500",
  "via-emerald-500",
  "via-amber-500",
  "to-orange-500",
  "from-pink-500",
  "via-rose-500",
  "text-2xl",
  "text-zinc-500",
  "w-[400px]",
  "grid-cols-2",
  "button",
  "font-medium",
  "mx-8",
  "my-16",
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
      }
    })
  }
)

export { tailyUI, safeList, OpenSourcePromo }