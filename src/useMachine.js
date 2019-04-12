import { useState, useRef, useEffect } from 'react';
import { interpret } from 'xstate';

export function useMachine(machine) {
  const [current, setCurrent] = useState(machine.initialState);
  const serviceRef = useRef(null);

  if (serviceRef.current === null) {
    serviceRef.current = interpret(machine).onTransition(state => {
      if (state.changed) {
        setCurrent(state);
      }
    })
  }


  const service = serviceRef.current;

  useEffect(() => {
    service.start();

    return () => {
      service.stop();
    };
  }, []);

  return [current, service.send];
}