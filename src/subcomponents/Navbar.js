import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/portfolio"><h1>Declan's Portfolio</h1></Link>
      <Link to="/portfolio/education">Education</Link>
      <Link to="/portfolio/experience">Experience</Link>
      <Link to="/portfolio/contact">Contact</Link>
    </nav>
  );
}
 
export default Navbar;