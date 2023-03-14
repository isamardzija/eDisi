import Message from "../Message/Message";

import "./messages.css";

export default function Messages(props) {
  const { messages, username, fontSize, avatar } = props;

  return (
    <ul className="messages-container container">
      {messages.map((message, index) => (
        <Message
          message={message}
          index={index}
          username={username}
          fontSize={fontSize}
          avatar={avatar}
        />
      ))}
    </ul>
  );
}
