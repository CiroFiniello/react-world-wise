import Map from "../components/Map";
import Siderbar from "../components/Siderbar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Siderbar />
      <Map />
    </div>
  );
}

export default AppLayout;
