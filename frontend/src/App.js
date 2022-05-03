import SignIn from './pages/SignIn';
import Home from './components/HomePage';
import Register from './pages/Register';
import './App.css';
import { ChakraProvider} from '@chakra-ui/react';
import theme from './index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
      
    </ChakraProvider>
  );
}

export default App;
