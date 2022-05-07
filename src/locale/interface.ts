import { Locale } from 'antd/lib/locale-provider';
import { MessageFormatElement } from 'react-intl';

export interface ILanguage {
  [key: string]: Record<string, string> | Record<string, MessageFormatElement[]> | undefined;
}

export interface ILocale extends Locale {
  [key: string]: any;
}
