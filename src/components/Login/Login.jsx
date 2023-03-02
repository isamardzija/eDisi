import { colors } from "../../assets/colors.json";
import "./login.css"

export default function Login(props) {
  const {
    connection,
    username,
    color,
    defaultChannelID,
    defaultRoomName,
    onConnect,
    onUsernameInput,
    onColorSelect,
    onRandomClick,
    onRandomSelect,
  } = props;
  return (
    <form className="login" onSubmit={onConnect}>
      {/* Channel ID */}
      <div>
        <label htmlFor="channelID">Channel ID:</label>
        <input
          disabled
          type="text"
          name="channelID"
          id="channelID"
          defaultValue={defaultChannelID}
        />
      </div>
      {/* Room Name */}
      <div>
        <label htmlFor="roomName">Room Name:</label>
        <input
          required
          type="text"
          name="roomName"
          id="roomName"
          defaultValue={defaultRoomName}
        />
      </div>
      {/* Username */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          required
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={onUsernameInput}
          minLength={3}
        />
        <button type="button" onClick={onRandomClick}>
          Randomize Username
        </button>
      </div>
      {/* Color  */}
      <div>
        <select
          style={{ backgroundColor: color, color: "white" }}
          name="color"
          id="color"
          onChange={onColorSelect}
        >
          {colors.map((color) => (
            <option
              style={{ backgroundColor: color, color: "white" }}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
        <button type="button" onClick={onRandomSelect}>
          Randomize Color
        </button>
      </div>
      {/* Submit */}
      <div><button type="submit">{connection ? "Disconnect" : "Connect"}</button></div>
    </form>
  );
}
