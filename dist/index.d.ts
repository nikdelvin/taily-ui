import { PluginCreator, Config } from "tailwindcss/types/config"

declare module './index.js' {
    const tailyUI: {
        handler: PluginCreator,
        config?: Partial<Config> | undefined
    }
}