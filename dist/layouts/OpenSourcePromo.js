import { gitHub } from "../icons/github"
import { shape } from "../icons/shape"

function shuffle(array) { 
    return array.sort(() => Math.random() - 0.5)
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function OpenSourcePromo(config) {
    const shapeIndexes = shuffle([
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) }
    ])
    const colorsConfig = {
        default: {
            background: 'from-slate-500/25 via-zinc-950 to-violet-200/25',
            title: 'from-slate-500 to-violet-200',
            textPrimary: 'from-slate-500 via-gray-500 to-zinc-500',
            textSecondary: 'from-blue-200 via-indigo-200 to-violet-200',
            button: 'default',
            github: 'ghost',
            image: 'from-slate-500 to-violet-200'
        },
        primary: {
            background: 'from-cyan-500/25 via-zinc-950 to-green-500/25',
            title: 'from-cyan-500 to-green-500',
            textPrimary: 'from-cyan-500 via-sky-500 to-blue-500',
            textSecondary: 'from-teal-500 via-emerald-500 to-green-500',
            button: 'primary',
            github: 'success',
            image: 'from-cyan-500 to-green-500'
        },
        secondary: {
            background: 'from-purple-500/25 via-zinc-950 to-blue-500/25',
            title: 'from-purple-500 to-blue-500',
            textPrimary: 'from-purple-500 via-violet-500 to-indigo-500',
            textSecondary: 'from-cyan-500 via-sky-500 to-blue-500',
            button: 'secondary',
            github: 'primary',
            image: 'from-purple-500 to-blue-500'
        },
        success: {
            background: 'from-teal-500/25 via-zinc-950 to-orange-500/25',
            title: 'from-teal-500 to-orange-500',
            textPrimary: 'from-teal-500 via-emerald-500 to-green-500',
            textSecondary: 'from-yellow-500 via-amber-500 to-orange-500',
            button: 'success',
            github: 'warning',
            image: 'from-teal-500 to-orange-500'
        },
        warning: {
            background: 'from-yellow-500/25 via-zinc-950 to-red-500/25',
            title: 'from-yellow-500 to-red-500',
            textPrimary: 'from-yellow-500 via-amber-500 to-orange-500',
            textSecondary: 'from-pink-500 via-rose-500 to-red-500',
            button: 'warning',
            github: 'error',
            image: 'from-yellow-500 to-red-500'
        },
        error: {
            background: 'from-pink-500/25 via-zinc-950 to-indigo-500/25',
            title: 'from-pink-500 to-indigo-500',
            textPrimary: 'from-pink-500 via-rose-500 to-red-500',
            textSecondary: 'from-purple-500 via-violet-500 to-indigo-500',
            button: 'error',
            github: 'secondary',
            image: 'from-pink-500 to-indigo-500'
        },
        ghost: {
            background: 'from-blue-200/25 via-zinc-950 to-zinc-500/25',
            title: 'from-blue-200 to-zinc-500',
            textPrimary: 'from-blue-200 via-indigo-200 to-violet-200',
            textSecondary: 'from-slate-500 via-gray-500 to-zinc-500',
            button: 'ghost',
            github: 'default',
            image: 'from-blue-200 to-zinc-500'
        }
    }

    return `
        <div class="flex h-full w-screen flex-col overflow-y-scroll">
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
                            <div class="flex h-full w-full rotate-[-10deg] scale-100 flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image}">
                                ${config.images != null && config.images[0] != null ? `<img
                                    alt="Main 1"
                                    src="${config.images[0]}"
                                    width="640"
                                    height="360"
                                />` : shape(shapeIndexes[0].type, shapeIndexes[0].index)}
                            </div>
                            <div class="flex h-full flex-col items-center justify-center"></div>
                            <div class="flex h-full flex-col items-center justify-center"></div>
                            <div class="flex h-full w-full rotate-[10deg] scale-90 flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image} blur-sm">
                                ${config.images != null && config.images[1] != null ? `<img
                                    alt="Main 2"
                                    src="${config.images[1]}"
                                    width="640"
                                    height="360"
                                />` : shape(shapeIndexes[1].type, shapeIndexes[1].index)}
                            </div>
                            <div class="flex h-full w-full rotate-[-10deg] scale-[0.8] flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image} blur-md">
                                ${config.images != null && config.images[2] != null ? `<img
                                    alt="Main 3"
                                    src="${config.images[2]}"
                                    width="640"
                                    height="360"
                                />` : shape(shapeIndexes[2].type, shapeIndexes[2].index)}
                            </div>
                            <div class="flex h-full flex-col items-center justify-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
}