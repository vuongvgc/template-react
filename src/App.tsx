import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, incrementByAmount } from './modules/example/exampleSlice';
import { RootState } from './store/configureStore';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.example.value);
  return (
    <div>
      <p> Value: {count}</p>
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <Button onClick={() => dispatch(decrement())}>decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(5))}>increment By a mount</Button>
    </div>
  );
};

export default App;
