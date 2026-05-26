import { use, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect } from "react";

function Accounts() {
  const { user, userData, setUserData, fetchUserData } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    profilePicture: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        username: userData.username || "",
        email: user.email || "",
        phone: userData.phone || "",
        location: userData.location || "",
        bio: userData.bio || "",
        profilePicture: userData.profilePicture || "",
      });
    }
  }, [userData]);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      const formDataImage = new FormData();

      formDataImage.append("file", file);
      formDataImage.append("upload_preset", "todo-app-images");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dbg4jbrey/image/upload",
        {
          method: "POST",
          body: formDataImage,
        },
      );

      const data = await response.json();

      setFormData((prev) => ({
        ...prev,
        profilePicture: data.secure_url,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async () => {
    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        username: formData.username,
        phone: formData.phone,
        location: formData.location,
        bio: formData.bio,
        profilePicture: formData.profilePicture,
      });

      setUserData((prev) => ({
        ...prev,
        username: formData.username,
        phone: formData.phone,
        location: formData.location,
        bio: formData.bio,
        profilePicture: formData.profilePicture,
      }));

      await fetchUserData(user.uid);

      setIsEditing(false);

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm transition-colors">
      <h1 className="font-medium text-2xl mb-2">Account Settings</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Manage your account information and preferences.
      </p>

      <div className="space-y-8">
        {/* Profile Picture Section */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <h3 className="font-semibold text-lg mb-4">Profile Picture</h3>
          <div className="flex items-center gap-6">
            <img
              src={formData.profilePicture || "https://i.pravatar.cc/150?img=3"}
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            {isEditing && (
              <label className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                Change Picture
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Account Information Form */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">Personal Information</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isEditing
                  ? "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          <div className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-slate-700 disabled:cursor-not-allowed transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-slate-700 disabled:cursor-not-allowed transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-slate-700 disabled:cursor-not-allowed transition-colors"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-slate-700 disabled:cursor-not-allowed transition-colors"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-slate-700 disabled:cursor-not-allowed resize-none transition-colors"
              />
            </div>

            {/* Save Button */}
            {isEditing && (
              <button
                onClick={handleSave}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium mt-4"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { Form } from "react-router-dom";

export default Accounts;
