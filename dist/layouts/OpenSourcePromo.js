import { icon } from "../icons/icon"
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
                <div class="flex flex-col max-w-[1440px] max-sm:max-w-[459px] max-md:max-w-[640px] max-lg:max-w-[759px] min-[1024px]:max-[1439px]:max-w-[1024px] h-full justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 max-sm:p-6 max-sm:py-10 max-md:p-8 max-md:py-12">
                        <div class="grid grid-flow-row grid-cols-1 gap-10 max-sm:gap-8 lg:grid-cols-2 min-[1024px]:max-[1439px]:mb-[-40px]">
                            <div class="flex w-full flex-col mb-6 min-[1024px]:max-[1439px]:mb-0">
                                <div class="mb-16 max-md:mb-12 max-sm:mb-8 min-[1024px]:max-[1439px]:mb-12 flex flex-row items-center gap-4">
                                    <div class="h-[96px] w-[96px] min-h-[96px] min-w-[96px] max-sm:h-[48px] max-sm:w-[48px] max-sm:min-h-[48px] max-sm:min-w-[48px] max-md:h-[64px] max-md:w-[64px] max-md:min-h-[64px] max-md:min-w-[64px] min-[1024px]:max-[1439px]:h-[64px] min-[1024px]:max-[1439px]:w-[64px] min-[1024px]:max-[1439px]:min-h-[64px] min-[1024px]:max-[1439px]:min-w-[64px]">
                                        ${icon(config.color, 'main', config.logo)}
                                    </div>
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl max-sm:text-5xl min-[1024px]:max-[1439px]:text-[4rem] max-md:text-[4rem] font-bold leading-tight text-transparent">
                                        ${config.title}
                                    </h1>
                                </div>
                                <h1 class="mb-10 max-md:mb-8 max-sm:mb-6 min-[1024px]:max-[1439px]:mb-8 text-5xl max-md:text-[2rem] max-sm:text-2xl min-[1024px]:max-[1439px]:text-[2rem] font-bold leading-tight">
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
                                <h3 class="mb-10 max-md:mb-8 max-sm:mb-6 min-[1024px]:max-[1439px]:mb-8 text-2xl max-md:text-lg max-sm:text-base min-[1024px]:max-[1439px]:text-lg bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-transparent">
                                    ${config.description}
                                </h3>
                                <div class="grid w-[400px] max-sm:w-full grid-flow-row grid-cols-2 max-sm:grid-cols-1 gap-4">
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
                                        <div class="h-[24px] w-[24px] min-h-[24px] min-w-[24px]">
                                            ${icon(colorsConfig[config.color].github, 'primary', 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12')}
                                        </div>
                                        <span class="font-medium">GitHub</span>
                                    </a>
                                </div>
                            </div>
                            <div class="mt-10 max-lg:mt-10 max-md:mt-6 max-sm:mt-0 max-sm:mb-6 grid grid-flow-row grid-cols-2 max-sm:grid-cols-1 gap-4">
                                <div class="flex h-full w-full flex-row rotate-[-10deg] scale-100">
                                    <div class="flex h-[169px] my-auto max-sm:ml-[9px] !min-h-min w-full !min-w-[275px] max-sm:!min-w-[calc(100%-111px)] flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image}">
                                        ${config.images != null && config.images[0] != null ? `<img
                                            alt="Main 1"
                                            src="${config.images[0]}"
                                            width="640"
                                            height="360"
                                        />` : shape(shapeIndexes[0].type, shapeIndexes[0].index)}
                                    </div>
                                    <div class="pl-4 my-auto">
                                        <div
                                            ${config.shadow != null ? 'data-shadow' : ''}
                                            class="card p-2 h-[169px] !min-w-min !min-h-min"
                                            data-color="${colorsConfig[config.color].cardSecondary}"
                                        >
                                            <a href="/default" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['default'].title} ${config.color === 'default' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
                                            <a href="/error" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['error'].title} ${config.color === 'error' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
                                            <a href="/warning" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['warning'].title} ${config.color === 'warning' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
                                            <a href="/success" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['success'].title} ${config.color === 'success' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
                                            <a href="/primary" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['primary'].title} ${config.color === 'primary' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
                                            <a href="/secondary" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['secondary'].title} ${config.color === 'secondary' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
                                            <a href="/ghost" class="h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['ghost'].title} ${config.color === 'ghost' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
                                        </div>
                                    </div>
                                    <div class="pl-4 h-[169px] my-auto">
                                        <div class="relative rounded-3xl pb-[5px] bg-zinc-950/75 w-[169px] mx-auto text-center rotate-90 top-[41.5%] left-[-41.5%]">
                                            <span class="inline bg-gradient-to-r ${colorsConfig[config.color].title} brightness-125 text-xs leading-none bg-clip-text text-transparent">
                                                Pick color theme via dots
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex h-full flex-col items-center justify-center"></div>
                                <div class="flex h-full flex-col items-center justify-center"></div>
                                <div class="relative h-full max-h-[190px] w-full top-[28px] min-[1024px]:max-[1439px]:top-[8px] max-sm:top-[16px] max-sm:!w-[75%] rotate-[10deg] scale-90 flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image} blur-sm">
                                    ${config.images != null && config.images[1] != null ? `<img
                                        alt="Main 2"
                                        src="${config.images[1]}"
                                        width="640"
                                        height="360"
                                    />` : shape(shapeIndexes[1].type, shapeIndexes[1].index)}
                                </div>
                                <div class="relative h-full max-h-[190px] w-full top-[-28px] min-[1024px]:max-[1439px]:top-[-48px] max-sm:top-[calc(((100vw_-_345px)/17*-1)_+_28px)] max-sm:!w-[60%] rotate-[20deg] scale-[0.8] flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r ${colorsConfig[config.color].image} blur-md">
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