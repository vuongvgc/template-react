import { Select } from 'antd';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LANGUAGE } from '../../../config';
import { changeLanguage } from '../../../modules/setting/settingSlice';
import { RootState } from '../../../store/configureStore';

const ChangeLanguage: React.FC = () => {
  const language = useSelector((state: RootState) => state.setting.language);
  const dispatch = useDispatch();
  return (
    <div className="change-language-box">
      <Select value={language} onChange={value => dispatch(changeLanguage(value))}>
        {LANGUAGE.map((lang: any) => (
          <Select.Option value={lang.value} key={`${lang}-${Date.now()}`}>
            {`${lang.label}`}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default memo(ChangeLanguage);
