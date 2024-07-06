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
                <div class="flex h-full w-full max-w-[1440px] flex-col justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0">
                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent opacity-50">
                            ${config.title}
                        </h1>
                    </div>
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pb-0 pt-8">
                        ${config.jobs.map((job, index) => (
                            `<div class="relative grid w-full grid-flow-row grid-cols-1 gap-16 pb-16 pt-8 lg:grid-cols-2">
                                <div class="relative mb-auto grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
                                    <div
                                        data-shadow
                                        data-color="${colorsConfig[config.color].cardPrimary}"
                                        class="${`card mb-auto mt-3 aspect-square ${!(index % 2 > 0) ? '!rotate-[10deg]' : '!rotate-[-10deg]'} !scale-[0.88]`}"
                                    >
                                        <h2 class="absolute left-[16px] top-[12px] bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-2xl font-semibold text-transparent">
                                            From
                                        </h2>
                                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-3 pt-1 text-8xl font-bold text-transparent">
                                            ${job.from[0]}
                                        </h1>
                                        <h2 class="pb-3 text-center text-4xl font-bold">${job.from[1]}</h2>
                                        <h2 class="pb-3 text-center text-4xl font-bold">
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
                                        data-shadow
                                        data-color="${colorsConfig[config.color].cardPrimary}"
                                        class="${`card mb-auto ml-3 aspect-square ${!(index % 2 > 0) ? '!rotate-[-10deg]' : '!rotate-[10deg]'} !scale-[0.8]`}"
                                    >
                                        <h2 class="absolute left-[16px] top-[12px] bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text text-2xl font-semibold text-transparent">
                                            To
                                        </h2>
                                        <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textPrimary} bg-clip-text pb-3 pt-1 text-8xl font-bold text-transparent">
                                            ${job.to[0]}
                                        </h1>
                                        <h2 class="pb-3 text-center text-4xl font-bold">${job.to[1]}</h2>
                                        <h2 class="pb-3 text-center text-4xl font-bold">
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
                                    <div class="absolute bottom-[30px] left-[-60px] h-[360px] w-[720px]">
                                        ${shape((!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[4].type, (!(index % 2 > 0) ? shapeIndexes() : shapeIndexes().reverse())[4].index, 'md', '60')}
                                    </div>
                                    <h1 class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text pb-12 text-start text-4xl font-bold text-transparent">
                                        ${job.title}
                                    </h1>
                                    <h3 class="pb-3 text-start text-3xl font-bold">
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
                                                `<p class="text-start text-xl font-light text-zinc-50">${option}</p>`
                                            ) : (
                                                `<p class="bg-gradient-to-r ${colorsConfig[config.color].textSecondary} bg-clip-text text-start text-xl font-light text-transparent">
                                                    ${option}
                                                </p>`
                                            )}
                                        </div>`
                                    )).join('')}
                                    <div class="flex h-auto w-full flex-col items-start justify-start p-0 pt-8">
                                        <a
                                            data-color="${colorsConfig[config.color].cardSecondary}"
                                            data-shadow
                                            data-type="bordered"
                                            data-size="medium"
                                            class="button !w-[150px]"
                                            href="${job.button.link}"
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