import React, { Component, createRef } from 'react';
import { Machine } from 'react-xstate-js';
import { actions, assign } from 'xstate';
import { isEmail } from 'validator';

import machineConfig from './machineConfig';
import isPasswordShort from './isPasswordShort';
import contactAuthService from './contactAuthService';

import {
  Form,
  H1,
  Label,
  Recede,
  Input,
  ErrMsg,
  Button,
  Authenticated,
  MetaWrapper,
  Pre
} from './styles'

const delay = func => setTimeout(() => func());

class SignIn extends Component {
  emailInputRef = createRef();
  passwordInputRef = createRef();
  submitBtnRef = createRef();

  machineOptions = {
    actions: {
      focusEmailInput: () => {
        delay(this.emailInputRef.current.focus());
      },
      focusPasswordInput: () => {
        delay(this.passwordInputRef.current.focus());
      },
      focusSubmitBtn: () => {
        delay(this.submitBtnRef.current.focus());
      },
      cacheEmail: assign((ctx, evt) => ({
        email: evt.value
      })),
      cachePassword: assign((ctx, evt) => ({
        password: evt.value
      })),
      onAuthentication: () => {
        console.log('user authenticated');
      },
      services: {
        requestSignIn: ctx => contactAuthService(ctx.email, ctx.password)
      }
    },
    guards: {
      isBadEmailFormat: ctx => !isEmail(ctx.email),
      isPasswordShort: ctx => isPasswordShort(ctx.password),
      isNoAccount: (ctx, evt) => evt.data.code === 1,
      isIncorrectPassword: (ctx, evt) => evt.data.code === 2,
      isServiceErr: (ctx, evt) => evt.data.code === 3,
    }
  };

  render() {
    return (
      <Machine config={machineConfig} options={this.machineOptions}>
        {({ service, state }) => {
          const disableEmail =
            state.matches('passwordErr') ||
            state.matches('awaitingResponse') ||
            state.matches('serviceErr');

          const disablePassword =
            state.matches('emailErr') ||
            state.matches('awaitingResponse') ||
            state.matches('serviceErr');

          const disableSubmit =
            state.matches('emailErr') ||
            state.matches('passwordErr') ||
            state.matches('awaitingResponse');

          const fadeHeading =
            state.matches('emailErr') ||
            state.matches('passwordErr') ||
            state.matches('awaitingResponse') ||
            state.matches('serviceErr');

            return (
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  service.send({type: 'SUBMIT'})
                }}
              >
                <H1></H1>
              </Form>
            )
        }}
      </Machine>
    )
  }
}

export default SignIn;