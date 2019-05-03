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
        EMAIL_BLUR: {},
        SUBMIT: {
          target: 'awaitingResponse',
        },
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