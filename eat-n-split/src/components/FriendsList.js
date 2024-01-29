import initialFriends from "../data/InitialFriends";
import Friend from "./Friend";
function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
export default FriendsList;
