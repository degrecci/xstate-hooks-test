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
  const { send, state, context } = useMachine(checkInMachine, sideEffects);

  const confirmPlan = () => send('SELECT');

  const resolvePlanConfirmation = () => new Promise((resolve) => setTimeout(resolve, 500));

  state.matches('closePlan') &&
    resolvePlanConfirmation()
      .then(() => send('RESOLVE'))
      .catch(() => send('REJECT'))

  return (
    <div>
      {state.matches('loading') && `Loading`}
      {state.matches('plans') && (
        <>
          <Toggle type="checkbox" onClick={() => send('TOGGLE')}/>
          {` ${context.interval}`}

          <Cards>
            <Card>
              <H1>Plano 1</H1>
              <Button onClick={confirmPlan}>Contratar</Button>
            </Card>
            <Card>
              <H1>Plano 2</H1>
              <Button onClick={confirmPlan}>Contratar</Button>
            </Card>
          </Cards>
        </>
      )}
      {state.matches('confirmPlan') && (
        <Card>
          <H1>Confirm your plan</H1>
          <Button onClick={() => send('CANCEL')}>Cancelar</Button>
          <Button onClick={() => send('CLOSE_PLAN')}>Confirmar</Button>
        </Card>
      )}
      {state.matches('closePlan') &&
        <Card>
          <H1>Confirmando Plano</H1>
        </Card>
      }
      {state.matches('billing') &&
        <Card>
          <H1>Billing Page</H1>
        </Card>
      }
    </div>
  );
}

export default CheckIn;
