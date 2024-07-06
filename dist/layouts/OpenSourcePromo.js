import { gitHub } from "../icons/github"
import { shape } from "../icons/shape"
import { shuffle, getRandomInt } from "../utils"
import { colorsConfig } from "../config"

export function OpenSourcePromo(config) {
    const shapeIndexes = shuffle([
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) }
    ])

    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex flex-col h-full items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex flex-col max-w-[1440px] h-full justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16">
                        <div class="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
                            <div class="flex w-full flex-col">
                                <div class="mb-16 flex flex-row items-center gap-2">
                                    <div class="h-[96px] w-[96px]">
                                        <img
                                            alt="Main 1"
                                            src="${config.logo}"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent">
                                        ${config.title}
                                    </h1>
                                </div>
                                <h1 class="mb-10 text-5xl font-bold leading-tight">
                                    ${config.text.map((text) => {
                                        switch (text.type) {
                                            case 'default':
                                                return `<span>${text.value}${' '}</span>`
                                            case 'primary':
                                                return `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                                            case 'secondary':
                                                return `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                                        }
                                    }).join('')}
                                </h1>
                                <h3 class="mb-10 text-2xl text-zinc-500">
                                    ${config.description}
                                </h3>
                                <div class="grid w-[400px] grid-flow-row grid-cols-2 gap-4">
                                    <a
                                        ${config.shadow != null ? 'data-shadow' : ''}
                                        data-color="${colorsConfig[config.color].button}"
                                        data-type="solid"
                                        data-size="large"
                                        class="button"
                                        href="${config.button.link}"
                                        target="_${config.button.newPage != null ? 'blank' : 'self'}"
                                    >
                                        <span class="font-medium">${config.button.title}</span>
                                    </a>
                                    <a
                                        ${config.shadow != null ? 'data-shadow' : ''}
                                        data-color="${colorsConfig[config.color].github}"
                                        data-type="bordered"
                                        data-size="large"
                                        class="button"
                                        href="${config.github}"
                                        target="_blank"
                                    >
                                        ${gitHub(colorsConfig[config.color].github)}
                                        <span class="font-medium">GitHub</span>
                                    </a>
                                </div>
                            </div>
                            <div class="mx-8 mt-10 mb-6 grid grid-flow-row grid-cols-2 gap-4">
                                <div class="flex h-full w-full rotate-[-10deg] scale-100 flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image}">
                                    ${config.images != null && config.images[0] != null ? `<img
                                        alt="Main 1"
                                        src="${config.images[0]}"
                                        width="640"
                                        height="360"
                                    />` : shape(shapeIndexes[0].type, shapeIndexes[0].index)}
                                </div>
                                <div class="flex h-full flex-col items-center justify-center"></div>
                                <div class="flex h-full flex-col items-center justify-center"></div>
                                <div class="flex h-full w-full rotate-[10deg] scale-90 flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image} blur-sm">
                                    ${config.images != null && config.images[1] != null ? `<img
                                        alt="Main 2"
                                        src="${config.images[1]}"
                                        width="640"
                                        height="360"
                                    />` : shape(shapeIndexes[1].type, shapeIndexes[1].index)}
                                </div>
                                <div class="flex h-full w-full rotate-[20deg] scale-[0.8] flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image} blur-md">
                                    ${config.images != null && config.images[2] != null ? `<img
                                        alt="Main 3"
                                        src="${config.images[2]}"
                                        width="640"
                                        height="360"
                                    />` : shape(shapeIndexes[2].type, shapeIndexes[2].index)}
                                </div>
                                <div class="flex h-full flex-col items-center justify-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
}