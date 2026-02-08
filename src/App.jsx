import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Header from "./components/Header/Header";

import "./App.css";
import Login from "./pages/Login/Login";
import ProductsPage from "./pages/Products/ProductsPage";

function App() {
  return (
    <>
    
      
      <Routes>
        <Route index element={<Registration />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    
    </>
  );
}

export default App;
