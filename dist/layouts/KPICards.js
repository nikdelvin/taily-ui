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