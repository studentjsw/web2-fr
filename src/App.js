import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/register';

import ForgetPassword from './components/login/ForgetPassword';
import Verification from './components/login/Verification';
import { UserProvider } from './context/UserContext';
import ChangePassword from './components/login/ChangePassword';
import { Success } from './components/login/success';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ForgetPassword' element={<ForgetPassword />} />
          <Route path='/Verification' element={<Verification />} />
          <Route path='/ChangePassword' element={<ChangePassword />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </UserProvider>

    </BrowserRouter>
  );
}

export default App;

