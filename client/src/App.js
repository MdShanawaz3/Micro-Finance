import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import '@coreui/coreui/dist/css/coreui.min.css'
import Footer from './components/Footer';
import Main from "./components/Main"
import Addmember from './components/Addmember';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/addmember" element={<Addmember />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
