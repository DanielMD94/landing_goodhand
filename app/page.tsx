import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Homecards from "./Homecards";
import Footer from "./Footer";

export default function Home() {
  return (
    <div id="landingGridContainer">
      <Navbar />
      <Hero />
      <Homecards />
      <Footer />
    </div>
  );
}
