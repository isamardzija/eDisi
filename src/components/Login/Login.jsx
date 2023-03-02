import { colors } from "../../assets/colors.json";

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
    <form onSubmit={onConnect}>
      {/* Channel ID */}
      <label htmlFor="channelID">Channel ID:</label>
      <input
        disabled
        type="text"
        name="channelID"
        id="channelID"
        defaultValue={defaultChannelID}
      />
      <br />
      {/* Room Name */}
      <label htmlFor="roomName">Room Name:</label>
      <input
        required
        type="text"
        name="roomName"
        id="roomName"
        defaultValue={defaultRoomName}
      />
      <br />
      {/* Username */}
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
      <br />
      {/* Color  */}
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
      <br />
      {/* Submit */}
      <button type="submit">{connection ? "Disconnect" : "Connect"}</button>
    </form>
  );
}
