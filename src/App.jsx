import { BrowserRouter, Routes, Route } from "react-router-dom";

// ---- Pages ----
import HomePage from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
