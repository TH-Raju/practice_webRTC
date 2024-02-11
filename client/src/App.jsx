import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { SocketProvider } from "./providers/Socket";
import RoomPage from "./pages/Room";
import PeerProvider from "./providers/Peer";
const App = () => {
  return (
    <div>
      <SocketProvider>
        <PeerProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
        </PeerProvider>
      </SocketProvider>
    </div>
  );
};

export default App;
