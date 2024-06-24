import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import EditProduct from "./pages/EditProduct.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import LoginTwo from "./pages/LoginTwo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login-two" element={<LoginTwo />} />
        <Route element={<SharedLayout />}>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/edit-product" element={<EditProduct />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;