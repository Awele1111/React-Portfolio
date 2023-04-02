import AboutPage from "./components/Aboutpage";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import Socials from "./components/Socials";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
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
      <Resume/>
      <Contactpage/>
      <Footer/>
    </div>
  );
}

export default App;
