import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";

import ComponentPage from "./Pages/ComponentPage";
import './App.css'
import Signup from "./auth/Signup/Signup";
import Button from "./Components/AddToCartButton";
function App() {
  return (
    
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />

        {/* Browse Components Route */}
        <Route path="/components" element={<Layout />}>
          <Route path=":componentName" element={<ComponentPage />} />
        </Route>
        <Route path="/button" element={<Button/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<h1 className="text-center mt-[40vh]">404 Page not found</h1>} />
      </Routes>
  );
}

export default App;