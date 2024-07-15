import Image from "next/image";
import styles from "./page.module.css";
import MyNavbar from "./Navbar/index.client";
import Hero from "./Hero";
import Homecards from "./HomeCards/index.client";
import Footer from "./Footer";

export default function Home() {
  return (
    <div id="landingGridContainer">
      <MyNavbar />
      <Hero />
      <Homecards />
      <Footer />
    </div>
  );
}
