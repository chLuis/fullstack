import { Routes, Route } from "react-router-dom";
import { Home, CreateForm } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateForm />} />
    </Routes>
  );
}

export default App;
