import { useEffect, useState } from "react";
import { Messages, SendMessage } from "../index.js";
import "./chat.css"

export default function Chat(props) {
  const { username, color, CHANNEL_ID, roomName, onDisconnectClick, fontSize, avatar } = props;
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    // Create Scaledrone connection
    const drone = new Scaledrone(CHANNEL_ID, {
      data: {
        name: username,
        color: color,
      },
    });
    setDrone(drone)
    const room = drone.subscribe(roomName);

    // Open a chatroom
    room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log(`Connected to ${room.name} as ${username}`);
    });

    // Listen for incoming messages
    room.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Close Scaledrone connection
    return () => {
      drone.close();
      console.log(`Connection to ${room.name} closed`);
    };
  }, []);

  // Send new message
  function handleMessageSubmit(e) {
    e.preventDefault();
    try {
      drone.publish({
        room: roomName,
        message: e.target[0].value,
        avatar: avatar
      });
    } catch (error) {
      return console.error(error);
    }
    e.target[0].value = ""

  }

  return (
    <main className="chat">
      <button type="button" onClick={onDisconnectClick}>
        Disconnect
      </button>
      <Messages messages={messages} username={username} fontSize={fontSize} avatar={avatar}></Messages>
      <SendMessage onMessageSubmit={handleMessageSubmit} />
    </main>
  );
}

