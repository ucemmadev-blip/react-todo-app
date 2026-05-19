import { useState } from "react";

function Security() {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdatePassword = () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setShowPasswordForm(false);
  };

  const handleEmailVerification = () => {
    setEmailVerified(!emailVerified);
    alert(
      emailVerified
        ? "Email verification disabled"
        : "Verification email sent to your inbox",
    );
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h1 className="font-medium text-2xl mb-2">Security Settings</h1>
      <p className="text-sm text-gray-600 mb-8">
        Manage your account's security preferences.
      </p>

      <div className="space-y-6">
        {/* Change Password Section */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-semibold text-lg">Password</h3>
              <p className="text-sm text-gray-600 mt-1">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Email Verification Section */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">Email Verification</h3>
              <p className="text-sm text-gray-600 mt-1">
                Verify your email address to enhance account security
              </p>
              <div className="mt-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
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
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">
                Two-Factor Authentication
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Add an extra layer of security to your account
              </p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
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
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Active Sessions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Current Browser</p>
                <p className="text-xs text-gray-600">Chrome on Windows</p>
              </div>
              <span className="text-xs text-green-600 font-medium">Active</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Mobile Device</p>
                <p className="text-xs text-gray-600">Safari on iOS</p>
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
