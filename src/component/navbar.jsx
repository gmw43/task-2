import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className=" overflow-hidden float-right w-full " >
      
        <ul className="bg-gray-200 flex flex-row ">
          <li className="mr-4 ml-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4 ml-4">
            <Link to="/About">About</Link>
          </li>
          <li className="mr-4 ml-4">
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
        </div>
        
    
      

      <Outlet />
    </>
  )
};

export default Navbar;