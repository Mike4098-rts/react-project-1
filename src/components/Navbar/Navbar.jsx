import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
        <nav className="nav">
        <a href="/">nav</a>
        <Link to="/Home">Main content</Link>
        <Link to="/About">About</Link>
        
        </nav> 
        </div>
     );
}
 
export default Navbar;