import Chicago from "../../components/home/chicago/Chicago";
import CustomersSay from "../../components/home/customersSay/CustomersSay";
import Hero from "../../components/home/hero/Hero";
import Specials from "../../components/home/specials/Specials";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />
    </section>
  );
};

export default Home;
