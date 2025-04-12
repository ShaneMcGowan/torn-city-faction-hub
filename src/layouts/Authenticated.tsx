import { Link, Outlet } from "react-router";
import { useGetBasic } from "../api/basic/queries/useBasic";
import { useApiKey } from "../hooks/useApiKey";

const LayoutAuthenticated = () => {
  const { apiKey } = useApiKey();
  const getBasic = useGetBasic({apiKey});

  return (
    <>
      <div className="sticky top-0 bg-white flex gap-4 border-b p-2">
        <Link to="/app/members" className="hover:pointer-cursor hover:text-stone-500">Members</Link>
        <Link to="/app/basic" className="hover:pointer-cursor hover:text-stone-500">Basic</Link>
        <Link to="/app/attacks" className="hover:pointer-cursor hover:text-stone-500">Attacks</Link>
        {getBasic.data !== undefined && (
          <div className="ml-auto">
            {getBasic.data.basic.name} - Respect: {getBasic.data.basic.respect}
          </div>
        )}
      </div>
      <div className="h-full">
        <Outlet />
      </div>
    </>
  )
}

export default LayoutAuthenticated