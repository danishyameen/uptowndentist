// import Image from "next/image";
// import styles from "./page.module.css";
// import Logo from "@/app/img/logo-new.gif"

import AboutPage from "./about/page";
import HeroSection from "./components/hero-section/HeroSection";
import ContactPage from "./contact/page";
import GalleryPage from "./gallery/page";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection/>
      </div>
      <div className="about">
        <AboutPage/>
      </div>

      <div className="gallery">
        <GalleryPage/>
      </div>

      <div className="contact">
        <ContactPage/>
      </div>

    </main>
  );
}
