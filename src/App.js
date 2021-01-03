import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EventPage from './Pages/EventPage';
import Homepage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
function App() {
  return (
    <Router>
    <div className="App">
    
    <Route exact path="/" component={Homepage}/>
     <Route path="/EventPage" component={EventPage}/>
     <Route path="/ContactPage" component={ContactPage}/>
     <Route path="/AboutPage" component={AboutPage}/>
    </div>
    
    </Router>
  );
}

export default App;
