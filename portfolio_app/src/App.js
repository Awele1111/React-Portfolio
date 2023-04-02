import AboutPage from "./components/Aboutpage";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import Socials from "./components/Socials";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contactpage from "./components/Contactpage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutPage/>
      <Portfolio/>
      <Socials/>
      <Experience/>
      <Contactpage/>
      <Footer/>
    </div>
  );
}

export default App;
