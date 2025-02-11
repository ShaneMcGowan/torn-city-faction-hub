import { Link, Outlet } from "react-router";

const LayoutAuthenticated = () => {
  return (
    <>
      <div>
        <Link to="/app/members">Members</Link>
        <Link to="/app/basic">Basic</Link>
      </div>
      <Outlet />
    </>
  )
}

export default LayoutAuthenticated