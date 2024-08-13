export const button = `@apply
relative
z-0
inline-flex
w-full
max-w-[300px]
select-none
appearance-none
items-center
justify-center
gap-2
overflow-hidden
whitespace-nowrap
rounded-full
bg-gradient-to-r
px-4
antialiased
before:absolute
before:left-0
before:top-0
before:z-[-2]
before:m-[1px]
before:h-[calc(100%-2px)]
before:w-[calc(100%-2px)]
before:rounded-full
before:bg-gradient-to-r
after:absolute
after:left-0
after:top-0
after:z-[-1]
after:m-[3px]
after:h-[calc(100%-6px)]
after:w-[calc(100%-6px)]
after:rounded-full
after:bg-gradient-to-r
data-[icon]:aspect-square
data-[icon]:h-auto
data-[icon]:w-auto
data-[color=default]:from-zinc-400/50
data-[color=error]:from-pink-500/50
data-[color=primary]:from-cyan-500/50
data-[color=secondary]:from-indigo-500/50
data-[color=success]:from-green-500/50
data-[color=warning]:from-orange-500/50
data-[color=ghost]:from-blue-200/50
data-[color=default]:via-gray-400/50
data-[color=error]:via-rose-500/50
data-[color=primary]:via-sky-500/50
data-[color=secondary]:via-violet-500/50
data-[color=success]:via-emerald-500/50
data-[color=warning]:via-amber-500/50
data-[color=ghost]:via-indigo-200/50
data-[color=default]:to-slate-400/50
data-[color=error]:to-red-500/50
data-[color=primary]:to-blue-500/50
data-[color=secondary]:to-purple-500/50
data-[color=success]:to-teal-500/50
data-[color=warning]:to-yellow-500/50
data-[color=ghost]:to-violet-200/50
data-[size=large]:data-[icon]:p-[10px]
data-[size=medium]:data-[icon]:p-[8px]
data-[size=small]:data-[icon]:p-[6px]
data-[size=large]:py-[12px]
data-[size=medium]:py-[10px]
data-[size=small]:py-[8px]
data-[size=large]:text-base
data-[size=medium]:text-sm
data-[size=small]:text-xs
data-[color=default]:data-[type=bordered]:text-slate-400
data-[color=error]:data-[type=bordered]:text-red-500
data-[color=primary]:data-[type=bordered]:text-blue-500
data-[color=secondary]:data-[type=bordered]:text-purple-500
data-[color=success]:data-[type=bordered]:text-green-500
data-[color=warning]:data-[type=bordered]:text-yellow-500
data-[color=ghost]:data-[type=bordered]:text-blue-200
data-[color=ghost]:data-[type=solid]:text-zinc-950
data-[type=solid]:text-zinc-50
data-[shadow]:shadow-xl
data-[color=default]:data-[type=bordered]:data-[shadow]:shadow-slate-400/15
data-[color=default]:data-[type=solid]:data-[shadow]:shadow-slate-400/25
data-[color=error]:data-[type=bordered]:data-[shadow]:shadow-red-500/15
data-[color=error]:data-[type=solid]:data-[shadow]:shadow-red-500/25
data-[color=primary]:data-[type=bordered]:data-[shadow]:shadow-blue-500/15
data-[color=primary]:data-[type=solid]:data-[shadow]:shadow-blue-500/25
data-[color=secondary]:data-[type=bordered]:data-[shadow]:shadow-purple-500/15
data-[color=secondary]:data-[type=solid]:data-[shadow]:shadow-purple-500/25
data-[color=success]:data-[type=bordered]:data-[shadow]:shadow-green-500/15
data-[color=success]:data-[type=solid]:data-[shadow]:shadow-green-500/25
data-[color=warning]:data-[type=bordered]:data-[shadow]:shadow-yellow-500/15
data-[color=warning]:data-[type=solid]:data-[shadow]:shadow-yellow-500/25
data-[color=ghost]:data-[type=bordered]:data-[shadow]:shadow-blue-200/15
data-[color=ghost]:data-[type=solid]:data-[shadow]:shadow-blue-200/25
before:data-[color=default]:from-zinc-800
before:data-[color=error]:from-pink-950
before:data-[color=primary]:from-cyan-950
before:data-[color=secondary]:from-indigo-950
before:data-[color=success]:from-green-950
before:data-[color=warning]:from-orange-950
before:data-[color=ghost]:from-blue-950
before:data-[color=default]:via-gray-800
before:data-[color=error]:via-rose-950
before:data-[color=primary]:via-sky-950
before:data-[color=secondary]:via-violet-950
before:data-[color=success]:via-emerald-950
before:data-[color=warning]:via-amber-950
before:data-[color=ghost]:via-indigo-950
before:data-[color=default]:to-slate-800
before:data-[color=error]:to-red-950
before:data-[color=primary]:to-blue-950
before:data-[color=secondary]:to-purple-950
before:data-[color=success]:to-teal-950
before:data-[color=warning]:to-yellow-950
before:data-[color=ghost]:to-violet-950
after:data-[color=default]:data-[type=bordered]:from-zinc-800
after:data-[color=default]:data-[type=solid]:from-zinc-400
after:data-[color=error]:data-[type=bordered]:from-pink-950
after:data-[color=error]:data-[type=solid]:from-pink-500
after:data-[color=primary]:data-[type=bordered]:from-cyan-950
after:data-[color=primary]:data-[type=solid]:from-cyan-500
after:data-[color=secondary]:data-[type=bordered]:from-indigo-950
after:data-[color=secondary]:data-[type=solid]:from-indigo-500
after:data-[color=success]:data-[type=bordered]:from-green-950
after:data-[color=success]:data-[type=solid]:from-green-500
after:data-[color=warning]:data-[type=bordered]:from-orange-950
after:data-[color=warning]:data-[type=solid]:from-orange-500
after:data-[color=ghost]:data-[type=bordered]:from-blue-950
after:data-[color=ghost]:data-[type=solid]:from-blue-200
after:data-[color=default]:data-[type=bordered]:via-gray-800
after:data-[color=default]:data-[type=solid]:via-gray-400
after:data-[color=error]:data-[type=bordered]:via-rose-950
after:data-[color=error]:data-[type=solid]:via-rose-500
after:data-[color=primary]:data-[type=bordered]:via-sky-950
after:data-[color=primary]:data-[type=solid]:via-sky-500
after:data-[color=secondary]:data-[type=bordered]:via-violet-950
after:data-[color=secondary]:data-[type=solid]:via-violet-500
after:data-[color=success]:data-[type=bordered]:via-emerald-950
after:data-[color=success]:data-[type=solid]:via-emerald-500
after:data-[color=warning]:data-[type=bordered]:via-amber-950
after:data-[color=warning]:data-[type=solid]:via-amber-500
after:data-[color=ghost]:data-[type=bordered]:via-indigo-950
after:data-[color=ghost]:data-[type=solid]:via-indigo-200
after:data-[color=default]:data-[type=bordered]:to-slate-800
after:data-[color=default]:data-[type=solid]:to-slate-400
after:data-[color=error]:data-[type=bordered]:to-red-950
after:data-[color=error]:data-[type=solid]:to-red-500
after:data-[color=primary]:data-[type=bordered]:to-blue-950
after:data-[color=primary]:data-[type=solid]:to-blue-500
after:data-[color=secondary]:data-[type=bordered]:to-purple-950
after:data-[color=secondary]:data-[type=solid]:to-purple-500
after:data-[color=success]:data-[type=bordered]:to-teal-950
after:data-[color=success]:data-[type=solid]:to-teal-500
after:data-[color=warning]:data-[type=bordered]:to-yellow-950
after:data-[color=warning]:data-[type=solid]:to-yellow-500
after:data-[color=ghost]:data-[type=bordered]:to-violet-950
after:data-[color=ghost]:data-[type=solid]:to-violet-200
after:data-[type=bordered]:brightness-[0.25]
after:data-[type=solid]:brightness-[1]
after:data-[type=bordered]:hover:brightness-[0.45]
after:data-[type=solid]:hover:brightness-[0.85]
after:data-[type=bordered]:focus:brightness-[0.65]
after:data-[type=solid]:focus:brightness-[0.7]
[&>*]:z-0`