import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import TravelPlanPage from "./TravelPlanPage/TravelPlanPage";



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/login_page" element={<LoginPage/>} />
          <Route path="/signup_page" element={<SignUpPage/>} />
          <Route path="/travelplan_page" element={<TravelPlanPage/>} />
      </Routes>
    </Router>
  );
}


export default App;
