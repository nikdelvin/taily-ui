import { colorsConfig } from "../config"

export function Theme(config) {
    return `
    <div class="absolute right-0 top-0 p-4">
        <div
            ${config.shadow != null ? 'data-shadow' : ''}
            class="card p-2 !min-w-min !min-h-min"
            data-color="${colorsConfig[config.color].cardSecondary}"
        >
            <a href="/default" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['default'].textPrimary} ${config.color === 'default' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="/primary" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['primary'].textPrimary} ${config.color === 'primary' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="/secondary" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['secondary'].textPrimary} ${config.color === 'secondary' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="/success" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['success'].textPrimary} ${config.color === 'success' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="/warning" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['warning'].textPrimary} ${config.color === 'warning' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="/error" class="mb-2 h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['error'].textPrimary} ${config.color === 'error' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
            <a href="/ghost" class="h-[15px] w-[15px] rounded-full bg-gradient-to-r ${colorsConfig['ghost'].textPrimary} ${config.color === 'ghost' ? 'border border-solid border-zinc-50' : 'hover:border hover:border-solid hover:border-zinc-50'}"></a>
        </div>
    </div>
    `
}