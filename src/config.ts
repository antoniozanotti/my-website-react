import {DomainsConfig} from 'next-intl/routing';
 
export const locales = ['en', 'pt'] as const;
 
export const domains: DomainsConfig<typeof locales> = [
  {
    domain: 'antoniozanotti.com',
    defaultLocale: 'en',
    locales: ['en']
  },
  {
    domain: 'antoniozanotti.com',
    defaultLocale: 'pt',
    locales: ['pt']
  }
];