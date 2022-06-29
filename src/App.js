import NavBar from "./components/NavBar";
import './App.css';
import WelcomeImage from "./components/WelcomeImage";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <NavBar />
     <WelcomeImage />
     <About />
     <Skills />
     <Portfolio />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
