import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './styles/index.scss';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RootState } from './core/store/configureStore';
import locale from './locale';
import Example from './view/Example';
import Homepage from './view/Homepage';
import PageNotFound from './view/PageNotFound';

const App: React.FC = () => {
  const language = useSelector((state: RootState) => state.setting.language);
  const memoLanguageData = React.useMemo(() => locale[language], [language]);
  return (
    <IntlProvider locale={language} messages={memoLanguageData}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/example" element={<Example />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="teams/:teamId" element={<Homepage />} />
        <Route path="teams/new" element={<Example />} />
      </Routes>
    </IntlProvider>
  );
};

export default App;
