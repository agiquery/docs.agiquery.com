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
import { useRouter } from "next/router";
import useLocalesMap from "./components/use-locales-map";

export default {
    logo: <span>Agile Query | Docs</span>,
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