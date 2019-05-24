import { assign } from 'xstate/lib/actions';

const changeIntervalToYearly = assign({
  interval: 'yearly'
});

const changeIntervalToMonthly = assign({
  interval: 'monthly'
});

export const checkInMachine = {
  id: 'checkin',
  initial: 'loading',
  context: { interval: 'yearly' },
  states: {
    loading: {
      after: {
        1000: 'plans.yearly',
      },
      on: {
        RESOLVE: 'plans.yearly',
        REJECT: 'loading',
      }
    },
    plans: {
      on: {
        SELECT: 'confirmPlan',
      },
      states: {
        initial: 'yearly',
        yearly: {
          onEntry: 'changeIntervalToYearly',
          on: {
            TOGGLE: 'monthly',
          }
        },
        monthly: {
          onEntry: 'changeIntervalToMonthly',
          on: {
            TOGGLE: 'yearly',
          }
        }
      }
    },
    confirmPlan: {
      on: {
        CLOSE_PLAN: 'closePlan',
        CANCEL: 'plans.yearly'
      }
    },
    closePlan: {
      on: {
        RESOLVE: 'billing',
        REJECT: 'plans.yearly',
      }
    },
    billing: {
      type: 'final'
    }
  }
}

export const sideEffects = {
  actions: {
    changeIntervalToYearly,
    changeIntervalToMonthly,
  },
  guards: {
    chosedInterval: (context => context.interval === 'yearly' ? 'plans.yearly' : 'plans.montlhy')
  }
};