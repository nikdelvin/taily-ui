import { PluginCreator, Config } from "tailwindcss/types/config"

declare module './index.js' {
    const tailyUI: {
        handler: PluginCreator,
        config?: Partial<Config> | undefined
    }
    const safeList: string[]
    function OpenSourcePromo(config: {
        logo: any
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        text: Array<{ type: 'default' | 'primary' | 'secondary', value: string }>
        description: string
        button: {
            title: string
            link: string
        }
        github: string
        images?: string[]
    }): void
}