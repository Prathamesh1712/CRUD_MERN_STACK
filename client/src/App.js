
import "./App.css";
import Home from "./components/Home";
import Alluser from "./components/Alluser";
import Navbar from "./components/Navbar";
import Adduser from "./components/Adduser";
import {BrowserRouter , Route, Link, Routes, Navigate} from 'react-router-dom';
import EditUser from "./components/EditUser";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes><Route path="/" element={<Home />}></Route>
    <Route path="all" element={<Alluser></Alluser>}></Route>
    <Route path="add" element={<Adduser></Adduser>}></Route>
    <Route path="/edit/:id" element={<EditUser></EditUser>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
