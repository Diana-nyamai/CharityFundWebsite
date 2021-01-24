import './App.css';
import 'animate.css/animate.css'
import '../src/css/Homepage.css'
import {HashRouter as Router,Route} from 'react-router-dom';
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
    <Route exact path="/" component={Homepage}/>
     <Route path="/EventPage" component={EventPage}/>
     <Route path="/StoriesUntold" component={StoriesUntold}/>
     <Route path="/ContactPage" component={ContactPage}/>
     <Route path="/AboutPage" component={AboutPage}/>
    <Footer/>
    </div></Router>
  );
}

export default App;
