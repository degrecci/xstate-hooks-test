import React from 'react';
import { useMachine } from '@xstate/react';
import checkInMachine from './checkInMachine';

export default function Match({ children, state }) {
  const [current] = useMachine(checkInMachine);
  const expected = Array.isArray(state) ? state : [state];

  return expected.some(value => current.matches(value))
    ? <>{children}</>
    : null;
};