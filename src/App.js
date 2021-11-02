import './App.css';
import Movies from './componet/Movies';
import AllMovies from './componet/AllMovies';
import Nav from './componet/navBar/Nav';
import Home from './componet/home/Home';
import TvShoe from './componet/tv-sowes/TvShoe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='nav-combonet'>
          <Nav/>
        </nav>
        <Switch>
          <Route exact path="/">
            <main className='home'>
              <Home/>
            </main> 
            
          </Route>
          <Route path="/movies">
            <h1 className='most-popular'>Most Popular Movies :</h1>
            <header className="App-header">
                <Movies/>
            </header>
            <h1>Top Movies :</h1>
            <main className='main-body'>
                
                <AllMovies />
            </main>
          </Route>
          <Route exact path="/tv show">
            <main className='tv-shows'>
              <TvShoe/>
            </main> 
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
