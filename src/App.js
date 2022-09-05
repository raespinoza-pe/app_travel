import Home from './page/index'
import Login from './page/usuario/login'
import Register from './page/usuario/register'
import Forgot from './page/usuario/forgot'
import Usuario from './page/usuario/usuario'
import Password from './page/usuario/password'
import Destino from './page/destino/index'
import SaveDestino from './page/destino/save'
import UpdateDestino from './page/destino/update'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContex";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/usuario" element={<Usuario />}></Route>
          <Route path="/password" element={<Password />}></Route>
          <Route path="/destino" element={<Destino />}></Route>
          <Route path="/destino/new" element={<SaveDestino />}></Route>
          <Route path="/destino/:id" element={<UpdateDestino />} ></Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
