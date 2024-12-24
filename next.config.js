//@ts-check

import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  defaultShowCopyCode: true,
})

export default withNextra({
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "zh-CN",
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export"
})
