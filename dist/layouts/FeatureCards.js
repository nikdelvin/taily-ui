import { shape } from "../icons/shape.js"
import { shuffle, getRandomInt } from "../utils.js"
import { colorsConfig } from "../config.js"

export function FeatureCards(config) {
    const shapeIndexes = shuffle([
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) }
    ])
    const isGreenFirst = config.reverse ? (config.color === 'primary') : (config.color === 'success')
    const isGreenSecond = config.reverse ? (config.color === 'success') : (config.color === 'primary')
    const isGreenButton = config.reverse ? (config.color === 'primary') : (config.color === 'success')

    const firstCard = `
        <div
            ${config.shadow != null ? 'data-shadow' : ''}
            ${(config.color !== 'ghost' && !isGreenFirst) ? 'data-reverse' : ''}
            data-color="${config.reverse ? colorsConfig[config.color].cardSecondary : colorsConfig[config.color].cardPrimary}"
            class="card ${config.reverse ? '!items-start' : '!items-end'} !justify-start !max-h-[322px] min-[1024px]:max-[1439px]:!max-h-[360px] max-sm:!max-h-[200px] max-md:!max-h-[247px] !px-10 max-md:!px-8 max-md:!py-6 max-sm:!px-6 max-sm:!py-4 min-[1024px]:max-[1439px]:!px-6 min-[1024px]:max-[1439px]:!py-4 max-sm:!min-h-[200px] max-md:!min-h-[200px]"
        >
            <h1 class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textSecondary : colorsConfig[config.color].textPrimary} bg-clip-text pb-12 max-sm:pb-4 max-md:pb-8 min-[1024px]:max-[1439px]:pb-8 ${config.reverse ? 'text-start' : 'text-end'} text-8xl text-nowrap whitespace-nowrap max-sm:text-[3.25rem] min-[1024px]:max-[1439px]:text-[4rem] min-[1024px]:max-[1439px]:leading-[1.2] max-md:text-[4rem] max-md:leading-[1.35] font-bold text-transparent">
                ${config.featureTitle}
            </h1>
            <h3 class="${config.reverse ? 'text-start' : 'text-end'} text-5xl min-[1024px]:max-[1439px]:text-[2rem] max-md:text-[2rem] max-sm:text-2xl font-bold pb-4">
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
            ${(config.color !== 'ghost' && !isGreenSecond) ? 'data-reverse' : ''}
            data-color="${config.reverse ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
            class="card !max-h-[322px] min-[1024px]:max-[1439px]:!max-h-[360px] max-sm:!max-h-[408px] max-sm:!min-h-fit max-md:!max-h-[308px] max-lg:order-last !items-start !justify-start !px-10 !py-6 max-md:!px-8 max-md:!py-6 max-sm:!px-6 max-sm:!py-4 min-[1024px]:max-[1439px]:!px-6 min-[1024px]:max-[1439px]:!py-4"
        >
            ${config.featureOptions.map((option, index) => {
                return `
                    <div class="mt-4 ${index === 0 ? 'min-[1024px]:max-[1439px]:mt-2' : ''} ${index === (config.featureOptions.length - 1) ? 'mb-4 min-[1024px]:max-[1439px]:mb-2' : ''} flex items-start gap-4">
                        <div class="min-w-[48px] min-[1024px]:max-[1439px]:min-w-[24px] max-md:min-w-[24px] max-sm:min-w-[18px] h-full flex items-start justify-start">
                            <h3 class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-end text-5xl min-[1024px]:max-[1439px]:leading-[1.15] min-[1024px]:max-[1439px]:text-[2rem] max-md:leading-[1.15] max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent">
                                ${index+1}.
                            </h3>
                        </div>
                        ${index !== 1 ? `<p class="text-start text-[22px]/[30px] max-md:text-lg max-sm:text-base min-[1024px]:max-[1439px]:text-lg font-light text-zinc-50">${option}</p>` : `<p class="bg-gradient-to-r ${config.reverse ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-start text-[22px]/[30px] max-md:text-lg max-sm:text-base min-[1024px]:max-[1439px]:text-lg font-light text-transparent">${option}</p>`}
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
            <div class="flex flex-col h-full items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50 py-6">
                <div class="flex flex-col max-w-[1440px] max-sm:max-w-[459px] max-md:max-w-[640px] max-lg:max-w-[759px] min-[1024px]:max-[1439px]:max-w-[1024px] h-full justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0 pt-6 max-sm:px-6 max-sm:pt-4 max-md:px-8 max-md:pt-6">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl max-sm:text-[2rem] text-nowrap whitespace-nowrap min-[1024px]:max-[1439px]:text-[4rem] max-md:text-5xl max-lg:text-[3.5rem] font-bold max-md:leading-[1.15] leading-tight text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 max-sm:p-6 max-sm:py-10 max-md:p-8 max-md:py-12 min-[1024px]:max-[1439px]:py-12">
                        <div class="grid w-full grid-flow-row grid-cols-1 gap-10 max-sm:gap-6 max-md:gap-8 lg:grid-cols-2 content-start">
                            ${config.reverse ? [secondCard, firstCard].join('') : [firstCard, secondCard].join('')}
                        </div>
                    </div>
                    <div class="flex h-auto w-full flex-col ${config.reverse ? 'items-end' : 'items-start'} justify-start pb-16 max-sm:pb-10 max-sm:px-6 max-md:pb-12 max-md:px-8 pt-0 px-16">
                        <a
                            ${config.shadow != null ? 'data-shadow' : ''}
                            ${(config.color !== 'ghost' && !isGreenButton) ? 'data-reverse' : ''}
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