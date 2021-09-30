import Navbar from './Navbar';
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
          <Route path="/Userprofile">
            <Userprofile/>
          </Route>
          <Route path="Purchasproduct">
            <PurchaseProduct />
          </Route>
          <Route path="/Usercart">
            <Usercart />
          </Route>
          <Route path="/ProductDetailsPage">
            <ProductDetailsPage />
          </Route>
          
          
 


        </Switch>
 
      </div>
      
    </div>
    </Router>
  );
}

export default App;  //always export component