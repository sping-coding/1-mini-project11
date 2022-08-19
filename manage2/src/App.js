// import logo from './logo.svg';
import { useState } from 'react';
import { useRef, useCallback } from 'react';
import './App.css';
import JoinTemplate from './components/JoinTemplate';
import JoinInserts from './components/JoinInserts';
import JoinList from './components/JoinList';
// import { Value } from '../node_modules/sass/types/index';

function App() {
  const [joins, setJoins] = useState([]);

  // ref를 사용하여 변수 담기
  const nextId = useRef(1);

  const onInsert = useCallback(
    (value) => {
      const join = {
        key: nextId.current,
        id: value.id,
        password: value.password,
        email: value.email,
        gender: value.gender,
      };
      setJoins(joins.concat(join));
      nextId.current += 1;
    },
    [joins],
  );
  const onRemove = useCallback(
    (key) => {
      setJoins(joins.filter((join) => join.key !== key));
    },
    [joins],
  );

  return (
    <JoinTemplate>
      <JoinInserts onInsert={onInsert}></JoinInserts>
      <JoinList joins={joins} onRemove={onRemove}></JoinList>
    </JoinTemplate>
  );
}

export default App;
