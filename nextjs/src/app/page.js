import Image from "next/image";
import Styles from "./page.module.css";

export default function Home() {
  return (
    <div className={Styles.header}>
      <main>
        <h1 className={Styles.main}>Welcome to my Home page</h1>
      </main>
    </div>
  );
}
