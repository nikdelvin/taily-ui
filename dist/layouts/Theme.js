import { colorsConfig } from "../config.js"

export function Theme(config) {
    return `
    <div class="absolute right-0 top-0 p-4">
        <div
            ${config.shadow != null ? 'data-shadow' : ''}
            ${(config.color !== 'ghost' && config.color !== 'primary') ? 'data-reverse' : ''}
            class="card p-2 !min-w-min !min-h-min"
            data-color="${colorsConfig[config.color].cardSecondary}"
        >
            <a href="${config.parent ?? ''}/default" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['default'].title} ${config.color === 'default' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="${config.parent ?? ''}/secondary" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['secondary'].title} ${config.color === 'secondary' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="${config.parent ?? ''}/primary" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['primary'].title} ${config.color === 'primary' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="${config.parent ?? ''}/success" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['success'].title} ${config.color === 'success' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="${config.parent ?? ''}/warning" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['warning'].title} ${config.color === 'warning' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="${config.parent ?? ''}/error" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['error'].title} ${config.color === 'error' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="${config.parent ?? ''}/ghost" class="h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['ghost'].title} ${config.color === 'ghost' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
        </div>
    </div>
    `
}