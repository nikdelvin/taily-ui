import { colorsConfig } from "../config"

export function Projects(config) {
    return `
        <div class="flex h-full w-screen flex-col">
            <div class="flex h-full flex-col items-center bg-gradient-to-r ${colorsConfig[config.color].background} text-zinc-50 py-4">
                <div class="flex h-full w-full max-w-[1440px] max-sm:max-w-[459px] max-md:max-w-[640px] max-lg:max-w-[759px] min-[1024px]:max-[1439px]:max-w-[1024px] flex-col justify-center">
                    <div class="flex h-auto w-full flex-col items-center justify-start p-16 pt-6 max-sm:px-6 max-sm:pt-4 max-sm:pb-10 max-md:px-8 max-md:pt-6 max-md:pb-12">
                        <h1 class="bg-gradient-to-r mb-16 max-sm:mb-10 max-md:mb-12 min-[1024px]:max-[1439px]:mb-12 ${colorsConfig[config.color].title} bg-clip-text text-8xl max-sm:text-[2rem] text-nowrap whitespace-nowrap min-[1024px]:max-[1439px]:text-[4rem] max-md:text-5xl max-lg:text-[3.5rem] font-bold leading-tight max-md:leading-[1.15] text-transparent opacity-${(config.color === 'default' || config.color === 'ghost') ? '50' : '60'}">
                            ${config.title}
                        </h1>
                        <div
                            ${config.shadow != null ? 'data-shadow' : ''}
                            data-color="${colorsConfig[config.color].cardPrimary}"
                            class="card !items-start !justify-start !p-0 max-sm:!min-h-[150px] ${colorsConfig[config.color].cardBG}"
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
                                        <div class="absolute bottom-[63px] max-[1439px]:bottom-[47px] left-0 w-full z-[4] justify-center hidden peer-checked/project-${index}:!flex pointer-events-none">
                                            <div class="rounded-3xl pb-[5px] bg-zinc-950/75 w-[169px] mx-auto text-center">
                                                <span class="inline bg-gradient-to-r ${colorsConfig[project.color].title} brightness-125 text-xs leading-none bg-clip-text text-transparent">
                                                    Pick project via dot below
                                                </span>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-0 left-0 w-full z-[4] justify-center p-4 max-[1439px]:p-2 hidden peer-checked/project-${index}:!flex">
                                            <div
                                                class="card !flex-row !min-h-min !min-w-min !w-min p-2 ${colorsConfig[config.color].cardBG}"
                                                data-color="${colorsConfig[config.color].cardPrimary}"
                                                ${config.shadow != null ? 'data-shadow' : ''}
                                                ${(config.color !== 'ghost' && config.color !== 'success') ? 'data-reverse' : ''}
                                            >
                                                ${config.projects.map((projectLabel, indexLabel) => (
                                                    `<label for="project-${indexLabel}"
                                                        class="${indexLabel+1 < config.projects.length ? 'mr-2' : ''} h-[15px] w-[15px] rounded-full ${index === indexLabel ? 'border border-solid border-zinc-50' : ''} bg-gradient-to-r ${projectLabel.color != null ? colorsConfig[projectLabel.color].title : !(indexLabel % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} cursor-pointer select-none appearance-none"
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
                                            <div class="absolute right-0 top-0 flex max-lg:hidden h-full flex-col items-center justify-center">
                                                <div class="relative m-6 ml-auto mr-0 flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-l-3xl bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].cardBGSecondary : !(index % 2 > 0) ? colorsConfig[config.color].cardBGPrimary : colorsConfig[config.color].cardBGSecondary} text-center backdrop-blur-xl">
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
                                                            <div class="relative flex w-full min-w-[654px] flex-col items-center justify-start p-16 pt-12 min-[1024px]:max-[1439px]:pr-12 min-[1024px]:max-[1439px]:pt-8 transition-all duration-500 ease-in-out peer-checked/hide:opacity-0 peer-checked/open:opacity-100">
                                                                <h1 class="bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textSecondary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text pb-12 min-[1024px]:max-[1439px]:pb-8 text-8xl min-[1024px]:max-[1439px]:text-[2rem] min-[1024px]:max-[1439px]:leading-[1.2] font-bold text-transparent">
                                                                    ${project.title}
                                                                </h1>
                                                                <h2 class="pb-8 text-center text-5xl min-[1024px]:max-[1439px]:text-2xl min-[1024px]:max-[1439px]:leading-[1.2] min-[1024px]:max-[1439px]:pb-4 font-bold">
                                                                    ${project.description.map((text) => {
                                                                        switch (text.type) {
                                                                            case 'default':
                                                                                return `<span>${text.value}${' '}</span>`
                                                                            case 'primary':
                                                                                return `<span class="inline bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textSecondary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-transparent">${text.value}${' '}</span>`
                                                                        }
                                                                    }).join('')}
                                                                </h2>
                                                                ${project.options.map((option, optionIndex) => {
                                                                    return `
                                                                        <div class="mt-4 flex w-full items-start gap-4">
                                                                            <div class="flex h-full min-w-[48px] min-[1024px]:max-[1439px]:min-w-[24px] items-start justify-start">
                                                                                <h3 class="bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textSecondary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-end text-5xl min-[1024px]:max-[1439px]:leading-[1.15] min-[1024px]:max-[1439px]:text-[2rem] font-bold text-transparent">
                                                                                    ${optionIndex + 1}.
                                                                                </h3>
                                                                            </div>
                                                                            ${optionIndex !== 1 ? `<p class="text-start text-[22px]/[30px] min-[1024px]:max-[1439px]:text-lg font-light text-zinc-50">${option}</p>` : `<p class="bg-gradient-to-r ${project.color != null ? colorsConfig[project.color].textSecondary : !(index % 2 > 0) ? colorsConfig[config.color].textPrimary : colorsConfig[config.color].textSecondary} bg-clip-text text-start text-[22px]/[30px] min-[1024px]:max-[1439px]:text-lg font-light text-transparent">${option}</p>`}
                                                                        </div>
                                                                    `
                                                                }).join('')}
                                                                ${project.button != null ? (
                                                                    `<div class="flex min-[1024px]:max-[1439px]:pt-0 min-[1024px]:max-[1439px]:items-end h-auto w-full flex-col items-center justify-start p-0 pt-8">
                                                                        <a
                                                                            ${config.shadow != null ? 'data-shadow' : ''}
                                                                            ${(config.color !== 'ghost' && project.color != null ? project.color !== 'primary' : ((index % 2 > 0) ? config.color !== 'primary' : config.color !== 'success')) ? 'data-reverse' : ''}
                                                                            data-color="${project.color != null ? colorsConfig[project.color].cardSecondary : (index % 2 > 0) ? colorsConfig[config.color].cardSecondary : colorsConfig[config.color].button}"
                                                                            data-type="bordered"
                                                                            data-size="medium"
                                                                            class="button !w-[150px]"
                                                                            href="${project.button.link}"
                                                                            target="_${project.button.newPage != null ? 'blank' : 'self'}"
                                                                        >
                                                                            <span class="font-medium">${project.button.title}</span>
                                                                        </a>
                                                                    </div>`
                                                                ) : '<div class="flex min-[1024px]:max-[1439px]:pt-0 min-[1024px]:max-[1439px]:items-end h-auto w-full flex-col items-center justify-start p-0 pt-8"></div>'}
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
                        <div class="flex h-auto w-full flex-col items-center justify-start pb-0 pt-16 max-sm:pt-10 max-md:pt-12 min-[1024px]:max-[1439px]:pt-12">
                            <a
                                ${config.shadow != null ? 'data-shadow' : ''}
                                ${(config.color !== 'ghost' && config.color !== 'success') ? 'data-reverse' : ''}
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