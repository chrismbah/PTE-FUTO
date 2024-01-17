import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import CalculateGPA from "../../components/home/CalculateGPA";
import LearningResources from "../../components/home/LearningResources";
import CourseOutline from "../../components/home/CourseOutline"
import Blog from "../../components/home/Blog";
import Events from "../../components/home/Events";
import Footer from "../../components/footer/Footer"
export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <CalculateGPA />
     <LearningResources />
     <CourseOutline />
     <Blog />
     <Events />
     <Footer />

    </>
  );
}
