import { createGlobalStyle } from 'styled-components';
import reset from 'reset-css';

const GlobalStyle = createGlobalStyle`
    ${reset}; 
    * {
      font-family: 'Noto Sans KR', sans-serif;
      line-height: 1.4;
    }

    body {
      background-color: #eee;
    }

    button{
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;
      color: inherit;
      font: inherit;
    }

    input{
      border: none;
      padding: 0 10px;
    }

    input:focus {
      outline: none;
    }
`;

export default GlobalStyle;
