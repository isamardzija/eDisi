import { useEffect, useState } from "react";
import { Messages } from "../index.js";

export default function Chat(props) {
  const { username, color, CHANNEL_ID, roomName, onDisconnectClick } = props;
  const [messages, setMessages] = useState([]);
  let drone;

  useEffect(() => {
    // Create Scaledrone connection
    drone = new Scaledrone(CHANNEL_ID, {
      data: {
        name: "testName",
        color: "red",
      },
    });
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
    e.preventDefault()
    drone.publish({
      room: roomName,
      message: e.target[0].value,
    });
  }

  return (
    <>
      <button type="button" onClick={onDisconnectClick}>
        Disconnect
      </button>
      <Messages messages={messages}></Messages>
      <SendMessage onMessageSubmit={handleMessageSubmit} />
    </>
  );
}

function SendMessage(props) {
  const { onMessageSubmit } = props;
  return (
    <form onSubmit={onMessageSubmit}>
      <input type="text" name="new-message" id="new-message" />
      <button type="submit">Send</button>
    </form>
  );
}
