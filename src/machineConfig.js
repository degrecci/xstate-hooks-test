const machineConfig = {
  id: 'signIn',
  initial: 'dataEntry',
  context: {
    email: '',
    password: '',
  },
  states: {
    dataEntry: {
      on: {
        ENTER_EMAIL: {},
        ENTER_PASSWORD: {},
        EMAIL_BLUR: {
          cond: 'isBadEmailFormat',
          target: 'emailErr.badFormat'
        },
        PASSWORD_BLUR: {
          cond: 'isPasswordShort',
          target: 'passwordErr.tooShort'
        },
        SUBMIT: [
          {
            cond: 'isBadEmailFormat',
            target: 'emailErr.badFormat'
          },
          {
            cond: 'isPasswordShort',
            target: 'passwordErr.tooShort',
          },
          {
          target: 'awaitingResponse',
          }
        ],
      },
    },
    awaitingResponse: {},
    emailErr: {
      on: {
        ENTER_EMAIL: {
          target: 'dataEntry',
        },
      },
      initial: 'badFormat',
      states: {
        badFormat: {},
        noAccount: {},
      },
    },
    passwordErr: {
      on: {
        ENTER_PASSWORD: {
          target: 'dataEntry',
        },
      },
      initial: 'tooShort',
      states: {
        tooShort: {},
        incorrect: {},
      }
    },
    serviceErr: {
      on: {
        SUBMIT: {
          target: 'awaitingResponse',
        },
      },
    },
    signedIn: {},
  }
}

export default machineConfig;