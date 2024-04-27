import { shape } from "../icons/shape"

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function KPICards(config) {
    const shapeIndexes = [
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) },
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) },
        { type: 'type1', index: getRandomInt(3) },
        { type: 'type3', index: getRandomInt(3) }
    ]
    const colorsConfig = {
        default: {
            background: 'from-zinc-400/15 via-zinc-950 to-violet-200/15',
            title: 'from-zinc-400 to-violet-200',
            textPrimary: 'from-slate-400 via-gray-400 to-zinc-400',
            textSecondary: 'from-blue-200 via-indigo-200 to-violet-200',
            cardPrimary: 'default',
            cardSecondary: 'ghost',
            button: 'default'
        },
        primary: {
            background: 'from-blue-500/15 via-zinc-950 to-green-500/15',
            title: 'from-blue-500 to-green-500',
            textPrimary: 'from-cyan-500 via-sky-500 to-blue-500',
            textSecondary: 'from-teal-500 via-emerald-500 to-green-500',
            cardPrimary: 'primary',
            cardSecondary: 'success',
            button: 'primary'
        },
        secondary: {
            background: 'from-purple-500/15 via-zinc-950 to-blue-500/15',
            title: 'from-purple-500 to-blue-500',
            textPrimary: 'from-purple-500 via-violet-500 to-indigo-500',
            textSecondary: 'from-cyan-500 via-sky-500 to-blue-500',
            cardPrimary: 'secondary',
            cardSecondary: 'primary',
            button: 'secondary'
        },
        success: {
            background: 'from-green-500/15 via-zinc-950 to-orange-500/15',
            title: 'from-green-500 to-orange-500',
            textPrimary: 'from-teal-500 via-emerald-500 to-green-500',
            textSecondary: 'from-yellow-500 via-amber-500 to-orange-500',
            cardPrimary: 'success',
            cardSecondary: 'warning',
            button: 'success'
        },
        warning: {
            background: 'from-yellow-500/15 via-zinc-950 to-red-500/15',
            title: 'from-yellow-500 to-red-500',
            textPrimary: 'from-yellow-500 via-amber-500 to-orange-500',
            textSecondary: 'from-pink-500 via-rose-500 to-red-500',
            cardPrimary: 'warning',
            cardSecondary: 'error',
            button: 'warning'
        },
        error: {
            background: 'from-red-500/15 via-zinc-950 to-violet-500/15',
            title: 'from-red-500 to-violet-500',
            textPrimary: 'from-pink-500 via-rose-500 to-red-500',
            textSecondary: 'from-purple-500 via-violet-500 to-indigo-500',
            cardPrimary: 'error',
            cardSecondary: 'secondary',
            button: 'error'
        },
        ghost: {
            background: 'from-blue-200/15 via-zinc-950 to-zinc-400/15',
            title: 'from-blue-200 to-zinc-400',
            textPrimary: 'from-blue-200 via-indigo-200 to-violet-200',
            textSecondary: 'from-slate-400 via-gray-400 to-zinc-400',
            cardPrimary: 'ghost',
            cardSecondary: 'default',
            button: 'ghost'
        }
    }

    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex flex-col h-full items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex flex-col max-w-[1440px] h-full justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent opacity-50">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16">
                        <div class="grid grid-flow-row grid-cols-2 gap-10 lg:grid-cols-4">
                            ${config.cards.map((card, index) => {
                                return `
                                    <div
                                        data-shadow
                                        data-color="${!(index % 4 > 1) ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                        class="card aspect-square"
                                    >
                                        <h1 class="bg-gradient-to-r ${!(index % 4 > 1) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-3 pt-1 text-8xl font-bold text-transparent">
                                            ${card.title}
                                        </h1>
                                        <h2 class="pb-3 text-center text-4xl font-bold">
                                            ${card.description1}${' '}<span class="inline bg-gradient-to-r ${!(index % 4 > 1) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${card.description2}</span>
                                        </h2>
                                        <div class="absolute bottom-[-50px] ${index % 2 === 0 ? 'right' : 'left'}-[-175px] h-[180px] w-[360px]">
                                            ${shape(shapeIndexes[index*2].type, shapeIndexes[index*2].index)}
                                        </div>
                                        <div class="absolute ${index % 2 === 0 ? 'left' : 'right'}-[-150px] top-[-85px] h-[225px] w-[450px]">
                                            ${shape(shapeIndexes[index*2 + 1].type, shapeIndexes[index*2 + 1].index, true)}
                                        </div>
                                    </div>
                                `
                            }).join('')}
                        </div>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start pb-16 pt-0">
                        <a
                            data-color="${colorsConfig[config.color].button}"
                            data-shadow
                            data-type="bordered"
                            data-size="large"
                            class="button !w-[200px]"
                            href="${config.button.link}"
                        >
                            <span class="font-medium">${config.button.title}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `
}