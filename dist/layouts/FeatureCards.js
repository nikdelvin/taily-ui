import { shape } from "../icons/shape"
import { shuffle, getRandomInt } from "../utils"
import { colorsConfig } from "../config"

export function FeatureCards(config) {
    const shapeIndexes = shuffle([
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) }
    ])

    const firstCard = `
        <div
            ${config.shadow != null ? 'data-shadow' : ''}
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
                ${shape(shapeIndexes[2].type, shapeIndexes[2].index, 'sm')}
            </div>
            <div class="absolute bottom-[5px] right-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            ` : `
            <div class="absolute bottom-[-40px] left-[-170px] h-[225px] w-[450px]">
                ${shape(shapeIndexes[0].type, shapeIndexes[0].index, 'sm')}
            </div>
            <div class="absolute bottom-[5px] left-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            `}
            
        </div>
    `
    
    const secondCard = `
        <div
            ${config.shadow != null ? 'data-shadow' : ''}
            data-color="${config.reverse ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
            class="card !items-start !justify-start !px-10 !py-6"
        >
            ${config.featureOptions.map((option, index) => {
                return `
                    <div class="mt-4 flex items-start gap-4">
                        <div class="min-w-[48px] h-full flex items-start justify-start">
                            <h3 class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-end text-5xl font-bold text-transparent">
                                ${index+1}.
                            </h3>
                        </div>
                        ${index !== 1 ? `<p class="text-start text-[22px]/[30px] font-light text-zinc-50">${option}</p>` : `<p class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-start text-[22px]/[30px] font-light text-transparent">${option}</p>`}
                    </div>
                `
            }).join('')}
            ${config.reverse ? `
            <div class="absolute bottom-[-40px] left-[-170px] h-[225px] w-[450px]">
                ${shape(shapeIndexes[0].type, shapeIndexes[0].index, 'sm')}
            </div>
            <div class="absolute bottom-[5px] left-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            ` : `
            <div class="absolute top-[-80px] right-[-170px] h-[225px] w-[450px]">
                ${shape(shapeIndexes[2].type, shapeIndexes[2].index, 'sm')}
            </div>
            <div class="absolute bottom-[5px] right-[295px] h-[360px] w-[720px]">
                ${shape(shapeIndexes[1].type, shapeIndexes[1].index)}
            </div>
            `}
        </div>
    `

    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex flex-col h-full items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex flex-col max-w-[1440px] h-full justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16">
                        <div class="grid w-full grid-flow-row grid-cols-1 gap-10 lg:grid-cols-2">
                            ${config.reverse ? [secondCard, firstCard].join('') : [firstCard, secondCard].join('')}
                        </div>
                    </div>
                    <div class="flex h-auto w-full flex-col ${config.reverse ? 'items-end' : 'items-start'} justify-start pb-16 pt-0 px-16">
                        <a
                            ${config.shadow != null ? 'data-shadow' : ''}
                            data-color="${config.reverse ? colorsConfig[config.color].cardSecondary : colorsConfig[config.color].button}"
                            data-type="bordered"
                            data-size="medium"
                            class="button !w-[150px]"
                            href="${config.button.link}"
                            target="_${config.button.newPage != null ? 'blank' : 'self'}"
                        >
                            <span class="font-medium">${config.button.title}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `
}