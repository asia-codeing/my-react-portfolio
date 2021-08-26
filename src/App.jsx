import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutMe from './pages/Aboutme';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/Contactme';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <Router  basename={window.location.pathname || ''}>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' exact component={() => <Home />}/>
          
          <Route path='/about' exact component={() => <AboutMe />}/>

          <Route path='/projects' exact component={() => <MyProjects />} />

          <Route path='/contact' exact component={() => <ContactMe />} />
            
        </Switch>
        <Footer/>
      </div>
    </Router>  
  );
}

export default App;
