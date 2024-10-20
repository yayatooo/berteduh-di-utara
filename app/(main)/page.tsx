import { Navbar } from "@/components/Navbar";
import Home from "../module/Home";
import Feature from "../module/Feature";
import Menu from "../module/Menu";
import About from "../module/About";
import Contact from "../module/Contact";
import { Footer } from "@/components/Footer";

export default function page() {
  return (
    <main>
      <Navbar />
      <Home/>
      <Feature />
      <Menu />
      <About />
      <Contact/>
      <Footer />
    </main>
  );
}
