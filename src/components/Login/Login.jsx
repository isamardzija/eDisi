export default function Login(props) {
  const { connection, username, color, defaultChannelID, defaultRoomName, onConnect, onUsernameInput } = props;
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
      <input required type="text" name="username" id="username" defaultValue={username} onChange={onUsernameInput} minLength={3} />
      <br />
      {/* Color  */}
      <select name="color" id="color" >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
      <br />
      {/* Submit */}
      <button type="submit">{connection ? "Disconnect" : "Connect"}</button>
    </form>
  );
}
