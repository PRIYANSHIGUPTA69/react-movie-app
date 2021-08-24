import './App.css';
import New from './component/New';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import MoviesPage from './component/MoviesPages';
import NavBar from './component/NavBar';

function App() {
  return (
 
<BrowserRouter>
<NavBar></NavBar>
    <Switch>
      
      <Route to="/" exact component={MoviesPage}></Route>
      <Route to="/new" exact component={New}></Route>
    </Switch>
    </BrowserRouter>

  );
}

export default App;
