import { useEffect, useState } from "react";
import "./sendmessage.css";
export default function SendMessage(props) {
  const { onMessageSubmit } = props;
  const [disableInput, setDisableInput] = useState(true);

  // Prevent using the new message input for 2 seconds upon connecting
  // This is done in order to allow the connection to Scaledrone to be established
  // This can probably done without hardcoding (asnyc?)
  setTimeout(() => {
    setDisableInput(false);
  }, 2000);

  return (
    <form className="send-message" onSubmit={onMessageSubmit}>
      <input
        disabled={disableInput}
        type="text"
        name="new-message"
        id="new-message"
      />
      <button type="submit">Send</button>
    </form>
  );
}
