import { shape } from "../icons/shape"

function shuffle(array) { 
    return array.sort(() => Math.random() - 0.5)
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function FeatureCards(config) {
    const shapeIndexes = shuffle([
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) }
    ])
    const colorsConfig = {
        default: {
            background: 'from-zinc-500/25 via-zinc-950 to-violet-200/25',
            title: 'from-zinc-500 to-violet-200',
            textPrimary: 'from-slate-400 via-gray-400 to-zinc-400',
            textSecondary: 'from-blue-200 via-indigo-200 to-violet-200',
            cardPrimary: 'default',
            cardSecondary: 'ghost',
            button: 'default'
        },
        primary: {
            background: 'from-blue-500/25 via-zinc-950 to-green-500/25',
            title: 'from-blue-500 to-green-500',
            textPrimary: 'from-cyan-500 via-sky-500 to-blue-500',
            textSecondary: 'from-teal-500 via-emerald-500 to-green-500',
            cardPrimary: 'primary',
            cardSecondary: 'success',
            button: 'primary'
        },
        secondary: {
            background: 'from-purple-500/25 via-zinc-950 to-blue-500/25',
            title: 'from-purple-500 to-blue-500',
            textPrimary: 'from-purple-500 via-violet-500 to-indigo-500',
            textSecondary: 'from-cyan-500 via-sky-500 to-blue-500',
            cardPrimary: 'secondary',
            cardSecondary: 'primary',
            button: 'secondary'
        },
        success: {
            background: 'from-green-500/25 via-zinc-950 to-orange-500/25',
            title: 'from-green-500 to-orange-500',
            textPrimary: 'from-teal-500 via-emerald-500 to-green-500',
            textSecondary: 'from-yellow-500 via-amber-500 to-orange-500',
            cardPrimary: 'success',
            cardSecondary: 'warning',
            button: 'success'
        },
        warning: {
            background: 'from-yellow-500/25 via-zinc-950 to-red-500/25',
            title: 'from-yellow-500 to-red-500',
            textPrimary: 'from-yellow-500 via-amber-500 to-orange-500',
            textSecondary: 'from-pink-500 via-rose-500 to-red-500',
            cardPrimary: 'warning',
            cardSecondary: 'error',
            button: 'warning'
        },
        error: {
            background: 'from-red-500/25 via-zinc-950 to-violet-500/25',
            title: 'from-red-500 to-violet-500',
            textPrimary: 'from-pink-500 via-rose-500 to-red-500',
            textSecondary: 'from-purple-500 via-violet-500 to-indigo-500',
            cardPrimary: 'error',
            cardSecondary: 'secondary',
            button: 'error'
        },
        ghost: {
            background: 'from-blue-200/25 via-zinc-950 to-zinc-500/25',
            title: 'from-blue-200 to-zinc-500',
            textPrimary: 'from-blue-200 via-indigo-200 to-violet-200',
            textSecondary: 'from-slate-400 via-gray-400 to-zinc-400',
            cardPrimary: 'ghost',
            cardSecondary: 'default',
            button: 'ghost'
        }
    }

    const firstCard = `
        <div
            data-shadow
            data-color="${config.reverse ? colorsConfig[config.color].cardSecondary : colorsConfig[config.color].cardPrimary}"
            class="card ${config.reverse ? '!items-start' : '!items-end'} !justify-start !px-10"
        >
            <h1 class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textSecondary : colorsConfig[config.color].textPrimary} bg-clip-text pb-12 ${config.reverse ? 'text-start' : 'text-end'} text-8xl font-bold text-transparent">
                ${config.featureTitle}
            </h1>
            <h3 class="${config.reverse ? 'text-start' : 'text-end'} text-5xl font-bold pb-3">
                ${config.featureDescription.map((text) => {
                    switch (text.type) {
                        case 'default':
                            return `<span>${text.value}${' '}</span>`
                        case 'primary':
                            return `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                        case 'secondary':
                            return `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                    }
                }).join('')}
            </h3>
            ${config.reverse ? `
            <div class="absolute top-[-80px] right-[-170px] h-[225px] w-[450px]">
                ${shape(shapeIndexes[2].type, shapeIndexes[2].index, true)}
            </div>
            <div class="absolute bottom-[5px] right-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            ` : `
            <div class="absolute bottom-[-40px] left-[-170px] h-[225px] w-[450px]">
                ${shape(shapeIndexes[0].type, shapeIndexes[0].index, true)}
            </div>
            <div class="absolute bottom-[5px] left-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            `}
            
        </div>
    `
    
    const secondCard = `
        <div
            data-shadow
            data-color="${config.reverse ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
            class="card !items-start !justify-start !px-10 !py-6"
        >
            ${config.featureOptions.map((option, index) => {
                return `
                    <div class="mt-4 flex items-start gap-4">
                        <h3 class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-end text-5xl font-bold text-transparent">
                            ${index+1}.
                        </h3>
                        ${index !== 1 ? `<p class="text-start text-2xl font-light text-zinc-50">${option}</p>` : `<p class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-start text-2xl font-light text-transparent">${option}</p>`}
                    </div>
                `
            }).join('')}
            ${config.reverse ? `
            <div class="absolute bottom-[-40px] left-[-170px] h-[225px] w-[450px]">
                ${shape(shapeIndexes[0].type, shapeIndexes[0].index, true)}
            </div>
            <div class="absolute bottom-[5px] left-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            ` : `
            <div class="absolute top-[-80px] right-[-170px] h-[225px] w-[450px]">
                ${shape(shapeIndexes[2].type, shapeIndexes[2].index, true)}
            </div>
            <div class="absolute bottom-[5px] right-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            `}
        </div>
    `

    return `
        <div class="flex h-full w-screen flex-col">
            <div class="h-full bg-gradient-to-tr ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex h-full w-full flex-col items-center justify-start p-16">
                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent">
                        ${config.title}
                    </h1>
                </div>
                <div class="flex h-full w-full flex-col items-center justify-start gap-4 p-16">
                    <div class="grid w-full grid-flow-row grid-cols-1 gap-16 lg:grid-cols-2">
                        ${config.reverse ? [secondCard, firstCard].join('') : [firstCard, secondCard].join('')}
                    </div>
                </div>
                <div class="flex h-full w-full flex-col items-start justify-start pb-16 px-16">
                    <a
                        data-color="${colorsConfig[config.color].button}"
                        data-shadow
                        data-type="bordered"
                        data-size="medium"
                        class="button !w-[150px]"
                        href="${config.button.link}"
                    >
                        <span class="font-medium">${config.button.title}</span>
                    </a>
                </div>
            </div>
        </div>
        `
}