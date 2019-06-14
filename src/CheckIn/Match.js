import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import { checkInMachine } from './checkInMachine';

export default function Match({ children, state }) {
  const [current] = useMachine(Machine(checkInMachine));
  const expected = Array.isArray(state) ? state : [state];
  console.log(current);

  return expected.some(value => current.matches(value))
    ? <>{children}</>
    : null;
};