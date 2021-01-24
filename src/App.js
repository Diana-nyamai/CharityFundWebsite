import './App.css';
import 'animate.css/animate.css'
import '../src/css/Homepage.css'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
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
     <Route exact path="/AboutPage" component={AboutPage}/>
     <Route exact path="/EventPage" component={EventPage}/>
     <Route exact path="/StoriesUntold" component={StoriesUntold}/>
     <Route exact path="/ContactPage" component={ContactPage}/>
   
     </Switch>
    <Footer/>
    </div></Router>
  );
}

export default App;
