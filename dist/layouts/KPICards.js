import { shape } from "../icons/shape"

function shuffle(array) { 
    return array.sort(() => Math.random() - 0.5)
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function KPICards(config) {
    const shapeIndexes = shuffle([
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) },
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) },
        { type: 'type1', index: getRandomInt(3) },
        { type: 'type3', index: getRandomInt(3) }
    ])
    const colorsConfig = {
        default: {
            background: 'from-zinc-500/25 via-zinc-950 to-violet-200/25',
            title: 'from-zinc-500 to-violet-200',
            textPrimary: 'from-slate-400 via-gray-400 to-zinc-400',
            textSecondary: 'from-blue-200 via-indigo-200 to-violet-200',
            cardPrimary: 'default',
            cardSecondary: 'ghost'
        },
        primary: {
            background: 'from-blue-500/25 via-zinc-950 to-green-500/25',
            title: 'from-blue-500 to-green-500',
            textPrimary: 'from-cyan-500 via-sky-500 to-blue-500',
            textSecondary: 'from-teal-500 via-emerald-500 to-green-500',
            cardPrimary: 'primary',
            cardSecondary: 'success'
        },
        secondary: {
            background: 'from-purple-500/25 via-zinc-950 to-blue-500/25',
            title: 'from-purple-500 to-blue-500',
            textPrimary: 'from-purple-500 via-violet-500 to-indigo-500',
            textSecondary: 'from-cyan-500 via-sky-500 to-blue-500',
            cardPrimary: 'secondary',
            cardSecondary: 'primary'
        },
        success: {
            background: 'from-green-500/25 via-zinc-950 to-orange-500/25',
            title: 'from-green-500 to-orange-500',
            textPrimary: 'from-teal-500 via-emerald-500 to-green-500',
            textSecondary: 'from-yellow-500 via-amber-500 to-orange-500',
            cardPrimary: 'success',
            cardSecondary: 'warning'
        },
        warning: {
            background: 'from-yellow-500/25 via-zinc-950 to-red-500/25',
            title: 'from-yellow-500 to-red-500',
            textPrimary: 'from-yellow-500 via-amber-500 to-orange-500',
            textSecondary: 'from-pink-500 via-rose-500 to-red-500',
            cardPrimary: 'warning',
            cardSecondary: 'error'
        },
        error: {
            background: 'from-red-500/25 via-zinc-950 to-violet-500/25',
            title: 'from-red-500 to-violet-500',
            textPrimary: 'from-pink-500 via-rose-500 to-red-500',
            textSecondary: 'from-purple-500 via-violet-500 to-indigo-500',
            cardPrimary: 'error',
            cardSecondary: 'secondary'
        },
        ghost: {
            background: 'from-blue-200/25 via-zinc-950 to-zinc-500/25',
            title: 'from-blue-200 to-zinc-500',
            textPrimary: 'from-blue-200 via-indigo-200 to-violet-200',
            textSecondary: 'from-slate-400 via-gray-400 to-zinc-400',
            cardPrimary: 'ghost',
            cardSecondary: 'default'
        }
    }

    return `
        <div class="flex h-full w-screen flex-col">
            <div class="h-full bg-gradient-to-br ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex h-full w-full flex-col items-center justify-start p-16">
                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent">
                        ${config.title}
                    </h1>
                </div>
                <div class="flex h-full w-full flex-col items-center justify-start gap-4 p-16">
                    <div class="grid grid-flow-row grid-cols-2 gap-16 lg:grid-cols-4">
                        ${config.cards.map((card, index) => {
                            return `
                                <div
                                    data-shadow
                                    data-color="${index % 2 === 0 ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                    class="card"
                                >
                                    <h1 class="bg-gradient-to-r ${index % 2 === 0 ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-3 pt-1 text-8xl font-bold text-transparent">
                                        ${card.title}
                                    </h1>
                                    <h2 class="pb-3 text-center text-4xl font-bold">
                                        ${card.description1}${' '}<span class="inline bg-gradient-to-r ${index % 2 === 0 ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${card.description2}</span>
                                    </h2>
                                    <div class="absolute bottom-[-40px] right-[-115px] h-[180px] w-[360px]">
                                        ${shape(shapeIndexes[index*2].type, shapeIndexes[index*2].index)}
                                    </div>
                                    <div class="absolute left-[-50px] top-0 h-[135px] w-[270px]">
                                        ${shape(shapeIndexes[index*2 + 1].type, shapeIndexes[index*2 + 1].index)}
                                    </div>
                                </div>
                            `
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
        `
}