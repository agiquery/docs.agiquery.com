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
        link: 'https://github.com/shuding/nextra'
    },
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