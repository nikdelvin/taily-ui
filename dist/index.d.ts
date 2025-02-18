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
        shadow?: true
        text: Array<{ type: 'default' | 'primary' | 'secondary', value: string }>
        description: string
        button: {
            title: string
            link: string
            newPage?: true
        }
        github: string
        images?: string[]
        parent?: string
    }): void
    function KPICards(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        shadow?: true
        cards: Array<{ title: string, description1: string, description2: string }>
        button: {
            title: string
            link: string
            newPage?: true
        }
    }): void
    function FeatureCards(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        shadow?: true
        reverse: boolean
        featureTitle: string
        featureDescription: Array<{ type: 'default' | 'primary' | 'secondary', value: string }>
        featureOptions: string[]
        button: {
            title: string
            link: string
            newPage?: true
        }
    }): void
    function Projects(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        shadow?: true
        projects: Array<{
            image: string,
            title: string,
            description: Array<{ type: 'default' | 'primary', value: string }>,
            options: string[],
            button?: {
                title: string
                link: string
                newPage?: true
            }
            color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        }>
        button: {
            title: string
            link: string
            newPage?: true
        }
    }): void
    function Skills(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        shadow?: true
        rows: Array<{
            title: string
            skills: Array<{
                icon: string,
                title: string
            }>
        }>
        musicTitle: string
        music: string[]
        button: {
            title: string
            link: string
            newPage?: true
        }
    }): void
    function Jobs(config: {
        title: string
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        shadow?: true
        jobs: Array<{
            from: string[],
            to: string[],
            title: string,
            description: Array<{ type: 'default' | 'primary', value: string }>,
            role: string[],
            button?: {
                title: string
                link: string
                newPage?: true
            }
        }>
    }): void
    function Footer(config: {
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        blocks: Array<{
            title: string
            text: Array<{ type: 'default' | 'primary', value: string, link?: string, newPage?: true }>
        }>
    }): void
    function Theme(config: {
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
        shadow?: true
        parent?: string
    }): void
}