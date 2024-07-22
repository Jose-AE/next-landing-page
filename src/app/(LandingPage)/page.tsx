import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Test from "./components/Test";

export default function Home() {
  return (
    <>
      <div id="about">
        <Hero />
        <Features />
      </div>

      <Test id="pricing"></Test>
      <Reviews />
    </>
  );
}
