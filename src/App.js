import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlightTable from './components/FlightTable';
import FlightDetails from './components/FlightDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FlightTable} />
        <Route path="/flight/:id" component={FlightDetails} />
      </Switch>
    </Router>
  );
}

export default App;
