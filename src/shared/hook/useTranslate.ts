import { IntlShape, useIntl } from 'react-intl';

export const useTranslate = (): {
  intl: IntlShape;
  formatMessage: any;
} => {
  const intl = useIntl();
  const formatMessage = (key: string | undefined): string =>
    intl.formatMessage({ id: key, defaultMessage: key });
  return {
    intl,
    formatMessage,
  };
};
