import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import Pnf from "./layout/Pnf";

function App() {
  return (
  <BrowserRouter>
    <Header/>
    <ToastContainer autoClose={3000} position={"top-right"}/>
    <Routes>
      <Route path={`/*`} element={<Pnf/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>    
  );
}

export default App;
