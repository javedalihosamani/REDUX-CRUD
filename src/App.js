import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import Pnf from "./layout/Pnf";
import Home from "./components/home/Home";
import Create from "./components/create/Create";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={3000} position={"top-right"} />
      <Routes>
        <Route path={``} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/create`} element={<Create />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
