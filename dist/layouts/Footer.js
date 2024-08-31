import { colorsConfig } from "../config"

export function Footer(config) {
    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex h-full flex-col items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex h-full w-full max-w-[1440px] max-sm:max-w-[459px] max-md:max-w-[640px] max-lg:max-w-[759px] min-[1024px]:max-[1439px]:max-w-[1024px] flex-col justify-center">
                    <div class="relative flex h-auto w-full flex-col items-center justify-start p-16 pt-6 max-sm:px-6 max-sm:pt-4 max-md:px-8 max-md:pt-6 max-sm:pb-10 max-md:pb-12">
                        <div class="relative grid w-full content-start grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4 lg:grid-cols-4">
                            <div class="aspect-square max-[1439px]:!aspect-auto h-full w-full rounded-3xl max-sm:!rounded-3xl rounded-bl-none rounded-tr-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[0]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 text-3xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent w-min min-w-max">
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
                            <div class="aspect-square max-[1439px]:!aspect-auto h-full w-full rounded-3xl max-sm:!rounded-3xl rounded-br-none rounded-tl-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[1]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 text-3xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent w-min min-w-max">
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
                            <div class="aspect-square max-[1439px]:!aspect-auto h-full w-full rounded-3xl max-sm:!rounded-3xl max-lg:rounded-tl-none max-lg:rounded-br-none max-lg:rounded-bl-3xl max-lg:rounded-tr-3xl rounded-bl-none rounded-tr-none border border-opacity-75  ${colorsConfig[config.color].footerBorders[2]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent w-min min-w-max">
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
                            <div class="aspect-square max-[1439px]:!aspect-auto h-full w-full rounded-3xl max-sm:!rounded-3xl max-lg:rounded-tr-none max-lg:rounded-bl-none max-lg:rounded-br-3xl max-lg:rounded-tl-3xl rounded-br-none rounded-tl-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[3]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent w-min min-w-max">
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
                        <div class="relative grid content-start w-full grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
                            <div class="h-full w-full rounded-3xl rounded-t-none max-sm:!rounded-3xl max-lg:rounded-b-none max-lg:rounded-t-3xl border border-opacity-75 ${colorsConfig[config.color].footerBorders[4]} p-4">
                                <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 text-3xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent w-min min-w-max">
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
                            <div class="relative grid w-full grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                                <div class="aspect-square max-[1439px]:!aspect-auto h-full w-full rounded-3xl max-sm:!rounded-3xl rounded-br-none rounded-tl-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[5]} p-4">
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent w-min min-w-max">
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
                                <div class="aspect-square max-[1439px]:!aspect-auto h-full w-full rounded-3xl max-sm:!rounded-3xl rounded-bl-none rounded-tr-none border border-opacity-75 ${colorsConfig[config.color].footerBorders[6]} p-4">
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-4 text-3xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent w-min min-w-max">
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