import { Link, Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function Room() {
  const { roomId } = useParams<RoomParams>();

  if (!roomId || roomId.trim() === "") {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <h1>Room</h1>
      <p>Welcome to the room page!</p>
      <p>{roomId}</p>

      <Link to="/">Go to Create Room</Link>
    </div>
  );
}
