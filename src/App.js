import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./pages/Home";
import CreateGame from "./pages/Create";
import JoinGame from "./pages/Join";
import SocketContext from "./Context";
import { useState } from "react";

function App() {
  const [roomList, setRoomList] = useState([]);

  const socket = io.connect("http://localhost:5050", {
    withCredentials: true,
    extraHeaders: {
      "Access-Control-Allow-Origin": "true",
    },
  });

  socket.on("connect", () => {
    console.log("Connected!!!!");

    //Receiving Room List
    socket.on("roomList", function (payload) {
      console.log("Received rooms:", payload);
      setRoomList(payload);
    });
  });

  return (
    <SocketContext.Provider value={{ socket: socket }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="create" element={<CreateGame />} />
            <Route path="join" element={<JoinGame roomList={roomList} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
