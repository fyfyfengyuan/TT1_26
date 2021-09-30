import Navbar from "./Navbar";
import Home from "./containers/Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from "./containers/Login";
import UserProfile from './containers/UserProfile';
import Usercart from './containers/Usercart';
import ProductDetailsPage from './containers/ProductDetailsPage';
import ProductItem from "./components/ProductItem";
function App() {



  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>   
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="UserProfile">
            <UserProfile/>
          </Route>
          <Route path="/Usercart">
            <Usercart />
          </Route>
          <Route path="/ProductDetailsPage">
            <ProductDetailsPage />
          </Route>
          <Route path="/Checkoutpage">
            <ProductDetailsPage />
          </Route>
          <Route path="/test">
            <ProductItem />
          </Route>

        </Switch>
 
      </div>
      
    </div>
    </Router>
  );
}

export default App;  //always export component