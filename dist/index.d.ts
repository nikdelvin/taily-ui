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
    function KPICards(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        cards: Array<{ title: string, description1: string, description2: string }>
        button: {
            title: string
            link: string
        }
    }): void
    function FeatureCards(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        reverse: boolean
        featureTitle: string
        featureDescription: Array<{ type: 'default' | 'primary' | 'secondary', value: string }>
        featureOptions: string[]
        button: {
            title: string
            link: string
        }
    }): void
    function Projects(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        projects: Array<{
            image: string,
            title: string,
            description: Array<{ type: 'default' | 'primary', value: string }>,
            options: string[],
            button: {
                title: string
                link: string
            }
        }>
    }): void
    function Skills(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        skills: Array<{
            icon: string,
            title: string
        }>
        music: string[]
    }): void
    function Jobs(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        jobs: Array<{
            from: string[],
            to: string[],
            title: string,
            description: Array<{ type: 'default' | 'primary', value: string }>,
            role: string[],
            button: {
                title: string
                link: string
            }
        }>
    }): void
    function Footer(config: {
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        blocks: Array<{
            title: string
            text: Array<{ type: 'default' | 'primary', value: string, link?: string }>
        }>
    }): void
}