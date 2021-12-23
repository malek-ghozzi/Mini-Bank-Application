import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Comptes from "./components/Admin/Comptes/Comptes";
import Creer from "./components/Admin/Creer/Creer";
import Navbaradmin from "./components/Admin/Navbaradmin";
import Transactions from "./components/Admin/Transactions/Transactions";
import Login from "./components/Login/Login";
import Navheader from "./components/Navheader/Navheader";
import Crediter from "./components/User/Crediter/Crediter";
import Debiter from "./components/User/Debiter/Debiter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navheader/> */}
        <Navbaradmin />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="crediter" element={<Crediter />} />
          <Route path="debiter" element={<Debiter />} />
          <Route path="creer" element={<Creer />} />
          <Route path="comptes" element={<Comptes />} />
          <Route path="transactions" element={<Transactions />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
