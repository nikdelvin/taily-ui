import { shape } from "../icons/shape"
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
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent opacity-50">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16">
                        <div class="relative grid grid-flow-row grid-cols-3 gap-6 lg:grid-cols-5">
                            ${config.skills.map((text, index) => (
                                `<div
                                    class="card z-[2] !min-h-[60px] !min-w-[200px] !flex-row !py-3"
                                    ${config.shadow != null ? 'data-shadow' : ''}
                                    data-color="${[0,1,2,5,6,7,10,11,12,15,16,17,20,21,22].some((el) => index === el) ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                >
                                    <img
                                        height="40px"
                                        width="40px"
                                        src="${text.icon}"
                                        class="me-3"
                                    />
                                    ${text.title}
                                </div>`
                                )).join('')
                            }
                            ${config.music.map((link, index) => (
                                `<div
                                    class="card z-[2] !min-h-[156px] !min-w-[200px] !p-[2px]"
                                    ${config.shadow != null ? 'data-shadow' : ''}
                                    data-color="${index < 3 ? colorsConfig[config.color].cardPrimary : colorsConfig[config.color].cardSecondary}"
                                >
                                    <div class="absolute left-[2px] top-[2px] pointer-events-none z-[1] rounded-[22px] h-[152px] w-[calc(100%-4px)] bg-gradient-to-r ${index < 3 ? colorsConfig[config.color].musicCardBGPrimary : colorsConfig[config.color].musicCardBGSecondary} opacity-25"></div>
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
                            <div class="absolute left-[-70px] top-[-65px] h-[360px] w-[640px]">
                                ${shape(shapeIndexes()[0].type, shapeIndexes()[0].index, undefined, '60')}
                            </div>
                            <div class="absolute bottom-[-55px] right-[-60px] h-[360px] w-[640px]">
                                ${shape(shapeIndexes()[1].type, shapeIndexes()[1].index, undefined, '60')}
                            </div>
                            <div class="absolute right-[320px] top-[-40px] h-[225px] w-[400px]">
                                ${shape(shapeIndexes()[2].type, shapeIndexes()[2].index, 'md', '60')}
                            </div>
                            <div class="absolute bottom-[60px] left-[325px] h-[225px] w-[400px]">
                                ${shape(shapeIndexes()[3].type, shapeIndexes()[3].index, 'md', '60')}
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