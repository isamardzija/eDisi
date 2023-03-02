export default function Login(props) {
    const { connection, defaultChannelID, defaultRoomName, onConnect } = props;
    return (
      <form onSubmit={onConnect}>
        <label htmlFor="channelID">Channel ID:</label>
        <input
          type="text"
          name="channelID"
          id="channelID"
          defaultValue={defaultChannelID}
        />
        <br />
        <label htmlFor="roomName">Room Name:</label>
        <input
          type="text"
          name="roomName"
          id="roomName"
          defaultValue={defaultRoomName}
        />
        <br />
        <button type="submit">{connection ? "Disconnect" : "Connect"}</button>
      </form>
    );
  }
  