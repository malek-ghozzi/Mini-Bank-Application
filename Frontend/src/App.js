import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Navheader from "./components/Navheader/Navheader";
import Crediter from "./components/User/Crediter/Crediter";
import Debiter from "./components/User/Debiter/Debiter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navheader/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="crediter" element={<Crediter />} />
          <Route path="debiter" element={<Debiter />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
