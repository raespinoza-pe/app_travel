import Login from './page/login';
import Register from './page/register';
import Forgot from './page/forgot';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forgot" element={<Forgot/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
