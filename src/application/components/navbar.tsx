import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Task List</Link>
        </li>
        <li>
          <Link to="/new">New Task</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;