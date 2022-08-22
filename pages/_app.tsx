import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from '../src/components/Header';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: 62.5%;
  }

  * { 
    font-family: "Noto Sans","Noto Sans KR", sans-serif !important;
    box-sizing: border-box;
  }

  body{
    margin:0;
  }

  button, input {
    outline: none;
    padding: 0;
    margin: 0;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
