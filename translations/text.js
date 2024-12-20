/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN" | "es-ES" | "fr-FR" | "pt-BR" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "zh-CN": "简体中文",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "React Hooks for Data Fetching",
  "zh-CN": "用于数据请求的 React Hooks 库"
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    realtime: "Realtime",
    suspense: "Suspense",
    pagination: "Pagination",
    backendAgnostic: "Backend Agnostic",
    renderingStrategies: "SSR / SSG Ready",
    typescript: "TypeScript Ready",
    remoteLocal: "Remote + Local",
  },
  "fr-FR": {
    lightweight: "Léger",
    realtime: "Temps réel",
    backendAgnostic: "Indépendant du Backend",
  },
  "pt-BR": {
    lightweight: "Leve",
    realtime: "Tempo-real",
    suspense: "Suspense",
    pagination: "Paginação",
    backendAgnostic: "Backend Agnóstico",
    renderingStrategies: "Pronto para SSR / SSG",
    typescript: "Pronto para TypeScript",
    remoteLocal: "Remoto + Local",
  },
  ru: {
    lightweight: "Лёгкий",
    realtime: "В реальном времени",
    suspense: "Задержка",
    pagination: "Пагинация",
    backendAgnostic: "Бэкэнд-независимый",
    renderingStrategies: "SSR / SSG",
    typescript: "TypeScript",
    remoteLocal: "Удалённо + Локально",
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "zh-CN": "Agile Query - 解锁数据的潜力：即席查询",
  "en-US": "Agile Query - Unlocking the Potential of Data: Ad-Hoc Queries"
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "zh-CN": "有疑问？给我们反馈 →"
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "zh-CN": "在 GitHub 上编辑本页 →"
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "swr", text: "Powered by" },
  "zh-CN": { utmSource: "swr_zh-cn", text: "由", suffix: "驱动" }
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "zh-CN": "导航",
  "en-US": "On This Page"
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "zh-CN": "搜索文档...",
  "en-US": "Search documentation..."
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "zh-CN": "最后更新于",
  "en-US": "Last updated on"
};
