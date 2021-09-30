import {Link} from 'react-router-dom';


const Navbar =() =>{
    return(
        <nav className = "navbar">
            <h1>The Testing blogspot</h1>
            <div className ="links">
                <Link to="/">Homepage</Link>  
                <Link to="/Login" >Login Page </Link>
                <Link to="/UserProfile">UserProfile</Link>
                <Link to="/Usercart">Usercart</Link>
                <Link to="/ProductDetailsPage">Usercart</Link>
                <Link to="/Checkoutpage">Usercart</Link>

            </div>
        </nav>

    );
}
export default Navbar