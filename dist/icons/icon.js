export function icon(color, type, path) {
    const colorsConfig = {
        default: {primary: ['#c7d2fe','#bae6fd'], middle: ['#bae6fd','#94a3b8'], secondary: ['#94a3b8','#a1a1aa'], main: ['#bfdbfe','#94a3b8']},
        primary: {primary: ['#3b82f6','#06b6d4'], middle: ['#06b6d4','#14b8a6'], secondary: ['#14b8a6','#22c55e'], main: ['#0ea5e9','#22c55e']},
        secondary: {primary: ['#a855f7','#6366f1'], middle: ['#6366f1','#3b82f6'], secondary: ['#3b82f6','#06b6d4'], main: ['#8b5cf6','#0ea5e9']},
        success: {primary: ['#14b8a6','#22c55e'], middle: ['#22c55e','#eab308'], secondary: ['#eab308','#f97316'], main: ['#22c55e','#f59e0b']},
        warning: {primary: ['#eab308','#f97316'], middle: ['#f97316','#ef4444'], secondary: ['#ef4444','#ec4899'], main: ['#f59e0b','#ef4444']},
        error: {primary: ['#ef4444','#ec4899'], middle: ['#ec4899','#a855f7'], secondary: ['#a855f7','#6366f1'], main: ['#ef4444','#8b5cf6']},
        ghost: {primary: ['#a1a1aa','#94a3b8'], middle: ['#94a3b8','#bae6fd'], secondary: ['#bae6fd','#c7d2fe'], main: ['#94a3b8','#bfdbfe']}
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