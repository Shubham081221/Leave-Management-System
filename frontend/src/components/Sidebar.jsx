// import { useState } from "react"

// const navItems = [
//   { label: "Dashboard", icon: "▦" },
//   { label: "Apply Leave", icon: "👤" },
//   { label: "My Leave", icon: "👤" },
//   { label: "Setting", icon: "⚙️" },
// ]

// export default function Sidebar() {
//   const [active, setActive] = useState("Dashboard")

//   return (
//     <aside className="w-56 h-screen bg-white flex flex-col px-4 py-6 shadow-md">

//       {/* Logo */}
//       <div className="flex items-center gap-3 mb-8">
//         <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg">
//           KC
//         </div>
//         <span className="text-sm font-bold text-slate-800 leading-tight">
//           Kalyani Cast Tech Ltd
//         </span>
//       </div>

//       {/* Nav Links */}
//       <nav className="flex flex-col gap-1 flex-1">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => setActive(item.label)}
//             className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
//               ${active === item.label
//                 ? "bg-blue-700 text-white shadow-md shadow-blue-200"
//                 : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
//               }`}
//           >
//             <span>{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>

//       {/* Logout */}
//       <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
//         Logout
//       </button>

//     </aside>
//   )
// }

// import { useState } from "react"
// import { Settings, LogOut } from 'lucide-react';
// import logo from '../assets/KC_logo-icon.png';

// const navItems = [
//   { label: "Dashboard", icon: "▦" },
//   { label: "Apply Leave", icon: "👤" },
//   { label: "My Leave", icon: "👤" },
//   { label: "Setting", icon: <Settings /> },
// ]

// export default function Sidebar({ isDark }) {
//   const [active, setActive] = useState("Dashboard")

//   return (
//     <aside className="w-56 h-screen bg-white dark:bg-slate-800 flex flex-col px-4 py-6 shadow-md transition-colors duration-300 flex-shrink-0">

//       {/* Logo */}
//       <div className="flex items-center gap-3 mb-8">
//         <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0">
//          <img 
//          src={logo} 
//          alt="Kalyani Cast Tech Logo" 
//          className="w-full h-full object-contain"
//          />
//         </div>
//         <span className="text-sm font-bold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
//           Kalyani Cast Tech Ltd
//         </span>
//       </div>

//       {/* Nav Links */}
//       <nav className="flex flex-col gap-1 flex-1">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => setActive(item.label)}
//             className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
//               ${active === item.label
//                 ? "bg-blue-700 text-white shadow-md shadow-blue-200"
//                 : "text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-white"
//               }`}
//           >
//             <span>{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>

//       {/* Logout */}
//       <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
//         <span><LogOut /></span> Logout
//       </button>

//     </aside>
//   )
// }

// import { useNavigate, useLocation } from "react-router-dom"

// const navItems = [
//   { label: "Dashboard", icon: "▦", path: "/dashboard" },
//   { label: "Apply Leave", icon: "👤", path: "/apply-leave" },
//   { label: "My Leave", icon: "👤", path: "/my-leave" },
//   { label: "Setting", icon: "⚙️", path: "/settings" },
// ]

// export default function Sidebar() {
//   const navigate = useNavigate()
//   const location = useLocation()

//   return (
//     <aside className="w-56 h-screen bg-white dark:bg-slate-800 flex flex-col px-4 py-6 shadow-md transition-colors duration-300 flex-shrink-0">

//       {/* Logo */}
//       <div className="flex items-center gap-3 mb-8">
//         <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0">
//           KC
//         </div>
//         <span className="text-sm font-bold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
//           Kalyani Cast Tech Ltd
//         </span>
//       </div>

//       {/* Nav Links */}
//       <nav className="flex flex-col gap-1 flex-1">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => navigate(item.path)}
//             className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
//               ${location.pathname === item.path
//                 ? "bg-blue-700 text-white shadow-md shadow-blue-200"
//                 : "text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-white"
//               }`}
//           >
//             <span>{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>

//       {/* Logout */}
//       <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
//         <span>↩</span> Logout
//       </button>

//     </aside>
//   )
// }

//Responsive

// import { useNavigate, useLocation } from "react-router-dom"
// import { LayoutDashboard, CalendarPlus, CalendarDays, Settings, LogOut, X } from "lucide-react"

// const navItems = [
//   { label: "Dashboard",   icon: LayoutDashboard, path: "/dashboard"   },
//   { label: "Apply Leave", icon: CalendarPlus,    path: "/apply-leave" },
//   { label: "My Leave",    icon: CalendarDays,    path: "/my-leave"    },
//   { label: "Setting",     icon: Settings,        path: "/settings"    },
// ]

// export default function Sidebar({ setSidebarOpen }) {
//   const navigate = useNavigate()
//   const location = useLocation()

//   const handleNav = (path) => {
//     navigate(path)
//     setSidebarOpen(false)
//   }

//   return (
//     <aside className="w-56 h-screen bg-white dark:bg-slate-800 flex flex-col px-4 py-6 shadow-md transition-colors duration-300 flex-shrink-0">

//       {/* Logo + Close button on mobile */}
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center gap-3">
//           <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0">
//             KC
//           </div>
//           <span className="text-sm font-bold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
//             Kalyani Cast Tech Ltd
//           </span>
//         </div>
//         {/* Close button — only visible on mobile */}
//         <button
//           onClick={() => setSidebarOpen(false)}
//           className="lg:hidden text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1"
//         >
//           <X className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Nav Links */}
//       <nav className="flex flex-col gap-1 flex-1">
//         {navItems.map((item) => {
//           const Icon = item.icon
//           return (
//             <button
//               key={item.label}
//               onClick={() => handleNav(item.path)}
//               className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
//                 ${location.pathname === item.path
//                   ? "bg-blue-700 text-white shadow-md shadow-blue-200"
//                   : "text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-white"
//                 }`}
//             >
//               <Icon className="w-4 h-4 flex-shrink-0" />
//               <span>{item.label}</span>
//             </button>
//           )
//         })}
//       </nav>

//       {/* Logout */}
//       <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
//         <LogOut className="w-4 h-4" />
//         Logout
//       </button>

//     </aside>
//   )
// }

//LogOut Modal

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { LayoutDashboard, CalendarPlus, CalendarDays, Settings, LogOut, X } from "lucide-react"
import LogoutModal from "./LogoutModal"

const navItems = [
  { label: "Dashboard",   icon: LayoutDashboard, path: "/dashboard"   },
  { label: "Apply Leave", icon: CalendarPlus,    path: "/apply-leave" },
  { label: "My Leave",    icon: CalendarDays,    path: "/my-leave"    },
  { label: "Setting",     icon: Settings,        path: "/settings"    },
]

export default function Sidebar({ setSidebarOpen }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [showLogout, setShowLogout] = useState(false)

  const handleNav = (path) => {
    navigate(path)
    setSidebarOpen(false)
  }

  const handleLogoutConfirm = () => {
    setShowLogout(false)
    navigate("/")
    // later you can clear auth tokens here
  }

  return (
    <>
      <aside className="w-56 h-screen bg-white dark:bg-slate-800 flex flex-col px-4 py-6 shadow-md transition-colors duration-300 flex-shrink-0">

        {/* Logo + Close button on mobile */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0">
              KC
            </div>
            <span className="text-sm font-bold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
              Kalyani Cast Tech Ltd
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.path)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                  ${location.pathname === item.path
                    ? "bg-blue-700 text-white shadow-md shadow-blue-200"
                    : "text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-white"
                  }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => setShowLogout(true)}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>

      </aside>

      {/* Logout Modal */}
      {showLogout && (
        <LogoutModal
          onCancel={() => setShowLogout(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </>
  )
}