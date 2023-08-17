import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/Login/PrivateRoute'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DashAppointment from './components/Dashboard/Appointment/Appointment';


export const doctorsContext = createContext();

function App() {
  return (
    <doctorsContext.Provider value={[]}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="appointment" element={<DashAppointment />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </doctorsContext.Provider>
  );
}

export default App;
