import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import locale from './locale';
import { RootState } from './store/configureStore';
import Example from './view/Example';

const App: React.FC = () => {
  const language = useSelector((state: RootState) => state.setting.language);
  const memoLanguageData = React.useMemo(() => locale[language], [language]);
  return (
    <IntlProvider locale={language} messages={memoLanguageData}>
      <Example />
    </IntlProvider>
  );
};

export default App;
