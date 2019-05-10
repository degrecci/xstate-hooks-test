import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400');

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;

    transition: all 300ms linear;
  }

  html {
    --font-size-l: 3rem;
    --font-size-m: 1rem;
    --font-size-s: 0.9rem;

    --line-height: 1.33;

    --color-background: hsla(360, 100%, 100%, 1);
    --color-txt-light: hsla(0, 0%, 46%, 1);
    --color-txt-dark: hsla(0, 0%, 26%, 1);
    --color-border: hsla(0, 0%, 62%, 1);
    --color-border-disabled: hsla(0, 0%, 62%, 0.25);
    --color-focus:hsla(207, 90%, 54%, 1);
    --color-err: hsla(4, 90%, 58%, 1);

    --opacity-disabled: 0;
    --opacity-placeholder: 0.5;
    --opacity-recede: 0.5;

    --shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100vh;

    display: flex;
  }

  /* rem size */
  body { font-size: 16px; }

  #root {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: var(--font-size-m);
    line-height: var(--line-height);
    font-family: 'Roboto', sans-serif;

    color: var(--color-txt-dark);
    background-color: var(--color-background);
  }

  [disabled] { pointer-events: none; }
`

export default GlobalStyles
