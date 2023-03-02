export default function Messages(props) {
  const { messages } = props;
  return (
    <ul className="messages-container">
      {messages.map((message, index) => (
        <li key={index}>
          <span className="message-text">{message.data}</span>
          <span className="message-author">{message}</span>
        </li>
      ))}
    </ul>
  );
}
