import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  sendEmailVerification,
} from "firebase/auth/web-extension";

function Security() {
  const { user } = useAuth();

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // const [emailVerified, setEmailVerified] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  useEffect(() => {
    const refreshUser = async () => {
      if (user) {
        await user.reload();
      }
    };

    refreshUser();
  }, []);
  const emailVerified = user?.emailVerified;

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdatePassword = async () => {
    try {
      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const credential = EmailAuthProvider.credential(
        user.email,
        passwordForm.currentPassword,
      );

      // Verify current password first
      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, passwordForm.newPassword);

      alert("Password updated successfully!");

      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setShowPasswordForm(false);
    } catch (error) {
      console.log(error);

      if (error.code === "auth/wrong-password") {
        alert("Current password is incorrect");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        alert(error.message);
      }
    }
  };

  const handleEmailVerification = async () => {
    try {
      await sendEmailVerification(user);

      alert("Verification email sent!");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm transition-colors">
      <h1 className="font-medium text-2xl mb-2">Security Settings</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Manage your account's security preferences.
      </p>

      <div className="space-y-6">
        {/* Change Password Section */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <div>
              <h3 className="font-semibold text-lg">Password</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4">
                Change your password regularly to keep your account secure
              </p>
            </div>
            {!showPasswordForm && (
              <button
                onClick={() => setShowPasswordForm(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Change Password
              </button>
            )}
          </div>

          {showPasswordForm && (
            <div className="space-y-4">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleUpdatePassword}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  Update Password
                </button>
                <button
                  onClick={() => setShowPasswordForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Email Verification Section */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <div>
              <h3 className="font-semibold text-lg">Email Verification</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Verify your email address to enhance account security
              </p>
              <div className="mt-4">
                <span
                  className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium ${
                    emailVerified
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {emailVerified ? "✓ Verified" : "⚠ Not Verified"}
                </span>
              </div>
            </div>
            <button
              onClick={handleEmailVerification}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                emailVerified
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {emailVerified ? "Disable" : "Verify Email"}
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <div>
              <h3 className="font-semibold text-lg">
                Two-Factor Authentication
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Add an extra layer of security to your account
              </p>
              <div className="mt-4">
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  Disabled
                </span>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
              Enable 2FA
            </button>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <h3 className="font-semibold text-lg mb-4">Active Sessions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg transition-colors">
              <div>
                <p className="font-medium text-sm">Current Browser</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Chrome on Windows
                </p>
              </div>
              <span className="text-xs text-green-600 font-medium">Active</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg transition-colors">
              <div>
                <p className="font-medium text-sm">Mobile Device</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Safari on iOS
                </p>
              </div>
              <button className="text-xs text-red-600 hover:text-red-700 font-medium">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
