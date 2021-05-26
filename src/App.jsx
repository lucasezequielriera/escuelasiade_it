import React, {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar'
import Cover from './components/cover'
import './App.css';

function App() {

  return (
    <Router>
      <Navbar />

      <Switch>

        <Route exact path="/"> <Cover /> </Route>

        <Route path="/Certificaciones"></Route>

        <Route path="/TransformacionDigital"></Route>
        <Route path="/FacebookAds"></Route>
        <Route path="/GoogleAds"></Route>
        <Route path="/HTML"></Route>
        <Route path="/Criptomonedas"></Route>
        <Route path="/OfficeInicial"></Route>
        <Route path="/Proximamente"></Route>

        <Route path="/BusquedaDeCurso"></Route>

      </Switch>

    </Router>
  )
}

export default App;
