import { useEffect, useState } from "react";
import {Messages} from "../index.js";

export default function Chat(props) {
  const { CHANNEL_ID, roomName, onDisconnectClick } = props;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create Scaledrone connection
    const drone = new Scaledrone(CHANNEL_ID);
    const room = drone.subscribe(roomName);

    // Open a chatroom
    room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log(`Connected to ${room.name}`);
    });

    // Listening for incoming messages
    room.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Close Scaledrone connection
    return () => {
      drone.close();
      console.log(`Connection to ${room.name} closed`);
    };
  }, []);

  return (
    <>

      <button type="button" onClick={onDisconnectClick}>
        Disconnect
      </button>
      <Messages messages={messages}></Messages>
    </>
  );
}

