import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
  createUserWithEmailAndPasswordFunc,
  updateProfileFunc,
    setLoading
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
   const displayName = e.target.name.value;
  const photoURL = e.target.photo.value;
   const email = e.target.email.value;
  const password = e.target.password.value;

    // password validation
   const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  if (!regExp.test(password)) {
  toast.error("Password must be at least 6   characters, include uppercase and lowercase letters.");
    return;
    }

   try {
 setLoading(true);
  const res = await createUserWithEmailAndPasswordFunc(email, password);
   await updateProfileFunc(displayName, photoURL);

 toast.success("✅ Signup successful!");
     navigate("/"); 

  } catch (err) {
  console.error(err);
    toast.error(err.message);
 } finally {
     setLoading(false);
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4">
   <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md text-white relative z-10">
  <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
  <form onSubmit={handleSignup} className="space-y-4">
    <input
    type="text"
      name="name"
   placeholder="Full Name"
     className="input w-full p-2 rounded border border-white/50 bg-white/20 text-white"
 required
    />
    <input
    type="text"
   name="photo"
       placeholder="Photo URL"
    className="input w-full p-2 rounded border border-white/50 bg-white/20 text-white"
     />
     <input
     type="email"
       name="email"
    placeholder="Email"
      className="input w-full p-2 rounded border border-white/50 bg-white/20 text-white"
       required
     />
    <div className="relative">
     <input
      type={show ? "text" : "password"}
     name="password"
       placeholder="Password"
      className="input w-full p-2 rounded border border-white/50 bg-white/20 text-white"
    required
   />
     <span
   onClick={() => setShow(!show)}
      className="absolute right-2 top-2 cursor-pointer"
      >
    {show ? <FaEye /> : <IoEyeOff />}
      </span>
   </div>
    <button
      type="submit"
       className="w-full p-2 bg-pink-500 hover:bg-pink-600 rounded text-white font-bold"
    >  Sign Up  </button>
     </form>
    <p className="mt-4 text-center text-white/80">
  Already have an account?{" "}
    <Link
   to="/login"
   className="text-black underline hover:text-red-500"
  >
     Login
  </Link>
  </p>
   </div>
    </div>
  );
};

export default Signup;
