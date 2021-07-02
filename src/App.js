import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Intro from '../src/components/Intro/Intro';
import About from '../src/components/About/About';
import Projects from '../src/components/Projects/Projects';
import Contact from '../src/components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
