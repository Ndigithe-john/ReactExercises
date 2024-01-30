import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";
import initialFriends from "./data/InitialFriends";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  function handleShowAddFriendModal() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
        <Button onClick={handleShowAddFriendModal}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
