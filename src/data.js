import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Azienda',
      /* links: [
        {
          text: 'Sass',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/landing/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/landing/mobile-app'),
        },
      ], */
      href: getPermalink(''),
    },
    {
      text: 'Lavorazioni',
      /* links: [
        {
          text: 'Tornitura',
          href: '#',
        },
        {
          text: 'Fresatura',
          href: '#',
        },
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ], */
      href: getPermalink('/lavorazioni'),
    },
    {
      text: 'Prototipazione',
      href: getPermalink('/prototipazione'),
    },
    {
      text: 'Contatti',
      href: getPermalink('/contatti'),
    },
  ],
  actions: [
    { type: 'button', text: 'Contatti', href: getPermalink('/contatti') }
  ],
};
  
export const footerData = {
  socialLinks: [
/*     { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' }, */
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200"> Oreuropa </a> · All rights reserved.
  `,
};
