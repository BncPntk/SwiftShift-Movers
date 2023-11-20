import Hero from "./components/Hero";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <Steps />
      <CardList />
      <About />
      <Footer />
    </>
  );
}
