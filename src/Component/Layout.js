import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUs</Link>
          </li>
          <li>
            <Link to="/contactus">ContactUs</Link>
          </li>
          <li>
            <Link to="/nopage">NoPage</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;