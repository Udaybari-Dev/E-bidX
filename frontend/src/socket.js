// src/socket.js
import { io } from "socket.io-client";

const socket = io("https://e-bidx.onrender.com", {
  withCredentials: true,
});

export default socket;
