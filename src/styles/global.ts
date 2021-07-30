import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --red: #E52E4D;
    --blue: #5429cc;
    --green: #33CC95;
    
    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --shape: #FFFFFF;
    --background: #f0f2f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px;
  html {
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  // REM = 1rem = vai pegar o tamanho definido no html, por padrão é 16px;

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;


    display: flex;
    justify-content:center;
    align-items:center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    border: 0;
    border-radius: 0.25rem;
    right: 1.5rem;
    top: 1.5rem;
    padding: .5rem;
    background: transparent;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }

`;
