import MenuItem from "./MenuItem";
import styles from "./MainMenu.module.css";
function MainMenu() {
  return (
    <ul className={styles.ul}>
      <MenuItem url="/" label="Home" />

      <MenuItem url="/pricing" label="pricing" />

      <MenuItem url="/product" label="product" />
    </ul>
  );
}

export default MainMenu;
