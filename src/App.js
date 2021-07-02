import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Intro from '../src/components/Intro/Intro';
import About from '../src/components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Intro/>
        <About/>
      <Footer/>
    </div>
  );
}

export default App;
