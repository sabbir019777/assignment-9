
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase.config";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./routes/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";
import PlantDetails from "./pages/PlantDetails";
import NotFound from "./pages/NotFound";
import PlantCare from "./components/PlantCare";
import GreenExperts from "./components/GreenExperts";
import EcoDecor from "./components/EcoDecor";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  const [user] = useAuthState(auth);

  return (
   <Router>
   <Navbar />

 <Routes>

    
   <Route
    path="/"
   element={ <>
   <Home />
   <PlantCare />
    <GreenExperts />
     <EcoDecor />
      </>
       }
     />
   <Route path="/plantcare" element={<PlantCare />} />
   <Route path="/indoorplant" element={<Home />} />
   <Route path="/greenexpert" element={<GreenExperts />} />
    <Route path="/ecodecor" element={<EcoDecor />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

       
    <Route
   path="/profile"
  element={
<PrivateRoute user={user}>
     <Profile user={user} />
  </PrivateRoute>
     }
   />
  <Route
   path="/plants/:id"
    element={
   <PrivateRoute user={user}>
     <PlantDetails user={user} />
    </PrivateRoute>
          }
        />

   <Route path="*" element={<NotFound />} />
    </Routes>

  <Footer />
 <ToastContainer position="top-right" autoClose={3000} />
  </Router>
  );
}

export default App;
