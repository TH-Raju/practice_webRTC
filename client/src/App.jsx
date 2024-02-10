import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
