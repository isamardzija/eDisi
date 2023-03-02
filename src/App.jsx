// React
import { useState } from "react";
// Config
import { defaultChannelID, defaultRoomName } from "./config/config";
// Components
import { Login, Chat } from "./components";

function App() {
  // States
  const [connection, setConnection] = useState(false);

  // Functions
  const handleToggleConnection = (e) => {
    e.preventDefault();
    setConnection((connection) => !connection);
  };

  return (
    <>
      <h1>eDisi</h1>

      {/* If not connected, show Login component */}
      {!connection && (
        <Login
          connection={connection}
          defaultChannelID={defaultChannelID}
          defaultRoomName={defaultRoomName}
          onConnect={handleToggleConnection}
        />
      )}

      {/* If connected, show Chat component */}
      {connection && (
        <Chat
          CHANNEL_ID={defaultChannelID}
          roomName={defaultRoomName}
          onDisconnectClick={handleToggleConnection}
        />
      )}
    </>
  );
}

export default App;
