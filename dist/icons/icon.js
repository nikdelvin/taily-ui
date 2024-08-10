export function icon(color, type, path) {
    const colorsConfig = {
        default: {primary: ['#94a3b8','#a1a1aa'], middle: ['#a1a1aa','#bfdbfe'], secondary: ['#bfdbfe','#ddd6fe'], main: ['#a1a1aa', '#ddd6fe']},
        primary: {primary: ['#06b6d4', '#3b82f6'], middle: ['#3b82f6','#14b8a6'], secondary: ['#14b8a6', '#22c55e'], main: ['#3b82f6', '#22c55e']},
        secondary: {primary: ['#a855f7', '#6366f1'], middle: ['#6366f1','#06b6d4'], secondary: ['#06b6d4', '#3b82f6'], main: ['#a855f7', '#3b82f6']},
        success: {primary: ['#14b8a6', '#22c55e'], middle: ['#22c55e','#eab308'], secondary: ['#eab308', '#f97316'], main: ['#22c55e', '#f97316']},
        warning: {primary: ['#eab308', '#f97316'], middle: ['#f97316','#ec4899'], secondary: ['#ec4899', '#ef4444'], main: ['#eab308', '#ef4444']},
        error: {primary: ['#ec4899', '#ef4444'], middle: ['#ef4444','#a855f7'], secondary: ['#a855f7', '#6366f1'], main: ['#ef4444', '#8b5cf6']},
        ghost: {primary: ['#bfdbfe', '#ddd6fe'], middle: ['#ddd6fe','#94a3b8'], secondary: ['#94a3b8','#a1a1aa'], main: ['#bfdbfe', '#a1a1aa']}
    }
    return `
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" width="100%" height="100%">
        <linearGradient id="${color}-${type}-gradient">
            <stop stop-color="${colorsConfig[color][type][0]}" offset="0%" />
            <stop stop-color="${colorsConfig[color][type][1]}" offset="100%" />
        </linearGradient>
        <path fill="url(#${color}-${type}-gradient)" d="${path}"/>
        </svg>
    `
}