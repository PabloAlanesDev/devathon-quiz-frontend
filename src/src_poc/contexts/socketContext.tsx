import React, { createContext, useContext } from 'react';
import io from 'socket.io-client';

// Creamos un contexto para el socket
const SocketContext = createContext(null);

// Creamos un componente proveedor que envuelve la aplicación
export const SocketProvider = ({ children }) => {
  // Define el room_id y user_id que deseas enviar al servidor
  const room_id = localStorage.getItem('room_id');
  const user_id = localStorage.getItem('user_id');

  // Crea la conexión del socket con las query strings room_id y user_id
  const socket = io('http://localhost:5000', {
    query: {
      room_id: room_id,
      user_id: user_id
    }
  });

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Un hook para consumir el contexto del socket
export const useSocket = () => {
  return useContext(SocketContext);
};
