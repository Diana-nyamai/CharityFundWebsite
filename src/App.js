import './App.css';
import 'animate.css/animate.css'
import '../src/css/Homepage.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
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
    <Switch>
     <Route exact path="/" component={Homepage}/>
     <Route path="/EventPage" component={EventPage}/>
     <Route path="/StoriesUntold" component={StoriesUntold}/>
     <Route path="/ContactPage" component={ContactPage}/>
     <Route path="/AboutPage" component={AboutPage}/>
     </Switch>
    </div> 
    <Footer/>
   
    </Router>
  );
}

export default App;
