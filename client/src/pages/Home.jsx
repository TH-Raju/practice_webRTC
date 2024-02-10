import { useEffect, useState } from "react";
import { useSocekt } from "../providers/Socket";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const { socket } = useSocekt();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [roomId, setRoomId] = useState();

  const handleRoomJoined = ({ roomId }) => {
    navigate(`/room/${roomId}`);
  };

  const handleJoinRoom = () => {
    socket.emit("join-room", { emailId: email, roomId });
  };

  useEffect(() => {
    socket.on("joined-room", handleRoomJoined);
  }, [socket]);

  return (
    <div className="homepage-container">
      <div className="input-container">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
          placeholder="Enter Your Email here"
        />
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          name=""
          id=""
          placeholder="Enter Room Code here"
        />
        <button onClick={handleJoinRoom}>Enter Room</button>
      </div>
    </div>
  );
};

export default HomePage;
