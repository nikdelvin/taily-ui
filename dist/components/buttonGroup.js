export const buttonsGroup = `@apply
relative
z-0
inline-flex
w-full
max-w-[300px]
items-center
justify-center
overflow-hidden
rounded-full
bg-gradient-to-r
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
data-[color=default]:from-slate-500/50
data-[color=error]:from-pink-500/50
data-[color=primary]:from-cyan-500/50
data-[color=secondary]:from-purple-500/50
data-[color=success]:from-teal-500/50
data-[color=default]:via-gray-500/50
data-[color=error]:via-rose-500/50
data-[color=primary]:via-sky-500/50
data-[color=secondary]:via-violet-500/50
data-[color=success]:via-emerald-500/50
data-[color=default]:to-zinc-500/50
data-[color=error]:to-red-500/50
data-[color=primary]:to-blue-500/50
data-[color=secondary]:to-indigo-500/50
data-[color=success]:to-green-500/50
data-[color=default]:data-[type=bordered]:text-gray-500
data-[color=error]:data-[type=bordered]:text-rose-500
data-[color=primary]:data-[type=bordered]:text-sky-500
data-[color=secondary]:data-[type=bordered]:text-violet-500
data-[color=success]:data-[type=bordered]:text-emerald-500
data-[type=solid]:text-zinc-50
data-[shadow]:shadow-xl
data-[color=default]:data-[type=bordered]:data-[shadow]:shadow-gray-500/15
data-[color=default]:data-[type=solid]:data-[shadow]:shadow-gray-500/25
data-[color=error]:data-[type=bordered]:data-[shadow]:shadow-rose-500/15
data-[color=error]:data-[type=solid]:data-[shadow]:shadow-rose-500/25
data-[color=primary]:data-[type=bordered]:data-[shadow]:shadow-sky-500/15
data-[color=primary]:data-[type=solid]:data-[shadow]:shadow-sky-500/25
data-[color=secondary]:data-[type=bordered]:data-[shadow]:shadow-violet-500/15
data-[color=secondary]:data-[type=solid]:data-[shadow]:shadow-violet-500/25
data-[color=success]:data-[type=bordered]:data-[shadow]:shadow-emerald-500/15
data-[color=success]:data-[type=solid]:data-[shadow]:shadow-emerald-500/25
before:data-[color=default]:from-slate-800
before:data-[color=error]:from-pink-950
before:data-[color=primary]:from-cyan-950
before:data-[color=secondary]:from-purple-950
before:data-[color=success]:from-teal-950
before:data-[color=default]:via-gray-800
before:data-[color=error]:via-rose-950
before:data-[color=primary]:via-sky-950
before:data-[color=secondary]:via-violet-950
before:data-[color=success]:via-emerald-950
before:data-[color=default]:to-zinc-800
before:data-[color=error]:to-red-950
before:data-[color=primary]:to-blue-950
before:data-[color=secondary]:to-indigo-950
before:data-[color=success]:to-green-950
after:data-[color=default]:data-[type=bordered]:from-slate-800
after:data-[color=default]:data-[type=solid]:from-slate-500
after:data-[color=error]:data-[type=bordered]:from-pink-950
after:data-[color=error]:data-[type=solid]:from-pink-500
after:data-[color=primary]:data-[type=bordered]:from-cyan-950
after:data-[color=primary]:data-[type=solid]:from-cyan-500
after:data-[color=secondary]:data-[type=bordered]:from-purple-950
after:data-[color=secondary]:data-[type=solid]:from-purple-500
after:data-[color=success]:data-[type=bordered]:from-teal-950
after:data-[color=success]:data-[type=solid]:from-teal-500
after:data-[color=default]:data-[type=bordered]:via-gray-800
after:data-[color=default]:data-[type=solid]:via-gray-500
after:data-[color=error]:data-[type=bordered]:via-rose-950
after:data-[color=error]:data-[type=solid]:via-rose-500
after:data-[color=primary]:data-[type=bordered]:via-sky-950
after:data-[color=primary]:data-[type=solid]:via-sky-500
after:data-[color=secondary]:data-[type=bordered]:via-violet-950
after:data-[color=secondary]:data-[type=solid]:via-violet-500
after:data-[color=success]:data-[type=bordered]:via-emerald-950
after:data-[color=success]:data-[type=solid]:via-emerald-500
after:data-[color=default]:data-[type=bordered]:to-zinc-800
after:data-[color=default]:data-[type=solid]:to-zinc-500
after:data-[color=error]:data-[type=bordered]:to-red-950
after:data-[color=error]:data-[type=solid]:to-red-500
after:data-[color=primary]:data-[type=bordered]:to-blue-950
after:data-[color=primary]:data-[type=solid]:to-blue-500
after:data-[color=secondary]:data-[type=bordered]:to-indigo-950
after:data-[color=secondary]:data-[type=solid]:to-indigo-500
after:data-[color=success]:data-[type=bordered]:to-green-950
after:data-[color=success]:data-[type=solid]:to-green-500
after:data-[type=bordered]:brightness-[0.25]
after:data-[type=solid]:brightness-[1]`

export const buttonsGroupItem = `@apply
relative
inline-flex
w-full
select-none
appearance-none
items-center
justify-center
gap-2
overflow-hidden
whitespace-nowrap
bg-transparent
px-2
antialiased
first:rounded-l-full
first:pl-4
last:rounded-r-full
last:pr-4
group-data-[size=large]:py-[12px]
group-data-[size=medium]:py-[10px]
group-data-[size=small]:py-[8px]
group-data-[size=large]:text-base
group-data-[size=medium]:text-sm
group-data-[size=small]:text-xs
group-data-[color=default]:group-data-[type=bordered]:hover:bg-slate-800/25
group-data-[color=error]:group-data-[type=bordered]:hover:bg-pink-950/25
group-data-[color=primary]:group-data-[type=bordered]:hover:bg-cyan-950/25
group-data-[color=secondary]:group-data-[type=bordered]:hover:bg-purple-950/25
group-data-[color=success]:group-data-[type=bordered]:hover:bg-teal-950/25
group-data-[type=solid]:hover:bg-zinc-950/15
group-data-[color=default]:group-data-[type=bordered]:focus:bg-slate-800/50
group-data-[color=error]:group-data-[type=bordered]:focus:bg-pink-950/50
group-data-[color=primary]:group-data-[type=bordered]:focus:bg-cyan-950/50
group-data-[color=secondary]:group-data-[type=bordered]:focus:bg-purple-950/50
group-data-[color=success]:group-data-[type=bordered]:focus:bg-teal-950/50
group-data-[type=solid]:focus:bg-zinc-950/30`