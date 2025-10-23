import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth, googleProvider } from "../firebase/firebase.config";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false);
const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
 const from = location.state?.from?.pathname || "/";

 const handleEmailLogin = async (e) => {
  e.preventDefault();
  if (!email || !password) return toast.error("Email & Password required");
 setLoading(true);

  try {
 const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
   setUser(user);
  navigate(from, { replace: true });
  toast.success("Login successful");
  } catch (err) {
   console.error(err);
    toast.error(err.message);
 } finally {
  setLoading(false);
    }
  };

const handleGoogleLogin = async () => {
  setLoading(true);
 try {
   const result = await signInWithPopup(auth, googleProvider);
   const user = result.user;
  setUser(user);
   navigate(from, { replace: true });
   toast.success("Login successful with Google");
   } catch (err) {
  console.error(err);
   toast.error(err.message);
   } finally {
    setLoading(false);
 }
  };

  const handleForgotPassword = async () => {
  if (!email) return toast.error("Enter your email first");
 try {
   await sendPasswordResetEmail(auth, email);
   toast.success("Password reset email sent!");
  } catch (err) {
  console.error(err);
  toast.error(err.message);
  }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-700 p-4">
   <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md text-white relative z-10">
   <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

   <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          {/* Email Input */}
    <input
       type="email"
   placeholder="Email"
      value={email}
       onChange={e => setEmail(e.target.value)}
     className="input w-full p-2 rounded border border-white/50 bg-white/20 text-white"
    required   />

          {/* Password Input  */}
  <div className="relative">
    <input
    type={showPassword ? "text" : "password"}
  placeholder="Password"
   value={password}
    onChange={e => setPassword(e.target.value)}
   className="input w-full p-2 rounded border border-white/50 bg-white/20 text-white pr-10"
   required   />
     <button
     type="button"
    onClick={() => setShowPassword(!showPassword)}
     className="absolute right-3 top-2.5 text-white/70 hover:text-white"   >
    {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
     </button>
    </div>

          {/* Login Button */}
   <button
    type="submit"
     disabled={loading}
     className="w-full p-2 bg-green-500 hover:bg-purple-600 rounded text-white font-bold transition">
   {loading ? "Loading..." : "Login"}
    </button>
    </form>

        {/* Google Login */}
   <button
     onClick={handleGoogleLogin}
 disabled={loading}
    className="mt-3 w-full p-2 bg-white hover:bg-gray-300 rounded text-black font-semibold flex items-center justify-center gap-2 transition"  >
    <FcGoogle size={22} />
     <span>{loading ? "Loading..." : " Google Login"}</span>
   </button>

        {/* Forgot Password */}
 <p className="mt-4 text-center">
    Forgot password?{" "}
    <button
   onClick={handleForgotPassword}
      className="text-green-400 hover:underline hover:text-red-400" >  Reset here
  </button>
   </p>

        {/* Signup Link */}
    <p className="mt-4 text-center">
  Don't have an account?{" "}
   <Link
    to="/signup"
      className="text-green-400 hover:underline hover:text-red-400"
    >   Sign up  </Link>
 </p>
  </div>
    </div>
  );
};

export default Login;
