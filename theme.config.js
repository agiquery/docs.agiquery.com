import React from 'react';
import { useConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'nextra/hooks'
import { Logo, LogoContainer } from './components/logo'

function base64Encode(str) {
  const buffer = Buffer.from(str, 'utf-8')
  return buffer.toString('base64')
}

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config = {
  project: {
    link: 'https://github.com/zeabur',
  },
  docsRepositoryBase: 'https://github.com/zeabur/zeabur/tree/main/docs',
  i18n: [
    { locale: 'en-US', name: 'English' },
    { locale: 'zh-CN', name: '简体中文' }
  ],
  logo: () => {
    const { resolvedTheme } = useTheme()
        const router = useRouter();
        const { locale, defaultLocale } = router;
        const logoImage = (resolvedTheme && resolvedTheme == 'dark') ? '/logo-dark.svg' : '/logo.svg'
        return (
            <LogoContainer>
                <Logo style={{ backgroundImage: `url(${logoImage})` }} /> <h3>| 文档</h3>
            </LogoContainer>
        );
  },
  head: () => {
    const r = useRouter()
    const p = `${r.basePath}${r.pathname}`;
    const { frontMatter } = useConfig()
    const ogEndpoint = 'https://og.zeabur.com/api/og'
    const ogQueryString = `title=${frontMatter.ogImageTitle}&desc=${frontMatter.ogImageSubtitle}`
    const encoded = base64Encode(ogQueryString)
    const ogUrl = `${ogEndpoint}/${encodeURIComponent(encoded)}.png`

    const title = frontMatter?.ogImageTitle + ' - Zeabur'
    const description =
      frontMatter?.description ||
      frontMatter.ogImageSubtitle ||
      'Zeabur: Deploy your service with one click.'

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />

        <title>{title}</title>
        <meta property="og:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site:domain" content="zeabur.com" />
        <meta property="twitter:url" content={`https://zeabur.com${p}`} />
        <meta property="twitter:image" content={ogUrl} />

        <meta property="og:url" content={`https://zeabur.com${p}`} />
        <meta property="og:image" content={ogUrl} />

        <link rel="canonical" href={`https://zeabur.com${p}`} />

        <meta name="apple-mobile-web-app-title" content="Zeabur" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>
    )
  },
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://www.agiquery.com" target="_blank">
          Zeabur Pte. Ltd.
        </a>
      </span>
    ),
  },
}

export default config
