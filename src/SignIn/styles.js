import styled, { css } from 'styled-components'

export const Form = styled('form')`
  width: 100%;
  max-width: 22rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
`

export const H1 = styled('h1')`
  margin-bottom: 2rem;

  font-size: var(--font-size-l);
  font-weight: 100;
  text-align: center;
  text-transform: capitalize;

  ${({ fade }) =>
    fade &&
    css`
      opacity: var(--opacity-disabled);
    `}
`

export const Label = styled('label')`
  margin-bottom: 0.5rem;

  font-size: var(--font-size-s);
  color: var(--color-txt-light);
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: var(--opacity-disabled);
    `}
`

export const Recede = styled('span')`
  opacity: var(--opacity-recede);
`

export const Input = styled('input')`
  margin-bottom: 0.5rem;
  padding: 1rem;

  border: 2px solid var(--color-border);

  /* removes chrome's yellow background */
  &,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: var(--color-txt-dark);
    box-shadow: 0 0 0px 1000px var(--color-background) inset;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-background) inset;
  }

  :focus {
    outline: none;
    border-color: ${({ err }) =>
      err ? 'var(--color-err)' : 'var(--color-focus)'};
  }

  :disabled {
    opacity: var(--opacity-disabled);
  }

  ::placeholder {
    opacity: var(--opacity-placeholder);
  }

  ${({ err }) =>
    err &&
    css`
      border-color: var(--color-err);
    `}
`

export const Button = styled('button')`
  padding: 1rem;
  margin: 1rem 0 0.5rem;

  text-transform: uppercase;

  cursor: pointer;
  background: transparent;
  border: 2px solid var(--color-border);
  box-shadow: var(--shadow);

  :hover,
  :focus,
  :active {
    outline: none;
    color: var(--color-focus);
    border-color: var(--color-focus);
  }

  :disabled {
    opacity: ${({ loading }) => (loading ? 1 : 'var(--opacity-disabled)')};
    box-shadow: none;
    border-color: var(--color-border-disabled);
  }
`

export const ErrMsg = styled('p')`
  min-height: calc(var(--font-size-s) * var(--line-height));
  margin-bottom: 0.5rem;

  font-size: var(--font-size-s);
  color: var(--color-err);
`

export const MetaWrapper = styled('div')`
  padding: 1rem;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  color: white;
  background: hsla(0, 0%, 0%, 0.6);
`

export const Authenticated = styled('div')`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-background);
`

export const Pre = styled('pre')`
  margin-bottom: 1rem;

  font-size: var(--font-size-s);
  b {
    font-weight: bold;
  }
`
