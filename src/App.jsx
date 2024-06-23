import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import EditProduct from "./pages/EditProduct.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
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