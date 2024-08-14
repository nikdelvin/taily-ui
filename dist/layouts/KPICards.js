import { shape } from "../icons/shape"
import { getRandomInt } from "../utils"
import { colorsConfig } from "../config"

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
            <div class="flex flex-col h-full items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex flex-col max-w-[1440px] max-sm:max-w-[459px] max-md:max-w-[640px] max-lg:max-w-[759px] min-[1024px]:max-[1439px]:max-w-[1024px] h-full justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0 pt-6 max-sm:p-6 max-sm:pt-4 max-md:p-8 max-md:pt-6">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl max-sm:text-5xl min-[1024px]:max-[1439px]:text-[4rem] max-md:text-[4rem] font-bold leading-tight text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 max-sm:p-6 max-sm:py-10 max-md:p-8 max-md:py-12 min-[1024px]:max-[1439px]:py-12">
                        <div class="grid grid-flow-row grid-cols-2 gap-10 min-[1024px]:max-[1439px]:gap-6 max-sm:gap-4 max-md:gap-6 lg:grid-cols-4">
                            ${config.cards.map((card, index) => {
                                return `
                                    <div
                                        ${config.shadow != null ? 'data-shadow' : ''}
                                        ${(config.color !== 'ghost' && (!(index % 4 > 1) ? config.color !== 'success' : config.color !== 'primary')) ? 'data-reverse' : ''}
                                        data-color="${!(index % 4 > 1) ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                        class="card aspect-square min-[1024px]:max-[1439px]:!min-w-[200px] min-[1024px]:max-[1439px]:!min-h-[200px]"
                                    >
                                        <h1 class="bg-gradient-to-r ${!(index % 4 > 1) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-8xl max-sm:text-5xl min-[1024px]:max-[1439px]:text-[4rem] max-md:text-[4rem] font-bold text-transparent">
                                            ${card.title}
                                        </h1>
                                        <h2 class="pb-4 text-center text-4xl min-[1024px]:max-[1439px]:text-2xl max-md:text-2xl max-sm:text-lg font-bold">
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
                    <div class="flex h-auto w-full flex-col items-center justify-start pb-16 max-sm:pb-4 max-md:pb-6 pt-0">
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