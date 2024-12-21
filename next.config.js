//@ts-check

import nextra from 'nextra';
import i18n from './i18n-config.js';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  defaultShowCopyCode: true,
})

export default withNextra({
  i18n,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  output: "export"
})
