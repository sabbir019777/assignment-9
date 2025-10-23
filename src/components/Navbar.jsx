import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, signoutUserFunc } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signoutUserFunc();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
   <nav className="bg-gray-500 text-white p-4 flex justify-between items-center">
   <Link to="/" className="font-bold text-xl">GreenNest</Link>

    <div className="flex items-center gap-4">
   <Link to="/" className="hover:underline text-blue">Home</Link>
       
     {user ? (
    <div className="relative">
    <button
   onClick={() => setDropdownOpen(!dropdownOpen)}
      className="flex items-center gap-2 rounded px-2 py-1 hover:bg-indigo-500" >
    {user.displayName || "User"}
   </button>

   {dropdownOpen && (
     <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
    <Link
     to="/profile"
    className="block px-4 py-2 hover:bg-gray-200"
 onClick={() => setDropdownOpen(false)}  >  My Profile
   </Link>
   <button
   onClick={handleLogout}
    className="w-full text-left px-4 py-2 hover:bg-gray-200"  >  Logout  </button>
    </div>
      )}
    </div>
  ) : (
    <>
    <Link to="/login" className="hover:underline">Login</Link>
   <Link to="/signup" className="hover:underline">Signup</Link>
       </>
   )}
 </div>
   </nav>
  );
}
