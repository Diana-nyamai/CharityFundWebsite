import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EventPage from './Pages/EventPage';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/" component={HomePage}/>
     <Route path="/EventPage" component={EventPage}/>
    </div>
    
    </Router>
  );
}

export default App;
