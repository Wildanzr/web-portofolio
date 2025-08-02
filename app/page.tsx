import About from "./_components/about";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import Jumbotron from "./_components/jumbotron";
import Navbar from "./_components/navbar";
import Portfolio from "./_components/portfolio";
import Services from "./_components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <Jumbotron />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
