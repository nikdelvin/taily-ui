import { shape } from "../icons/shape"
import { getRandomInt } from "../utils"
import { colorsConfig } from "../config"

export function Projects(config) {
    const shapeIndexes = () => [
        { type: 'type1', index: getRandomInt(3) }, 
        { type: 'type2', index: getRandomInt(4) }, 
        { type: 'type3', index: getRandomInt(3) }
    ]
    const projects = Array(config.projects.length).fill(true).map(() => getRandomInt(3))
    
    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex h-full flex-col items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50">
                <div class="flex h-full w-full max-w-[1440px] flex-col justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pt-6">
                        <h1 class="mb-[-34px] bg-gradient-to-r ${colorsConfig[config.color].title} bg-clip-text text-8xl font-bold leading-tight text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                        <div
                            ${config.shadow != null ? 'data-shadow' : ''}
                            data-color="${colorsConfig[config.color].cardPrimary}"
                            class="card !items-start !justify-start !p-0 ${colorsConfig[config.color].cardBG}"
                        >
                            <div class="flex aspect-video w-full p-[2px]">
                                <div class="flex w-full overflow-hidden rounded-[22px]">
                                    ${config.projects.map((project, index) => (
                                        `<input
                                            class="peer/project-${index} hidden"
                                            id="project-${index}"
                                            type="radio"
                                            name="project"
                                            ${(project.color != null ? project.color === config.color : index === 0) ? 'checked' : ''}
                                        />
                                        <div class="absolute bottom-0 left-0 w-full z-[4] justify-center p-4 hidden peer-checked/project-${index}:!flex">
                                            <div
                                                class="card !flex-row !min-h-min !min-w-min !w-min p-2 ${colorsConfig[config.color].cardBG}"
                                                data-color="${colorsConfig[config.color].cardPrimary}"
                                                ${config.shadow != null ? 'data-shadow' : ''}
                                            >
                                                ${config.projects.map((projectLabel, indexLabel) => (
                                                    `<label for="project-${indexLabel}"
                                                        class="${indexLabel+1 < config.projects.length ? 'mr-2' : ''} h-[15px] w-[15px] rounded-full ${index === indexLabel ? 'border border-solid border-zinc-50' : ''} bg-gradient-to-r ${projectLabel.color != null ? colorsConfig[projectLabel.color].textPrimary : !(indexLabel % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} cursor-pointer select-none appearance-none"
                                                    ></label>`
                                                )).join('')}
                                            </div>
                                        </div>
                                        <div class="relative aspect-video h-[calc(100%+2px)] hidden peer-checked/project-${index}:!flex">
                                            <img
                                                width="100%"
                                                height="auto"
                                                src="${project.image}"
                                            />
                                            <div class="absolute right-0 top-0 flex h-full flex-col items-center justify-center">
                                                <div class="relative m-6 ml-auto mr-0 flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-l-3xl bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].cardBGPrimary : !(index % 2 > 0) ? colorsConfig[config.color].cardBGPrimary : colorsConfig[config.color].cardBGSecondary} text-center backdrop-blur-xl">
                                                    <div class="relative flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-l-3xl bg-zinc-950/60">
                                                        <input
                                                            class="peer/hide hidden"
                                                            id="${`${index}_project_hide`}"
                                                            type="radio"
                                                            name="${`${index}_project`}"
                                                            checked
                                                        />
                                                        <label
                                                            for="${`${index}_project_hide`}"
                                                            class="absolute left-2 top-2 z-[1] cursor-pointer select-none appearance-none p-4 peer-checked/hide:!hidden"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                height="24px"
                                                                viewBox="0 -960 960 960"
                                                                width="24px"
                                                                fill="#FAFAFA"
                                                            >
                                                                <path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z" />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            class="peer/open hidden"
                                                            id="${`${index}_project_open`}"
                                                            type="radio"
                                                            name="${`${index}_project`}"
                                                        />
                                                        <label
                                                            for="${`${index}_project_open`}"
                                                            class="absolute left-2 top-2 z-[1] cursor-pointer select-none appearance-none p-4 peer-checked/open:!hidden"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                height="24px"
                                                                viewBox="0 -960 960 960"
                                                                width="24px"
                                                                fill="#FAFAFA"
                                                            >
                                                                <path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z" />
                                                            </svg>
                                                        </label>
                                                        <div class="overflow-hidden transition-all duration-500 ease-in-out peer-checked/hide:!w-[60px] peer-checked/open:!w-[654px] peer-checked/hide:min-w-[60px] peer-checked/open:min-w-[654px]">
                                                            <div class="relative flex w-full min-w-[654px] flex-col items-center justify-start p-16 pt-12 transition-all duration-500 ease-in-out peer-checked/hide:opacity-0 peer-checked/open:opacity-100">
                                                                <div class="absolute right-[-170px] top-[-80px] h-[225px] w-[450px]">
                                                                    ${shape(shapeIndexes()[projects[index]].type, shapeIndexes()[projects[index]].index, 'xl', '60')}
                                                                </div>
                                                                <div class="absolute bottom-[calc(50%-306px)] left-[calc(50%-455px)] h-[421px] w-[720px]">
                                                                    ${shape(shapeIndexes()[projects[index] < 2 ? projects[index] + 1 : 0].type, shapeIndexes()[projects[index] < 2 ? projects[index] + 1 : 0].index, 'md', '60')}
                                                                </div>
                                                                <h1 class="bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textPrimary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-12 text-8xl font-bold text-transparent">
                                                                    ${project.title}
                                                                </h1>
                                                                <h2 class="pb-8 text-center text-5xl font-bold">
                                                                    ${project.description.map((text) => {
                                                                        switch (text.type) {
                                                                            case 'default':
                                                                                return `<span>${text.value}${' '}</span>`
                                                                            case 'primary':
                                                                                return `<span class="inline bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textPrimary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                                                                        }
                                                                    }).join('')}
                                                                </h2>
                                                                ${project.options.map((option, optionIndex) => {
                                                                    return `
                                                                        <div class="mt-4 flex w-full items-start gap-4">
                                                                            <div class="flex h-full min-w-[48px] items-start justify-start">
                                                                                <h3 class="bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textPrimary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-end text-5xl font-bold text-transparent">
                                                                                    ${optionIndex + 1}.
                                                                                </h3>
                                                                            </div>
                                                                            ${optionIndex !== 1 ? `<p class="text-start text-[22px]/[30px] font-light text-zinc-50">${option}</p>` : `<p class="bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textPrimary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-start text-[22px]/[30px] font-light text-transparent">${option}</p>`}
                                                                        </div>
                                                                    `
                                                                }).join('')}
                                                                <div class="flex h-auto w-full flex-col items-center justify-start p-0 pt-8">
                                                                    <a
                                                                        ${config.shadow != null ? 'data-shadow' : ''}
                                                                        data-color="${project.color != null ? colorsConfig[project.color].button : (index % 2 > 0) ? colorsConfig[config.color].cardSecondary : colorsConfig[config.color].button}"
                                                                        data-type="bordered"
                                                                        data-size="medium"
                                                                        class="button !w-[150px]"
                                                                        href="${project.button.link}"
                                                                        target="_${project.button.newPage != null ? 'blank' : 'self'}"
                                                                    >
                                                                        <span class="font-medium">${project.button.title}</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
                                        )).join('')
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="flex h-auto w-full flex-col items-center justify-start pb-0 pt-16">
                            <a
                                ${config.shadow != null ? 'data-shadow' : ''}
                                data-color="${colorsConfig[config.color].button}"
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
        </div>
    `
}