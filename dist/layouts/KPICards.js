import { shape } from "../icons/shape.js"
import { getRandomInt } from "../utils.js"
import { colorsConfig } from "../config.js"

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

    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex flex-col h-full items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50 py-6">
                <div class="flex flex-col w-full max-w-[1440px] max-sm:max-w-[459px] max-md:max-w-[640px] max-lg:max-w-[759px] min-[1024px]:max-[1439px]:max-w-[1024px] h-full justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0 pt-6 max-sm:px-6 max-sm:pt-4 max-md:px-8 max-md:pt-6">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl max-sm:text-[2rem] text-nowrap whitespace-nowrap min-[1024px]:max-[1439px]:text-[4rem] max-md:text-5xl max-lg:text-[3.5rem] font-bold leading-tight max-md:leading-[1.15] text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 max-sm:p-6 max-sm:py-10 max-md:p-8 max-md:py-12 min-[1024px]:max-[1439px]:py-12">
                        <div class="grid grid-flow-row w-full grid-cols-2 gap-10 max-sm:gap-6 max-md:gap-8 max-sm:grid-cols-1 lg:grid-cols-4 content-start">
                            ${config.cards.map((card, index) => {
                                return `
                                    <div
                                        ${config.shadow != null ? 'data-shadow' : ''}
                                        ${(config.color !== 'ghost' && (!(index % 4 > 1) ? config.color !== 'success' : config.color !== 'primary')) ? 'data-reverse' : ''}
                                        data-color="${!(index % 4 > 1) ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                        class="card max-sm:mx-auto aspect-square min-[1024px]:max-[1439px]:!min-w-[200px] min-[1024px]:max-[1439px]:!min-h-[200px] max-sm:!w-[250px] max-sm:!h-[250px]"
                                    >
                                        <h1 class="bg-gradient-to-r ${!(index % 4 > 1) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-8xl max-sm:text-[4rem] min-[1024px]:max-[1439px]:text-[3.5rem] max-md:text-[4rem] font-bold text-transparent">
                                            ${card.title}
                                        </h1>
                                        <h2 class="pb-4 min-[1024px]:max-[1439px]:pb-2 text-center text-4xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-[2rem] font-bold">
                                            ${card.description1}${' '}<span class="inline bg-gradient-to-r ${!(index % 4 > 1) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${card.description2}</span>
                                        </h2>
                                        <div class="absolute bottom-[-30px] ${index % 2 === 0 ? 'right' : 'left'}-[-165px] h-[225px] w-[450px]">
                                            ${shape(shapeIndexes[index*2].type, shapeIndexes[index*2].index)}
                                        </div>
                                        <div class="absolute ${index % 2 === 0 ? 'left' : 'right'}-[-140px] top-[-70px] h-[180px] w-[360px]">
                                            ${shape(shapeIndexes[index*2 + 1].type, shapeIndexes[index*2 + 1].index, 'sm')}
                                        </div>
                                    </div>
                                `
                            }).join('')}
                        </div>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start pb-16 max-sm:pb-10 max-md:pb-12 pt-0">
                        <a
                            ${config.shadow != null ? 'data-shadow' : ''}
                            ${(config.color !== 'ghost' && config.color !== 'primary') ? 'data-reverse' : ''}
                            data-color="${colorsConfig[config.color].github}"
                            data-type="solid"
                            data-size="large"
                            class="button !w-[200px]"
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