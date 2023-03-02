import Message from "../Message/Message";

import "./messages.css";

export default function Messages(props) {
  const { messages, username } = props;

  return (
    <ul className="messages-container">
      {messages.map((message, index) => (
        <Message message={message} index={index} username={username} />
      ))}
    </ul>
  );
}
