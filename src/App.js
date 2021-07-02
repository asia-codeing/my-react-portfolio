import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Home from '../src/pages/Home';
import AboutMe from '../src/pages/Aboutme';
import MyProjects from '../src/pages/MyProjects';
import ContactMe from '../src/pages/Contactme';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <AboutMe/>
        <MyProjects/>
        <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
