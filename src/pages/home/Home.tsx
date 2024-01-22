import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import CalculateGPA from "../../components/home/CalculateGPA";
import LearningResources from "../../components/home/LearningResources";
import CourseOutlines from "../../components/home/CourseOutlines"
import Blog from "../../components/home/Blog";
import Events from "../../components/home/Events";
import Footer from "../../components/footer/Footer"
export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <CalculateGPA />
     <CourseOutlines />
     <LearningResources />
     <Blog />
     <Events />
     <Footer />

    </>
  );
}
