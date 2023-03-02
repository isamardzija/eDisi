import { useRef, useEffect } from "react";
import "./message.css"

export default function Message(props) {
  const { message, index, username } = props;
  const scrollMessage = useRef(null)

    useEffect(() => {
        scrollMessage.current.scrollIntoView()
    })

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
    <li ref={scrollMessage}
      className="message"
      data-author={message.member.clientData.name}
      key={index}
      style={{
        
        alignSelf:
          username === message.member.clientData.name
            ? "flex-end"
            : "flex-start",
      }}
    >
      <span className="message-text" style={{backgroundColor: message.member.clientData.color}}>{message.data}</span>
      <span className="message-author">{message.member.clientData.name}</span>
      <span className="message-timestamp">
        {convertTimestamp(message.timestamp)}
      </span>
    </li>
  );
}
