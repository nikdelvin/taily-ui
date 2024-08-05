import { shape } from "../icons/shape"
import { getRandomInt } from "../utils"
import { colorsConfig } from "../config"

export function Footer(config) {
    const shapeIndexes = () => [
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) },
        { type: 'type1', index: getRandomInt(3) },
        { type: 'type2', index: getRandomInt(4) }
    ]
    
    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex h-full flex-col items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex h-full w-full max-w-[1440px] flex-col justify-center">
                    <div class="relative flex h-auto w-full flex-col items-center justify-start p-12 pt-8">
                        <div class="absolute right-[-50px] top-[40px] h-[225px] w-[450px]">
                            ${shape(shapeIndexes()[0].type, shapeIndexes()[0].index, 'md', '60')}
                        </div>
                        <div class="absolute left-[-50px] top-[40px] h-[225px] w-[450px]">
                            ${shape(shapeIndexes()[1].type, shapeIndexes()[1].index, 'md', '60')}
                        </div>
                        <div class="absolute right-[-50px] bottom-[85px] h-[225px] w-[450px]">
                            ${shape(shapeIndexes()[2].type, shapeIndexes()[2].index, 'md', '60')}
                        </div>
                        <div class="absolute left-[-50px] bottom-[85px] h-[225px] w-[450px]">
                            ${shape(shapeIndexes()[3].type, shapeIndexes()[3].index, 'md', '60')}
                        </div>
                        <div class="absolute top-[180px] h-[360px] w-[720px]">
                            ${shape(shapeIndexes()[4].type, shapeIndexes()[4].index, undefined, '60')}
                        </div>
                        <div class="relative grid w-full grid-flow-row grid-cols-2 gap-4 p-4 lg:grid-cols-4">
                            <div class="aspect-square h-auto w-full rounded-3xl rounded-bl-none rounded-tr-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[0]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 text-3xl font-bold text-transparent">
                                    ${config.blocks[0].title}
                                </h1>
                                ${config.blocks[0].text.map((text) => {
                                    switch (text.type) {
                                        case 'default':
                                            return `<span>${text.value}${' '}</span>`
                                        case 'primary': {
                                            if (text.link != null) {
                                                return (
                                                    `<a href="${text.link}" target="_${text.newPage != null ? 'blank' : 'self'}" class="underline decoration-zinc-50/50 inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </a>`
                                                )
                                            } else {
                                                return (
                                                    `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </span>`
                                                )
                                            }
                                        }
                                    }
                                }).join('')}
                            </div>
                            <div class="aspect-square h-auto w-full rounded-3xl rounded-br-none rounded-tl-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[1]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 text-3xl font-bold text-transparent">
                                    ${config.blocks[1].title}
                                </h1>
                                ${config.blocks[1].text.map((text) => {
                                    switch (text.type) {
                                        case 'default':
                                            return `<span>${text.value}${' '}</span>`
                                        case 'primary': {
                                            if (text.link != null) {
                                                return (
                                                    `<a href="${text.link}" target="_${text.newPage != null ? 'blank' : 'self'}" class="underline decoration-zinc-50/50 inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </a>`
                                                )
                                            } else {
                                                return (
                                                    `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </span>`
                                                )
                                            }
                                        }
                                    }
                                }).join('')}
                            </div>
                            <div class="aspect-square h-auto w-full rounded-3xl rounded-bl-none rounded-tr-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[2]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl font-bold text-transparent">
                                    ${config.blocks[2].title}
                                </h1>
                                ${config.blocks[2].text.map((text) => {
                                    switch (text.type) {
                                        case 'default':
                                            return `<span>${text.value}${' '}</span>`
                                        case 'primary': {
                                            if (text.link != null) {
                                                return (
                                                    `<a href="${text.link}" target="_${text.newPage != null ? 'blank' : 'self'}" class="underline decoration-zinc-50/50 inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </a>`
                                                )
                                            } else {
                                                return (
                                                    `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </span>`
                                                )
                                            }
                                        }
                                    }
                                }).join('')}
                            </div>
                            <div class="aspect-square h-auto w-full rounded-3xl rounded-br-none rounded-tl-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[3]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl font-bold text-transparent">
                                    ${config.blocks[3].title}
                                </h1>
                                ${config.blocks[3].text.map((text) => {
                                    switch (text.type) {
                                        case 'default':
                                            return `<span>${text.value}${' '}</span>`
                                        case 'primary': {
                                            if (text.link != null) {
                                                return (
                                                    `<a href="${text.link}" target="_${text.newPage != null ? 'blank' : 'self'}" class="underline decoration-zinc-50/50 inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </a>`
                                                )
                                            } else {
                                                return (
                                                    `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </span>`
                                                )
                                            }
                                        }
                                    }
                                }).join('')}
                            </div>
                        </div>
                        <div class="relative grid w-full grid-flow-row grid-cols-1 gap-4 p-4 pt-0 lg:grid-cols-2">
                            <div class="h-full w-full rounded-3xl rounded-t-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[4]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 text-3xl font-bold text-transparent">
                                    ${config.blocks[4].title}
                                </h1>
                                ${config.blocks[4].text.map((text) => {
                                    switch (text.type) {
                                        case 'default':
                                            return `<span>${text.value}${' '}</span>`
                                        case 'primary': {
                                            if (text.link != null) {
                                                return (
                                                    `<a href="${text.link}" target="_${text.newPage != null ? 'blank' : 'self'}" class="underline decoration-zinc-50/50 inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </a>`
                                                )
                                            } else {
                                                return (
                                                    `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                        ${text.value}${' '}
                                                    </span>`
                                                )
                                            }
                                        }
                                    }
                                }).join('')}
                            </div>
                            <div class="relative grid w-full grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
                                <div class="aspect-square h-auto w-full rounded-3xl rounded-br-none rounded-tl-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[5]} p-4">
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl font-bold text-transparent">
                                        ${config.blocks[5].title}
                                    </h1>
                                    ${config.blocks[5].text.map((text) => {
                                        switch (text.type) {
                                            case 'default':
                                                return `<span>${text.value}${' '}</span>`
                                            case 'primary': {
                                                if (text.link != null) {
                                                    return (
                                                        `<a href="${text.link}" target="_${text.newPage != null ? 'blank' : 'self'}" class="underline decoration-zinc-50/50 inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                            ${text.value}${' '}
                                                        </a>`
                                                    )
                                                } else {
                                                    return (
                                                        `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                            ${text.value}${' '}
                                                        </span>`
                                                    )
                                                }
                                            }
                                        }
                                    }).join('')}
                                </div>
                                <div class="aspect-square h-auto w-full rounded-3xl rounded-bl-none rounded-tr-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[6]} p-4">
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl font-bold text-transparent">
                                        ${config.blocks[6].title}
                                    </h1>
                                    ${config.blocks[6].text.map((text) => {
                                        switch (text.type) {
                                            case 'default':
                                                return `<span>${text.value}${' '}</span>`
                                            case 'primary': {
                                                if (text.link != null) {
                                                    return (
                                                        `<a href="${text.link}" target="_${text.newPage != null ? 'blank' : 'self'}" class="underline decoration-zinc-50/50 inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                            ${text.value}${' '}
                                                        </a>`
                                                    )
                                                } else {
                                                    return (
                                                        `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                            ${text.value}${' '}
                                                        </span>`
                                                    )
                                                }
                                            }
                                        }
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}