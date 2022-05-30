import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
        <nav className="nav">
        <h1>OVERSKRIFT NAVBAR</h1>
        <Link to="/Home">Main content</Link>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
        </nav> 
        </div>
     );
}
 
export default Navbar;