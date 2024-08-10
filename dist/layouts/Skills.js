import { shape } from "../icons/shape"
import { icon } from "../icons/icon"
import { getRandomInt } from "../utils"
import { colorsConfig } from "../config"

export function Skills(config) {
    const shapeIndexes = () => [
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) },
        { type: 'type1', index: getRandomInt(3) }
    ]
    
    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex h-full flex-col items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex h-full w-full max-w-[1440px] flex-col justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0 pt-6">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pt-12">
                        ${config.rows.map((row, rowIndex) => (
                            `<div class="flex h-auto w-full flex-col items-${rowIndex % 2 === 0 ? "start" : "end"} justify-start">
                                <h1 class="bg-gradient-to-r ${rowIndex % 2 === 0 ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-10 text-start text-4xl font-bold text-transparent">${row.title}</h1>
                                <div class="relative w-full grid grid-flow-row gap-6 grid-cols-[repeat(15,_minmax(0,_1fr))] pb-16">
                                    ${row.skills.map((text, index) => (
                                        `<div
                                            class="group card z-[2] !min-h-[65px] !min-w-[65px] !flex-row !p-2 ${index % 15 === 7 ? colorsConfig[config.color].cardBGMiddle : ''}"
                                            ${config.shadow != null ? 'data-shadow' : ''}
                                            data-color="${index % 15 < 8 ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                            data-hint-group="skill"
                                            data-hint-text="${text.title}"
                                        >
                                            <div class="h-[32px] w-[32px] min-h-[32px] min-w-[32px] mx-auto my-auto">
                                                ${icon(config.color, (index % 15 < 7 ? 'primary' : (index % 15 === 7 ? 'middle' : 'secondary')), text.icon)}
                                            </div>
                                        </div>`
                                        )).join('')
                                    }
                                    <div class="absolute ${rowIndex % 2 === 0 ? 'left-[-70px]' : 'right-[-70px]'} top-[-165px] h-[360px] w-[640px]">
                                        ${shape(shapeIndexes()[rowIndex % 4].type, shapeIndexes()[rowIndex % 4].index, undefined, '60')}
                                    </div>
                                </div>
                            </div>`
                        )).join('')}
                        <div class="flex h-auto w-full flex-col items-${config.rows.length % 2 === 0 ? "start" : "end"} justify-start">
                            <h1 class="bg-gradient-to-r ${config.rows.length % 2 === 0 ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-10 text-start text-4xl font-bold text-transparent">${config.musicTitle}</h1>
                            <div class="relative w-full grid grid-flow-row grid-cols-3 gap-6 lg:grid-cols-5">
                                ${config.music.map((link, index) => (
                                    `<div
                                        class="card z-[2] !min-h-[156px] !min-w-[200px] !p-[2px] ${index % 5 === 2 ? colorsConfig[config.color].cardBGMiddle : ''}"
                                        ${config.shadow != null ? 'data-shadow' : ''}
                                        data-color="${index % 5 < 3 ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                    >
                                        <div class="absolute left-[2px] top-[2px] pointer-events-none z-[1] rounded-[22px] h-[152px] w-[calc(100%-4px)] bg-gradient-to-r ${index % 5 === 2 ? colorsConfig[config.color].cardBGMiddle : (index % 5 < 3 ? colorsConfig[config.color].musicCardBGPrimary : colorsConfig[config.color].musicCardBGSecondary)} opacity-25"></div>
                                        <iframe
                                            class="grayscale"
                                            style="border-radius:22px"
                                            src="${link}?utm_source=generator&theme=0"
                                            width="100%"
                                            height="152"
                                            scrolling="no"
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                        ></iframe>
                                    </div>`
                                    )).join('')
                                }
                                <div class="absolute ${config.rows.length % 2 === 0 ? 'left-[-70px]' : 'right-[-70px]'} top-[-165px] h-[360px] w-[640px]">
                                    ${shape(shapeIndexes()[config.rows.length % 4].type, shapeIndexes()[config.rows.length % 4].index, undefined, '60')}
                                </div>
                            </div>
                        </div>
                        <div class="flex h-auto w-full flex-col items-center justify-start pb-0 pt-16">
                            <a
                                ${config.shadow != null ? 'data-shadow' : ''}
                                data-color="${colorsConfig[config.color].button}"
                                data-type="bordered"
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
        </div>
    `
}