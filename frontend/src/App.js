import SignIn from './pages/SignIn';
import Home from './pages/HomePage';
import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
import Dashboard from './pages/MainDash';
import GroupMembers from './pages/GroupMembers';

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/group-members" element={<GroupMembers />} />
          {/* <Route path="/add" element={<Add />} /> */}
        </Routes>
      </Router>
      
    </ChakraProvider>
  );
}

export default App;
