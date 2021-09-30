import Navbar from '../../../src/Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


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


        </Switch>
 
      </div>
      
    </div>
    </Router>
  );
}

export default App;  //always export component