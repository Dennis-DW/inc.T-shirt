import {
  Hero,
  PopularProducts,
  NewProducts,
  Services,
  SpecialOffer,
  Testimonials,
  Subscribe,
  Footer,
} from "./Sections";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <NewProducts />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <Testimonials />
      </section>
      <section className="padding-x sm:py32 py16 w-full">
        <Subscribe />
      </section>
      <section className="bg-smoke">
        <Footer />
      </section>
    </main>
  );
};

export default App;
