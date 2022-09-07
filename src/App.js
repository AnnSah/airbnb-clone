import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
<Link></Link>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />

      </Router>

    </div >
  );

}

export default App;
