import React from 'react'
import { useMachine } from 'use-machine';
import { checkInMachine, sideEffects } from './checkInMachine';

import {
  Cards,
  Card,
  H1,
  H2,
  Button,
} from '../styles'

import Match from './Match';

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
      <Match state="loading">
        Loading
      </Match>

      <Match state="plans">
        <Button type="checkbox" onClick={() => send('TOGGLE')}>
        {context.interval}
        </Button>
        <Cards>
          <Card>
            <H1>Plano 1</H1>
            {context.interval === 'yearly' && <H2>$15</H2>}
            {context.interval === 'monthly' && <H2>$19</H2>}
            <Button onClick={confirmPlan}>Contratar</Button>
          </Card>
          <Card>
            <H1>Plano 2</H1>
            {context.interval === 'yearly' && <H2>$35</H2>}
            {context.interval === 'monthly' && <H2>$39</H2>}
            <Button onClick={confirmPlan}>Contratar</Button>
          </Card>
        </Cards>
      </Match>

      <Match state="confirmPlan">
        <Card>
          <H1>Confirme seu plano</H1>
          <H2>{context.interval}</H2>
          <Button onClick={() => send('CANCEL')}>Cancelar</Button>
          <Button onClick={() => send('CLOSE_PLAN')}>Confirmar</Button>
        </Card>
      </Match>

      <Match state="closePlan">
        <Card>
          <H1>Confirmando Plano {context.interval}</H1>
        </Card>
      </Match>

      <Match state="billing">
        <Card>
          <H1>Billing Page</H1>
          <H2>{context.interval}</H2>
        </Card>
      </Match>
    </div>
  );
}

export default CheckIn;
