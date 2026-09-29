import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Independent from "./components/Independent";
import Services from "./components/Services";
import Trust from "./components/Trust";

export default function Home() {
  return (
      <main className="flex flex-col">
        <Hero></Hero>
        <div className="hidden lg:block"><Trust></Trust></div>
        <About></About>
        <Independent></Independent>
        <Experience></Experience>
        <Services></Services>
        <Contact></Contact>
      </main>
  );
}
