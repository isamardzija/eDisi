import { colors } from "../../assets/data/colors.json";
import "./login.css"

import {ArrowRepeat} from "../Icons";

const iconWidth = "32"
const iconHeight = "32"
const iconColor = "black"

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
        <label htmlFor="username">Username:</label>
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
          <ArrowRepeat iconWidth={iconWidth} iconHeight={iconHeight} color={iconColor} / >
        </button>
      </div>
      {/* Color  */}
      <div>
        <label htmlFor="color">Color:</label>
        <select
          style={{ backgroundColor: color, color: "white" }}
          name="color"
          id="color"
          onChange={onColorSelect}
        >
          {colors.map((color, index) => (
            <option key={index}
              style={{ backgroundColor: color, color: "white" }}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
        <button type="button" onClick={onRandomSelect}>
        <ArrowRepeat iconWidth={iconWidth} iconHeight={iconHeight} color={iconColor} / >
        </button>
      </div>
      {/* Submit */}
      <div><button type="submit">{connection ? "Disconnect" : "Connect"}</button></div>
    </form>
  );
}
