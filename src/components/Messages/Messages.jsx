import "./messages.css";
export default function Messages(props) {
  const { messages, username } = props;

  // Converts Scaledrone UNIX timestamp local time
  function convertTimestamp(timestamp) {
    const hours = new Date(timestamp * 1000).getHours();
    let minutes = new Date(timestamp * 1000).getMinutes();
    {
      minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    }
    return `${hours}:${minutes}`;
  }

  return (
    <ul className="messages-container">
      {messages.map((message, index) => (
        <li
          className="message"
          data-author={message.member.clientData.name}
          key={index}
          style={{color: message.member.clientData.color, alignSelf: username === message.member.clientData.name ? 'flex-end' : 'flex-start'}}
        >
          <span className="message-text">{message.data}</span>
          <span className="message-author">
            {message.member.clientData.name}
          </span>
          <span className="message-timestamp">
            {convertTimestamp(message.timestamp)}
          </span>
        </li>
      ))}
    </ul>
  );
}
