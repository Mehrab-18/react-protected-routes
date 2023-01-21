import { Routes , Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
