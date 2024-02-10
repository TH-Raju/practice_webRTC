import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { SocketProvider } from "./providers/Socket";
const App = () => {
  return (
    <div>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </SocketProvider>
    </div>
  );
};

export default App;
