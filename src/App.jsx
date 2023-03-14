// React
import { useState, useRef } from "react";
// Config
import { defaultChannelID, defaultRoomName } from "./config/config";
// Components
import { Login, Chat, Settings } from "./components";
import { nouns, adjectives } from "./assets/data/words.json";
import { colors } from "./assets/data/colors.json";

function App() {
  // States
  const [connection, setConnection] = useState(false);
  const [username, setUsername] = useState(generateRandomUsername());
  const [color, setColor] = useState(pickRandomColor());
  const [fontSize, setFontSize] = useState("")
  const [avatar, setAvatar] = useState(`https://robohash.org/${username}`)


  // Functions
  const handleToggleConnection = (e) => {
    e.preventDefault();
    setConnection((connection) => !connection);
  };

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleColorSelect = (e) => {
    setColor(e.target.value);
  };

  function generateRandomUsername() {
    const num1 = Math.floor(Math.random() * adjectives.length);
    const num2 = Math.floor(Math.random() * nouns.length);
    const randomUsername = adjectives[num1] + nouns[num2];
    return randomUsername;
  }

  function pickRandomColor() {
    const num1 = Math.floor(Math.random() * colors.length);
    const randomColor = colors[num1];
    return randomColor;
  }

  function handleRandomClick() {
    setUsername(generateRandomUsername());
    setAvatar(`https://robohash.org/${username}`)

  }

  function handleRandomColor(e) {
    const randomColor = pickRandomColor();
    e.target.parentElement.previousElementSibling.value = randomColor;
    setColor(randomColor);
  }

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value)
  }
  return (
    <>
      <h1>eDisi</h1>
      <Settings fontSize={fontSize} onFontSizeChange={handleFontSizeChange} />

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
          onColorSelect={handleColorSelect}
          onRandomClick={handleRandomClick}
          onRandomSelect={handleRandomColor}
          avatar={avatar}
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
          fontSize={fontSize}
          avatar={avatar}
        />
      )}
    </>
  );
}

export default App;
