import { useContext, useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Aos from 'aos';
import 'aos/dist/aos.css'


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, []);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      
      <div data-aos = "fade-up">
      <About />
      </div>
      <div data-aos = "fade-up">
      <Experience />
      </div>
      <div data-aos = "fade-up">
      <ProductList />
      </div>
      <div data-aos = "fade-up">
      <Contact />
      </div>
    </div>
  );
};

export default App;
