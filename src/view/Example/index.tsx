import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../core/api/api';
import { decrement, increment, incrementByAmount } from '../../modules/example/exampleSlice';
import ChangeLanguage from '../../shared/components/ChangeLanguage';
import { useTranslate } from '../../shared/hook/useTranslate';
import { RootState } from '../../store/configureStore';

const Example: React.FC = () => {
  const dispatch = useDispatch();
  const { formatMessage } = useTranslate();
  const count = useSelector((state: RootState) => state.example.value);
  const exampleAPI = (): any => {
    api.get('products').then(res => {
      console.debug('Res', res);
      return res;
    });
  };
  return (
    <div>
      <p> Value: {count}</p>
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <Button onClick={() => dispatch(decrement())}>decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(5))}>increment By a mount</Button>
      {formatMessage('common.save')}
      <ChangeLanguage />
      <Button onClick={exampleAPI}>Call API</Button>
    </div>
  );
};

export default Example;
