import { gitHub } from "../icons/github"

export function OpenSourcePromo(config) {
    const colorsConfig = {
        default: {
            background: 'from-gray-500/25 via-zinc-950 to-blue-200/25',
            title: 'from-gray-500 via-slate-500 to-blue-200',
            textPrimary: 'from-slate-500 via-gray-500 to-zinc-500',
            textSecondary: 'from-cyan-200 via-sky-200 to-blue-200',
            button: 'default',
            github: 'ghost',
            image: 'from-gray-500 via-slate-500 to-blue-200'
        },
        primary: {
            background: 'from-blue-500/25 via-zinc-950 to-green-500/25',
            title: 'from-blue-500 via-cyan-500 to-green-500',
            textPrimary: 'from-cyan-500 via-sky-500 to-blue-500',
            textSecondary: 'from-teal-500 via-emerald-500 to-green-500',
            button: 'primary',
            github: 'success',
            image: 'from-blue-500 via-cyan-500 to-green-500'
        },
        secondary: {
            background: 'from-fuchsia-500/25 via-zinc-950 to-blue-500/25',
            title: 'from-fuchsia-500 via-violet-500 to-blue-500',
            textPrimary: 'from-purple-500 via-violet-500 to-indigo-500',
            textSecondary: 'from-cyan-500 via-sky-500 to-blue-500',
            button: 'secondary',
            github: 'primary',
            image: 'from-fuchsia-500 via-violet-500 to-blue-500'
        },
        success: {
            background: 'from-green-500/25 via-zinc-950 to-amber-500/25',
            title: 'from-green-500 via-lime-500 to-amber-500',
            textPrimary: 'from-teal-500 via-emerald-500 to-green-500',
            textSecondary: 'from-yellow-500 via-amber-500 to-orange-500',
            button: 'success',
            github: 'warning',
            image: 'from-green-500 via-lime-500 to-amber-500'
        },
        warning: {
            background: 'from-yellow-500/25 via-zinc-950 to-red-500/25',
            title: 'from-yellow-500 via-orange-500 to-red-500',
            textPrimary: 'from-yellow-500 via-amber-500 to-orange-500',
            textSecondary: 'from-pink-500 via-rose-500 to-red-500',
            button: 'warning',
            github: 'error',
            image: 'from-yellow-500 via-orange-500 to-red-500'
        },
        error: {
            background: 'from-red-500/25 via-zinc-950 to-fuchsia-500/25',
            title: 'from-red-500 via-rose-500 to-fuchsia-500',
            textPrimary: 'from-pink-500 via-rose-500 to-red-500',
            textSecondary: 'from-purple-500 via-violet-500 to-indigo-500',
            button: 'error',
            github: 'secondary',
            image: 'from-red-500 via-rose-500 to-fuchsia-500'
        },
        ghost: {
            background: 'from-blue-200/25 via-zinc-950 to-slate-500/25',
            title: 'from-blue-200 via-blue-300 from-slate-500',
            textPrimary: 'from-cyan-200 via-sky-200 to-blue-200',
            textSecondary: 'from-slate-500 via-gray-500 to-zinc-500',
            button: 'ghost',
            github: 'default',
            image: 'from-blue-200 via-blue-300 from-slate-500'
        }
    }

    return `
        <div class="flex h-screen w-screen flex-col overflow-y-scroll">
            <div class="h-full bg-gradient-to-tr ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex h-full w-full flex-col items-center justify-start gap-4 p-16">
                    <div class="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
                        <div class="flex w-full flex-col">
                            <div class="mb-16 flex flex-row items-center gap-2">
                                <div class="h-[96px] w-[96px]">
                                    <img
                                        alt="Main 1"
                                        src="${config.logo}"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent">
                                    ${config.title}
                                </h1>
                            </div>
                            <h1 class="mb-10 text-5xl font-bold leading-tight">
                                ${config.text.map((text) => {
                                    switch (text.type) {
                                        case 'default':
                                            return `<span>${text.value}${' '}</span>`
                                        case 'primary':
                                            return `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                                        case 'secondary':
                                            return `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                                    }
                                }).join('')}
                            </h1>
                            <h3 class="mb-10 text-2xl text-zinc-500">
                                ${config.description}
                            </h3>
                            <div class="grid w-[400px] grid-flow-row grid-cols-2 gap-4">
                                <a
                                    data-color="${colorsConfig[config.color].button}"
                                    data-type="solid"
                                    data-size="large"
                                    class="button"
                                    href="${config.button.link}"
                                >
                                    <span class="font-medium">${config.button.title}</span>
                                </a>
                                <a
                                    data-color="${colorsConfig[config.color].github}"
                                    data-type="bordered"
                                    data-size="large"
                                    class="button"
                                    href="${config.github}"
                                >
                                    ${gitHub(colorsConfig[config.color].github)}
                                    <span class="font-medium">GitHub</span>
                                </a>
                            </div>
                        </div>
                        <div class="mx-8 my-16 grid grid-flow-row grid-cols-2 gap-4">
                            <div class="flex h-full w-full rotate-[-10deg] scale-100 flex-col items-center justify-center rounded-3xl bg-gradient-to-r ${colorsConfig[config.color].image} py-4">
                                <img
                                    alt="Main 1"
                                    src="${config.images[0]}"
                                    width="640"
                                    height="360"
                                />
                            </div>
                            <div class="flex h-full flex-col items-center justify-center"></div>
                            <div class="flex h-full flex-col items-center justify-center"></div>
                            <div class="flex h-full w-full rotate-[10deg] scale-90 flex-col items-center justify-center rounded-3xl bg-gradient-to-r ${colorsConfig[config.color].image} py-4 blur-sm">
                                <img
                                    alt="Main 2"
                                    src="${config.images[1]}"
                                    width="640"
                                    height="360"
                                />
                            </div>
                            <div class="flex h-full w-full rotate-[-10deg] scale-[0.8] flex-col items-center justify-center rounded-3xl bg-gradient-to-r ${colorsConfig[config.color].image} py-4 blur-md">
                                <img
                                    alt="Main 3"
                                    src="${config.images[2]}"
                                    width="640"
                                    height="360"
                                />
                            </div>
                            <div class="flex h-full flex-col items-center justify-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
}