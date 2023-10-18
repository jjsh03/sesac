import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './store/bankReducer';

export default function BackPrac() {
  const cash = useSelector((state) => state.bank.cash);
  const [money, setMoney] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux 실습</h1>
      <hr />
      <h1>새싹은행</h1>
      <h3>잔액: {cash}원</h3>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <button onClick={() => dispatch(deposit(parseInt(money)), setMoney(0))}>
        입금
      </button>
      <button onClick={() => dispatch(withdraw(parseInt(money)), setMoney(0))}>
        출금
      </button>
    </div>
  );
}
