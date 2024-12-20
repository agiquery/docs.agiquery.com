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
} from "./translations/text";
import { useTheme } from 'nextra-theme-docs'
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import useLocalesMap from "./components/use-locales-map";
import styled from "styled-components";

export default {
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
    head: () => {
        const { route, locales, locale } = useRouter();
        const { frontMatter, title } = useConfig();
        const titleSuffix = useLocalesMap(titleMap);
        const description = useLocalesMap(headDescriptionMap);

        const imageUrl = new URL("https://docs.agiquery.com");

        if (!/\/index\.+/.test(route)) {
            imageUrl.searchParams.set("title", title || titleSuffix);
        }

        const contentLanguage = locales.join(", ");
        const ogTitle = title ? `${title} – Agile Query` : `Agile Query: ${titleSuffix}`;
        const ogDescription = frontMatter.description || description;
        const ogImage = frontMatter.image || imageUrl.toString();

        return (
            <>
                {/* Favicons, meta */}
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
                <meta httpEquiv="Content-Language" content={contentLanguage} />
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
                {locales
                    .filter((l) => l !== locale)
                    .map((l) => (
                        <meta property="og:locale:alternate" content={l} key={l} />
                    ))}
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
    i18n: Object.entries(languageMap).map(([locale, text]) => ({
        locale,
        text,
    })),
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    h3 {
        font-size: 16px;
    }
`

const Logo = styled.div`
    background: url(/logo.svg);
    background-size: 100%; 
    height: 64px;
    width: 200px; 
    background-repeat: no-repeat;
    background-position: 50%;
`