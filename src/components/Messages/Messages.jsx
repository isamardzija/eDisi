export default function Messages(props) {
    const { messages } = props;
    return <ul className="messages-container">
      {messages.map((message, index) => (
          <li key={index}>{message.data}</li>
      ))}
  
    </ul>;
  }
  