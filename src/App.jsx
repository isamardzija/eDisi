import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";

function App() {
  // Scaledrone inputs
  const CHANNEL_ID = "684Ypvob0AZJQqXC";
  const roomName = "observable-pocetna";

  // States
  const [connection, setConnection] = useState(false);
  const [messages, setMessages] = useState([]);

  // Functions
  const handleConnect = (e) => {
    e.preventDefault();
    setConnection((connection) => !connection);
  };

  return (
    <>
      <h1>eDisi</h1>
      <form onSubmit={handleConnect}>
        <label htmlFor="channelID">Channel ID:</label>
        <input
          type="text"
          name="channelID"
          id="channelID"
          defaultValue={CHANNEL_ID}
        />
        <br />
        <label htmlFor="roomName">Room Name:</label>
        <input
          type="text"
          name="roomName"
          id="roomName"
          defaultValue={roomName}
        />
        <br />
        <button type="submit">{connection ? "Disconnect" : "Connect"}</button>
      </form>
      {connection && (
        <Chat
          CHANNEL_ID={CHANNEL_ID}
          roomName={roomName}
          connection={connection}
        />
      )}
    </>
  );
}

export default App;
