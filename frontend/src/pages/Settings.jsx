// // src/pages/Settings.jsx
// import { useState } from "react"
// import { Camera, Pencil } from "lucide-react"

// export default function Settings() {
//   const [profile, setProfile] = useState({
//     name: "Rajesh Kumar",
//     email: "RajeshKumar1234@gmail.com",
//     phone: "+91 - 1234567890",
//     designation: "Production",
//     empId: "EMP 00123456",
//     avatar: "https://i.pravatar.cc/100?img=12",
//   })

//   const [passwords, setPasswords] = useState({
//     current: "",
//     newPass: "",
//     confirm: "",
//   })

//   const handleProfileChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value })
//   }

//   const handlePasswordChange = (e) => {
//     setPasswords({ ...passwords, [e.target.name]: e.target.value })
//   }

//   return (
//     <>
//       {/* Page Title */}
//       <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
//         Profile Information
//       </h1>
//       <p className="text-sm text-slate-400 dark:text-slate-500 mb-6 transition-colors duration-300">
//         Update your personal details
//       </p>

//       {/* Profile Card */}
//       <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm mb-6 transition-colors duration-300">

//         {/* Avatar + Name */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="relative">
//             <img
//               src={profile.avatar}
//               alt="avatar"
//               className="w-20 h-20 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-700"
//             />
//             <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-colors duration-200">
//               <Camera className="w-3 h-3" />
//             </button>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
//               {profile.name}
//             </h2>
//             <div className="flex items-center gap-2 mt-1">
//               <span className="text-sm text-slate-400 dark:text-slate-500">
//                 {profile.empId}
//               </span>
//               <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
//                 <Pencil className="w-3.5 h-3.5" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Form Fields */}
//         <div className="grid grid-cols-2 gap-4 mb-6">

//           {/* Name */}
//           <div>
//             <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleProfileChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               onChange={handleProfileChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
//               Phone
//             </label>
//             <input
//               type="text"
//               name="phone"
//               value={profile.phone}
//               onChange={handleProfileChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
//             />
//           </div>

//           {/* Designation */}
//           <div>
//             <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
//               Designation
//             </label>
//             <input
//               type="text"
//               name="designation"
//               value={profile.designation}
//               onChange={handleProfileChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
//             />
//           </div>

//         </div>

//         {/* Save Button */}
//         <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
//           Save Changes
//         </button>

//       </div>

//       {/* Change Password Card */}
//       <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm transition-colors duration-300">

//         <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1 transition-colors duration-300">
//           Change Password
//         </h2>
//         <p className="text-sm text-slate-400 dark:text-slate-500 mb-6 transition-colors duration-300">
//           Update your login password
//         </p>

//         <div className="grid grid-cols-3 gap-4">

//           {/* Current Password */}
//           <div>
//             <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
//               Current Password
//             </label>
//             <input
//               type="password"
//               name="current"
//               value={passwords.current}
//               onChange={handlePasswordChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
//             />
//           </div>

//           {/* New Password */}
//           <div>
//             <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
//               New Password
//             </label>
//             <input
//               type="password"
//               name="newPass"
//               value={passwords.newPass}
//               onChange={handlePasswordChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
//               Confirm New Password
//             </label>
//             <input
//               type="password"
//               name="confirm"
//               value={passwords.confirm}
//               onChange={handlePasswordChange}
//               className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
//             />
//           </div>

//         </div>

//         {/* Update Password Button */}
//         <div className="flex justify-end mt-4">
//           <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors duration-200">
//             Update Password
//           </button>
//         </div>

//       </div>
//     </>
//   )
// }

//Responsive

import { useState } from "react"
import { Camera, Pencil } from "lucide-react"

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Rajesh Kumar",
    email: "RajeshKumar1234@gmail.com",
    phone: "+91 - 1234567890",
    designation: "Production",
    empId: "EMP 00123456",
    avatar: "https://i.pravatar.cc/100?img=12",
  })

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  })

  const [profileSaved, setProfileSaved] = useState(false)
  const [passwordSaved, setPasswordSaved] = useState(false)
  const [passwordError, setPasswordError] = useState("")

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
    setProfileSaved(false)
  }

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
    setPasswordSaved(false)
    setPasswordError("")
  }

  const handleSaveProfile = () => {
    setProfileSaved(true)
    setTimeout(() => setProfileSaved(false), 3000)
  }

  const handleUpdatePassword = () => {
    if (!passwords.current || !passwords.newPass || !passwords.confirm) {
      setPasswordError("Please fill all password fields!")
      return
    }
    if (passwords.newPass !== passwords.confirm) {
      setPasswordError("New password and confirm password do not match!")
      return
    }
    if (passwords.newPass.length < 6) {
      setPasswordError("Password must be at least 6 characters!")
      return
    }
    setPasswordError("")
    setPasswordSaved(true)
    setPasswords({ current: "", newPass: "", confirm: "" })
    setTimeout(() => setPasswordSaved(false), 3000)
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setProfile({ ...profile, avatar: url })
    }
  }

  return (
    <>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
        Profile Information
      </h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-6 transition-colors duration-300">
        Update your personal details
      </p>

      {/* Profile Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 shadow-sm mb-6 transition-colors duration-300">

        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-shrink-0">
            <img
              src={profile.avatar}
              alt="avatar"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-700"
            />
            {/* Hidden file input */}
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
            <button
              onClick={() => document.getElementById("avatarInput").click()}
              className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-colors duration-200"
            >
              <Camera className="w-3 h-3" />
            </button>
          </div>

          <div>
            <h2 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
              {profile.name}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400 dark:text-slate-500">
                {profile.empId}
              </span>
              <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
                <Pencil className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

          {/* Name */}
          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={profile.designation}
              onChange={handleProfileChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
          </div>

        </div>

        {/* Success message */}
        {profileSaved && (
          <div className="mb-4 px-4 py-2.5 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 rounded-xl">
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
              ✅ Profile saved successfully!
            </p>
          </div>
        )}

        {/* Save Button */}
        <button
          onClick={handleSaveProfile}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
        >
          Save Changes
        </button>

      </div>

      {/* Change Password Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 shadow-sm transition-colors duration-300">

        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1 transition-colors duration-300">
          Change Password
        </h2>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-6 transition-colors duration-300">
          Update your login password
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Current Password */}
          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Current Password
            </label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              placeholder="••••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              New Password
            </label>
            <input
              type="password"
              name="newPass"
              value={passwords.newPass}
              onChange={handlePasswordChange}
              placeholder="••••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              placeholder="••••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            />
          </div>

        </div>

        {/* Error Message */}
        {passwordError && (
          <div className="mt-4 px-4 py-2.5 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl">
            <p className="text-sm text-red-600 dark:text-red-400 font-medium">
              ❌ {passwordError}
            </p>
          </div>
        )}

        {/* Success Message */}
        {passwordSaved && (
          <div className="mt-4 px-4 py-2.5 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 rounded-xl">
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
              ✅ Password updated successfully!
            </p>
          </div>
        )}

        {/* Update Password Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleUpdatePassword}
            className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors duration-200"
          >
            Update Password
          </button>
        </div>

      </div>
    </>
  )
}