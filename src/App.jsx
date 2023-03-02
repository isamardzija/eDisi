// React
import { useState } from "react";
// Config
import { defaultChannelID, defaultRoomName } from "./config/config";
// Components
import { Login, Chat } from "./components";

function App() {
  // States
  const [connection, setConnection] = useState(false);
  const [username, setUsername] = useState("Ivan");
  const [color, setColor] = "red";

  // Functions
  const handleToggleConnection = (e) => {
    e.preventDefault();
    setConnection((connection) => !connection);
  };

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <h1>eDisi</h1>

      {/* If not connected, show Login component */}
      {!connection && (
        <Login
          connection={connection}
          username={username}
          color={color}
          defaultChannelID={defaultChannelID}
          defaultRoomName={defaultRoomName}
          onConnect={handleToggleConnection}
          onUsernameInput={handleUsernameInput}
        />
      )}

      {/* If connected, show Chat component */}
      {connection && (
        <Chat
          username={username}
          color={color}
          CHANNEL_ID={defaultChannelID}
          roomName={defaultRoomName}
          onDisconnectClick={handleToggleConnection}
        />
      )}
    </>
  );
}

export default App;
