import './App.css';
import 'animate.css/animate.css'
import '../src/css/Homepage.css'
import {HashRouter, Link,Router} from 'react-router-dom';
import EventPage from './Pages/eventpage/EventPage';
import Homepage from './Pages/homepage/HomePage';
import ContactPage from './Pages/contactpage/ContactPage';
import AboutPage from './Pages/aboutpage/AboutPage';
import Footer from './Navigation/Footer';
import StoriesUntold from './Pages/storiesUntold/StoriesUntold';
function App() {
  return (
    <Router>
    <div className="App">
    <HashRouter basename="/"/>
  
    <HashRouter basename="/AboutPage" component={AboutPage}/>
    <Footer/>
    </div></Router>
  );
}

export default App;
