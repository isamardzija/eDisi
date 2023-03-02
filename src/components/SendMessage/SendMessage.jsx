export default function SendMessage(props) {
    const { onMessageSubmit } = props;
    return (
      <form onSubmit={onMessageSubmit}>
        <input type="text" name="new-message" id="new-message" />
        <button type="submit">Send</button>
      </form>
    );
  }
  