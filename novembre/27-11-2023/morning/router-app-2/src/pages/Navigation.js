import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

      <Outlet />
    </>
  )
};

export default Navigation;