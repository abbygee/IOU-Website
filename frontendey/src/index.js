import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "@fontsource/jost/600.css"
import "@fontsource/inter/700.css"

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Jost, sans-serif',
  },

  components: {
    Link: {
      // 1. We can update the base styles
      baseStyle: {
        _hover: {
          textDecoration: "none",
        }, // Normally, it is "semibold"
      },
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default theme