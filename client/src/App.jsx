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
        <Routes>
          <Route
            path="/room/:roomId"
            element={<h1>Hey there, you are in room</h1>}
          />
        </Routes>
      </SocketProvider>
    </div>
  );
};

export default App;
