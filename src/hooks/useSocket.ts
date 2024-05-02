import { SocketContext } from "@/context/socketContext";
import { useContext } from "react";

// Un hook para consumir el contexto del socket
export const useSocket = () => {
  return useContext(SocketContext);
};
