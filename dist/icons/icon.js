export function icon(color, type, path) {
    const colorsConfig = {
        default: {primary: ['#a1a1aa','#94a3b8'], middle: ['#94a3b8','#bfdbfe'], secondary: ['#bfdbfe','#ddd6fe'], main: ['#94a3b8','#bfdbfe']},
        primary: {primary: ['#06b6d4','#3b82f6'], middle: ['#3b82f6','#6366f1'], secondary: ['#6366f1','#a855f7'], main: ['#3b82f6','#a855f7']},
        secondary: {primary: ['#6366f1','#a855f7'], middle: ['#a855f7','#ec4899'], secondary: ['#ec4899','#ef4444'], main: ['#a855f7','#ef4444']},
        success: {primary: ['#22c55e','#14b8a6'], middle: ['#14b8a6','#06b6d4'], secondary: ['#06b6d4','#3b82f6'], main: ['#22c55e','#3b82f6']},
        warning: {primary: ['#f97316','#eab308'], middle: ['#eab308','#22c55e'], secondary: ['#22c55e','#14b8a6'], main: ['#eab308','#22c55e']},
        error: {primary: ['#ec4899','#ef4444'], middle: ['#ef4444','#f97316'], secondary: ['#f97316','#eab308'], main: ['#ef4444','#eab308']},
        ghost: {primary: ['#bfdbfe','#ddd6fe'], middle: ['#ddd6fe','#a1a1aa'], secondary: ['#a1a1aa','#94a3b8'], main: ['#bfdbfe','#94a3b8']}
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