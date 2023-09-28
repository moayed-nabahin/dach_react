import Header from "./components/Header";
import ManicureMonday from "./components/ManicureMonday";
import BokaTransformation from "./components/BokaTransformation";
import Services from "./components/Services";
import PopularCategory from "./components/PopularCategory";
import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
// import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div>
      <Header />
      <Services />
      {/* <ServiceCard /> */}
      <ManicureMonday />
      <BokaTransformation />
      <PopularCategory />
      <AboutUs />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
