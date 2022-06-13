import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SocketContext from "../../Context";

const Home = () => {
  const { socket } = useContext(SocketContext);

  const createGameHandler = () => {
    console.log("create emit client");
    socket.emit("create", "player1");
  };
  return (
    <div>
      <Link to="/create">
        <button onClick={createGameHandler}>Create Game</button>
      </Link>
      <Link to="/join">
        <button>Join Game</button>
      </Link>
    </div>
  );
};

export default Home;
