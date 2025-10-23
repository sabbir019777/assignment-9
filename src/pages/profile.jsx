
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

export default function Profile({ user }) {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);


  const handleUpdate = async () => {
    if (!name || !photoURL) {
return alert("Name and Photo URL cannot be empty!");
   }
    setLoading(true);
    try {
  await updateProfile(auth.currentUser, { displayName: name, photoURL });
   alert("Profile updated successfully!");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

 
  if (!user) return null;

  return (
    <div className="w-auto h-auto flex items-center justify-center bg-gray-700 min-h-screen">
<div className="w-full max-w-md p-6 border rounded-2xl shadow-lg bg-gray-800">
  <h2 className="text-3xl font-bold mb-6 text-white text-center"> My Profile </h2>

      
   <img
     src={photoURL || "https://via.placeholder.com/100"}
     alt="profile"
   className="w-28 h-28 rounded-full mb-4 mx-auto border-4 border-purple-500"
  />

        {/* Editable Fields */}
   <input
     type="text"
    value={name}
   onChange={(e) => setName(e.target.value)}
    placeholder="Name"
      className="w-full p-3 mb-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
   />
  <input
    type="text"
   value={photoURL}
   onChange={(e) => setPhotoURL(e.target.value)}
      placeholder="Photo URL"
   className="w-full p-3 mb-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

    <p className="text-gray-300 mb-4 text-center">Email: {user.email}</p>

        {/* Update Button */}
    <button
    onClick={handleUpdate}
      disabled={loading}
     className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded w-full hover:opacity-90 transition font-semibold"
    >
      {loading ? "Updating..." : "Update Profile"}
  </button>
   </div>
    </div>
  );
}
