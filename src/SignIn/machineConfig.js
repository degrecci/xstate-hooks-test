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
        ENTER_EMAIL: {
          actions: 'cacheEmail'
        },
        ENTER_PASSWORD: {
          actions: 'cachePassword'
        },
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
        ]
      }
    },
    awaitingResponse: {
      invoke: {
        src: 'requestSignIn',
        onDone: {
          target: 'signedIn'
        },
        onError: [
          {
            cond: 'isNoAccount',
            target: 'emailErr.noAccount'
          },
          {
            cond: 'isIncorrectPassword',
            target: 'passwordErr.incorrect'
          },
          {
            cond: 'isServiceErr',
            target: 'serviceErr'
          }
        ]
      }
    },
    emailErr: {
      onEntry: 'focusEmailInput',
      on: {
        ENTER_EMAIL: {
          target: 'dataEntry',
          actions: 'cacheEmail',
        },
      },
      initial: 'badFormat',
      states: {
        badFormat: {},
        noAccount: {},
      }
    },
    passwordErr: {
      onEntry: 'focusPasswordInput',
      on: {
        ENTER_PASSWORD: {
          target: 'dataEntry',
          actions: 'cachePassword'
        }
      },
      initial: 'tooShort',
      states: {
        tooShort: {},
        incorrect: {}
      }
    },
    serviceErr: {
      onEntry: 'focusSubmitBtn',
      on: {
        SUBMIT: {
          target: 'awaitingResponse'
        }
      }
    },
    signedIn: {
      type: 'final'
    }
  },
  onDone: {
    actions: 'onAuthentication'
  }
}

export default machineConfig;