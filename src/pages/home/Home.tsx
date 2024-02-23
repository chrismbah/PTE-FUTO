import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import Blog from "../../components/home/Blog";
import Gallery from "../../components/home/Gallery";
import Services from "../../components/home/Services"
import Footer from "../../components/footer/Footer"
export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Services />
     <Gallery />
     <Blog />
     <Footer />
    </>
  );
}
