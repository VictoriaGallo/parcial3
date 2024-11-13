import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './store/slices/challengeSlice';

function ChallengeComponent() {
  const count = useSelector((state) => state.challenge.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(reset())}>Resetear</button>
    </div>
  );
}

export default ChallengeComponent;
