import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
