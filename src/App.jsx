import "./App.css";
import { Department } from "./Page/Department";
import { Home } from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import { Product } from "./Page/Product";
import { SingleProduct } from "./Page/SingleProduct";
import { From } from "./Page/Form";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/department" element={<Department />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/form" element={<From />}></Route>
      </Routes>
    </div>
  );
}

export default App;
