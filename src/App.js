import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSC from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProvince from "./provinces/AddProvince";
import EditUser from "./provinces/EditUser";
import ViewUser from "./provinces/ViewUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarSC />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProvince />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/view/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
