import { shape } from "../icons/shape"
import { getRandomInt } from "../utils"
import { colorsConfig } from "../config"

export function Jobs(config) {
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
                <div class="flex h-full w-full max-w-[1440px] max-sm:max-w-[459px] max-md:max-w-[640px] max-lg:max-w-[759px] min-[1024px]:max-[1439px]:max-w-[1024px] flex-col justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0 pt-6 max-sm:px-6 max-sm:pt-4 max-md:px-8 max-md:pt-6">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl max-sm:text-[2rem] text-nowrap whitespace-nowrap min-[1024px]:max-[1439px]:text-[4rem] max-md:text-5xl max-lg:text-[3.5rem] font-bold leading-tight max-md:leading-[1.15] text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 max-sm:p-6 max-sm:py-10 max-md:p-8 max-md:py-12 min-[1024px]:max-[1439px]:py-12 min-[1024px]:max-[1439px]:pb-16">
                        ${config.jobs.map((job, index) => (
                            `<div class="relative grid w-full grid-flow-row grid-cols-1 gap-16 max-sm:gap-6 max-md:gap-8 max-lg:gap-10 min-[1024px]:max-[1439px]:gap-10 ${index === config.jobs.length - 1 ? '!pb-0' : ''} pb-16 min-[1024px]:max-[1439px]:pb-12 max-sm:pb-10 max-md:pb-12 lg:grid-cols-2">
                                <div class="relative mb-auto mt-2 grid grid-flow-row gap-16 max-sm:gap-6 max-md:gap-8 max-lg:gap-10 min-[1024px]:max-[1439px]:gap-8 grid-cols-2">
                                    <div
                                        ${config.shadow != null ? 'data-shadow' : ''}
                                        ${(config.color !== 'ghost' && config.color !== 'success') ? 'data-reverse' : ''}
                                        data-color="${colorsConfig[config.color].cardPrimary}"
                                        class="card mb-auto aspect-square min-[1024px]:max-[1439px]:!min-w-[200px] max-sm:!min-w-[150px] min-[1024px]:max-[1439px]:!min-h-[200px] max-sm:!min-h-[150px]"
                                    >
                                        <h2 class="absolute left-[16px] top-[12px] max-sm:left-[12px] max-sm:top-[8px] bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-2xl max-md:text-2xl max-sm:text-sm min-[1024px]:max-[1439px]:text-lg font-semibold text-transparent">
                                            From
                                        </h2>
                                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 max-sm:pb-2 text-8xl max-sm:text-[3.25rem] min-[1024px]:max-[1439px]:text-[3.5rem] max-md:text-[4rem] font-bold text-transparent">
                                            ${job.from[0]}
                                        </h1>
                                        <h2 class="pb-2 max-sm:pb-0 max-md:pb-1 min-[1024px]:max-[1439px]:pb-0 text-center text-4xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold">${job.from[1]}</h2>
                                        <h2 class="text-center text-4xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold">
                                            <span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                ${job.from[2]}
                                            </span>
                                        </h2>
                                        <div class="${`absolute ${!(index % 2 > 0) ? 'right' : 'left'}-[-170px] top-[-80px] h-[225px] w-[450px]`}">
                                            ${shape((!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[0].type, (!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[0].index)}
                                        </div>
                                        <div class="${`absolute ${!(index % 2 > 0) ? 'left' : 'right'}-[-140px] bottom-[-30px] h-[180px] w-[360px]`}">
                                            ${shape((!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[1].type, (!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[1].index, 'sm')}
                                        </div>
                                    </div>
                                    <div
                                        ${config.shadow != null ? 'data-shadow' : ''}
                                        ${(config.color !== 'ghost' && config.color !== 'success') ? 'data-reverse' : ''}
                                        data-color="${colorsConfig[config.color].cardPrimary}"
                                        class="card mb-auto aspect-square min-[1024px]:max-[1439px]:!min-w-[200px] max-sm:!min-w-[150px] min-[1024px]:max-[1439px]:!min-h-[200px] max-sm:!min-h-[150px]"
                                    >
                                        <h2 class="absolute left-[16px] top-[12px] max-sm:left-[12px] max-sm:top-[8px] bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-2xl max-md:text-2xl max-sm:text-sm min-[1024px]:max-[1439px]:text-lg font-semibold text-transparent">
                                            To
                                        </h2>
                                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-4 max-sm:pb-2 text-8xl max-sm:text-[3.25rem] min-[1024px]:max-[1439px]:text-[3.5rem] max-md:text-[4rem] font-bold text-transparent">
                                            ${job.to[0]}
                                        </h1>
                                        <h2 class="pb-2 max-sm:pb-0 max-md:pb-1 min-[1024px]:max-[1439px]:pb-0 text-center text-4xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold">${job.to[1]}</h2>
                                        <h2 class="text-center text-4xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold">
                                            <span class="inline bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-transparent">
                                                ${job.to[2]}
                                            </span>
                                        </h2>
                                        <div class="${`absolute ${!(index % 2 > 0) ? 'left' : 'right'}-[-170px] top-[-80px] h-[225px] w-[450px]`}">
                                            ${shape((!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[2].type, (!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[2].index)}
                                        </div>
                                        <div class="${`absolute ${!(index % 2 > 0) ? 'right' : 'left'}-[-140px] bottom-[-30px] h-[180px] w-[360px]`}">
                                            ${shape((!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[3].type, (!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[3].index, 'sm')}
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex flex-col items-start">
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-12 max-sm:pb-4 max-md:pb-8 min-[1024px]:max-[1439px]:pb-4 text-start text-4xl min-[1024px]:max-[1439px]:text-2xl max-md:text-[2rem] max-sm:text-2xl font-bold text-transparent">
                                        ${job.title}
                                    </h1>
                                    <h3 class="pb-4 max-sm:pb-0 max-md:pb-2 min-[1024px]:max-[1439px]:pb-0 text-start text-3xl min-[1024px]:max-[1439px]:text-xl max-md:text-2xl max-sm:text-xl font-bold">
                                        ${job.description.map((text) => {
                                            switch (text.type) {
                                                case 'default':
                                                    return `<span>${text.value}${' '}</span>`
                                                case 'primary':
                                                    return (
                                                        `<span class="inline bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">
                                                            ${text.value}${' '}
                                                        </span>`
                                                    )
                                            }
                                        }).join('')}
                                    </h3>
                                    ${job.role.map((option, index) => (
                                        `<div class="mt-4 flex items-start gap-4">
                                            <div class="flex h-full min-w-[24px] items-start justify-start">
                                                <h3 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-end text-3xl font-bold text-transparent">
                                                    ${index + 1}.
                                                </h3>
                                            </div>
                                            ${index !== 1 ? (
                                                `<p class="text-start text-xl min-[1024px]:max-[1439px]:text-base max-md:text-lg max-sm:text-base font-light text-zinc-50">${option}</p>`
                                            ) : (
                                                `<p class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-start text-xl min-[1024px]:max-[1439px]:text-base max-md:text-lg max-sm:text-base font-light text-transparent">
                                                    ${option}
                                                </p>`
                                            )}
                                        </div>`
                                    )).join('')}
                                    <div class="flex h-auto w-full flex-col items-start justify-start p-0 pb-4 pt-8 max-sm:pt-6 max-md:pt-8 min-[1024px]:max-[1439px]:pt-6">
                                        <a
                                            ${config.shadow != null ? 'data-shadow' : ''}
                                            ${(config.color !== 'ghost' && config.color !== 'primary') ? 'data-reverse' : ''}
                                            data-color="${colorsConfig[config.color].cardSecondary}"
                                            data-type="bordered"
                                            data-size="medium"
                                            class="button !w-[150px]"
                                            href="${job.button.link}"
                                            target="_${job.button.newPage != null ? 'blank' : 'self'}"
                                        >
                                            <span class="font-medium">${job.button.title}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>`
                        )).join('')}
                    </div>
                </div>
            </div>
        </div>
    `
}