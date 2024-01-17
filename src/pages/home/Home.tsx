import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import CalculateGP from "../../components/home/CalculateGP";
import LearningResources from "../../components/home/LearningResources";
import CourseOutline from "../../components/home/CourseOutline"
import Blog from "../../components/home/Blog";

export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <CalculateGP />
     <LearningResources />
     <CourseOutline />
     <Blog />
    </>
  );
}
