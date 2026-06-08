import { CTA } from "./components/cta";
import { Featured } from "./components/featured";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default () => {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <CTA />
      <Footer />
    </div>
  );
};
