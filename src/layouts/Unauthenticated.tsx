import { Link, Outlet } from "react-router";

const LayoutUnauthenticated = () => {
  return (
    <>
      <div>
        
        <Link to="/">Torn City Faction Hub</Link>
        <Link to="/login">Login</Link>
      </div>
      <Outlet />
    </>
  )
}

export default LayoutUnauthenticated