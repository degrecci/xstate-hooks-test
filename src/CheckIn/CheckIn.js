import React from 'react'
import { useMachine } from 'use-machine';
import { checkInMachine, sideEffects } from './checkInMachine';

import {
  Cards,
  Toggle,
  Card,
  H1,
  Button,
} from '../styles'

const CheckIn = () => {
  const machine = useMachine(checkInMachine, sideEffects);

  console.log(machine);

  return (
    <div>
      {machine.state.matches('loading') ? `Loading`
      : (
        <>
          <Toggle type="checkbox"/>
          {` ${machine.context.interval}`}

          <Cards>
            <Card>
              <H1>Plano 1</H1>
              <Button>Contratar</Button>
            </Card>
            <Card>
              <H1>Plano 2</H1>
              <Button>Contratar</Button>
            </Card>
          </Cards>
        </>
      )}
    </div>
  );
}

CheckIn.propTypes = {

};

export default CheckIn;
