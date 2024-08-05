import {DomainsConfig} from 'next-intl/routing';
 
export const locales = ['en', 'pt'] as const;
 
export const domains: DomainsConfig<typeof locales> = [
  {
    domain: 'antoniozanotti.com',
    defaultLocale: 'en',
    locales: ['en']
  },
  {
    domain: 'antoniozanotti.com.br',
    defaultLocale: 'pt',
    locales: ['pt']
  }
];