import Hero from "./components/Hero";
import Trust from "./components/Trust";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <Hero></Hero>
        <Trust></Trust>
      </div>
    </main>
  );
}
