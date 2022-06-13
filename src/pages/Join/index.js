import React, { useEffect, useContext } from "react";
import SocketContext from "../../Context";

const JoinGame = ({ roomList }) => {
  const { socket } = useContext(SocketContext);

  console.log("roomzzzz", { roomList });

  useEffect(() => {
    console.log("Emiting get rooms client");
    socket.emit("getRooms");
  }, []);

  return (
    <div>
      {roomList ? (
        <>
          <ul>
            {roomList?.map((room) => (
              <li>{`${room[0].split("-")[1]}'s room`}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>No Games Found</div>
      )}
    </div>
  );
};

export default JoinGame;
