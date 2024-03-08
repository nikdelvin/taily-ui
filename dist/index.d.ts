import { PluginCreator, Config } from "tailwindcss/types/config"

declare module './index.js' {
    const tailyUI: {
        handler: PluginCreator,
        config?: Partial<Config> | undefined
    }
    function OpenSourcePromo(config: {
        logo: any
        title: string
        color: 'primary' | 'secondary' | 'warning'
        text: Array<{ type: 'default' | 'primary' | 'secondary', value: string }>
        description: string
        button: {
            title: string
            link: string
        }
        github: string
        images: [string, string, string]
    }): void
    const OpenSourcePromoSafeList: string[]
}