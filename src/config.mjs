import defaultImage from './assets/images/Azienda1.jpg';

const CONFIG = {
  name: 'Oreuropa',

  origin: 'https://oreuropa.it',
  basePathname: '/',
  trailingSlash: false,

  title: 'Oreuropa',
  description:
    'Produzione gioielli, semilavorati e accessori moda dal 1989',
  defaultImage: defaultImage,

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'it',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('it', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  // googleSiteVerificationId: '',

  blog: {
    disabled: true,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
