import { useEffect } from "react";

export default function Chat(props) {
  const { CHANNEL_ID, roomName, connection } = props;
  useEffect(() => {

    // Create Scaledrone connection
    const drone = new Scaledrone(CHANNEL_ID);
    const room = drone.subscribe(roomName);

    // Open a chatroom
    room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log(`Connected to ${room.name}`);
    });

    // Close Scaledrone connection    
    return () => {
      drone.close();
      console.log(`Connection to ${room.name} closed`);
    };
  }, [connection]);
  return (
    <>
      <h1>Welcome</h1>
    </>
  );
}
