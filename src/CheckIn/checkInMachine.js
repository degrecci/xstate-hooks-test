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
        1000: 'plans',
      },
      on: {
        RESOLVE: 'plans',
        REJECT: 'loading',
      }
    },
    plans: {
      initial: 'yearly',
      on: {
        SELECT: 'confirmPlan',
      },
      states: {
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
        CANCEL: 'plans'
      }
    },
    closePlan: {
      on: {
        RESOLVE: 'billing',
        REJECT: 'plans',
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
};