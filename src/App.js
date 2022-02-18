import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/sign-up/sign-up';
import AdminDashboard from './components/admin-dashboard/admin-dashboard';
import UserDashboard from './components/UserDashboard/dashboard';
import ManagerDashboard from './components/ManagerDashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/sign-up' element={<SignUp/>} />
       <Route path='/admin-dashboard' element={<AdminDashboard/>} />
       <Route path='/user-dashboard' element={<UserDashboard/>} />
       <Route path='/manager-dashboard' element={<ManagerDashboard/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
