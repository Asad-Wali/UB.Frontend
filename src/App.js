import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/sign-up/sign-up';
import AdminDashboard from './components/admin-dashboard/admin-dashboard';

function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/sign-up' element={<SignUp/>} />
       <Route path='/admin-dashboard' element={<AdminDashboard/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
