import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Region from "./components/Dashboard/Region";
import Area from "./components/Dashboard/Area";
import CreateRegion from './components/Dashboard/CreateRegion';
import AreaCreate from './components/Dashboard/AreaCreate';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Region />}></Route>
          <Route path="area" element={<Area />}></Route>
          <Route path="regionCreate" element={<CreateRegion />}></Route>
          <Route path="areaCreate" element={<AreaCreate />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
