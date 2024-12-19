import nextra from 'nextra'

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true,
    flexsearch: {
        codeblocks: false,
    },
    defaultShowCopyCode: true,
})

export default withNextra({
    i18n: {
        locales: ["en-US", "zh-CN"],
        defaultLocale: "zh-CN",
    },
    reactStrictMode: true,
})
