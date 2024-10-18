import { AbstractIntlMessages } from "next-intl";

export interface ProvidersInterface {
  locale?: string;
  messages?: AbstractIntlMessages;
  children: React.ReactNode;
}
