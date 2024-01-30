import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import page from "./assets/page.svg";
import Container from "./components/container/Container";
import Services from "./components/Services/Services";
export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Container>
        <Image
          src={page}
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(80deg, rgba(255,255,255,1) 20%, rgba(70,152,190,1) 60%, rgba(20,76,104,1) 100%)",
          }}
        />
        <Services />
      </Container>
    </div>
  );
}
