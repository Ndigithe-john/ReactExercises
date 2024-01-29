import Button from "./Button";
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑split with</label>
      <input type="text" />

      <label>🌆image URL</label>
      <input type="text" />

      <Button>Add Friend</Button>
    </form>
  );
}
export default FormAddFriend;
