import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Footer from "./Components/Footer";
import Newsletter from "./Components/Newsletter";
import RandF from "./Components/RandF";
import PageHeading from "./Components/PageHeading";
import Creator from "./Components/Creator";
import Scrolly from "./Components/Scrolly";

function App() {
  return (
    <>
      <TopNavbar />
      <PageHeading />
      <RandF />
      <Newsletter />
      <Creator />
      <Scrolly />
      <Footer />
    </>
  );
}

export default App;
