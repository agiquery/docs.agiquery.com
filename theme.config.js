import React from 'react';
import { useConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'nextra/hooks'
import useLocalesMap from "./components/use-locales-map";
import { Logo, LogoContainer } from './components/logo'

import {
  editTextMap,
  feedbackLinkMap,
  footerTextMap,
  gitTimestampMap,
  headDescriptionMap,
  languageMap,
  searchPlaceholderMap,
  tableOfContentsTitleMap,
  titleMap,
} from "./translations";

function base64Encode(str) {
  const buffer = Buffer.from(str, 'utf-8')
  return buffer.toString('base64')
}

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config = {
  project: {
    link: 'https://github.com/agiquery/docs.agiquery.com'
  },
  docsRepositoryBase: "https://github.com/agiquery/docs.agiquery.com/blob/main",
  toc: {
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  search: {
    placeholder: () => useLocalesMap(searchPlaceholderMap),
  },
  editLink: {
    text: () => useLocalesMap(editTextMap),
  },
  feedback: {
    content: () => useLocalesMap(feedbackLinkMap),
  },
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
    const { route, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = useLocalesMap(titleMap);
    const description = useLocalesMap(headDescriptionMap);
    const imageUrl = new URL("https://docs.agiquery.com");

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title || titleSuffix);
    }

    const ogTitle = title ? `${title} – Agile Query` : `Agile Query: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;
    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon.svg"
        />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="manifest" href="/icon.svg" />
        <link
          rel="mask-icon"
          href="/icon.svg"
          color="#000000"
        />
        <meta httpEquiv="Content-Language" content={locale} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Agile Query" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale} />
      </>
    );
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    const lastUpdatedOn = useLocalesMap(gitTimestampMap);

    return (
      <>
        {lastUpdatedOn}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
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
