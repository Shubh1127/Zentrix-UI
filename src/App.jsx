import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import ComponentPage from "./Pages/ComponentPage";
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />

        {/* Browse Components Route */}
        <Route path="/components" element={<Layout />}>
          <Route path=":componentName" element={<ComponentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;