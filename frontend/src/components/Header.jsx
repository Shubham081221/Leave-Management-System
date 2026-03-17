// import { Search } from "lucide-react"

// export default function Header({ isDark, setIsDark }) {
//   return (
//     <header className="flex items-center justify-between px-7 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">

//       {/* Search Bar */}
//       <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-full px-5 py-2.5 w-72 transition-colors duration-300">
//         <Search className="text-slate-400 dark:text-slate-500 w-4 h-4 flex-shrink-0" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-transparent outline-none text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 w-full"
//         />
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-3">

//         {/* Toggle Button */}
//         <button
//           onClick={() => setIsDark(!isDark)}
//           className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
//             ${isDark ? "bg-blue-600" : "bg-slate-200"}`}
//         >
//           <span
//             className={`absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm transition-all duration-300
//               ${isDark
//                 ? "translate-x-9 bg-slate-900"
//                 : "translate-x-1 bg-white"
//               }`}
//           >
//             {isDark ? "🌙" : "☀️"}
//           </span>
//         </button>

//         {/* Notification */}
//         <button className="text-lg hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors duration-200">
//           🔔
//         </button>

//         {/* Divider */}
//         <div className="w-px h-8 bg-slate-200 dark:bg-slate-600" />

//         {/* User Info */}
//         <div className="flex items-center gap-2 cursor-pointer group">
//           <img
//             src="https://i.pravatar.cc/40?img=12"
//             alt="avatar"
//             className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-600"
//           />
//           <div>
//             <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
//               Jhon Deo
//             </p>
//             <p className="text-xs text-slate-400 dark:text-slate-500">
//               jhondeo123@gmail.com
//             </p>
//           </div>
//           <span className="text-slate-400 dark:text-slate-500 text-xl ml-1">›</span>
//         </div>

//       </div>
//     </header>
//   )
// }

// import { useNavigate } from "react-router-dom"

// export default function Header({ isDark, setIsDark }) {
//   const navigate = useNavigate()

//   return (
//     <header className="flex items-center justify-between px-7 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">

//       {/* Search Bar */}
//       <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-full px-4 py-2 w-60 transition-colors duration-300">
//         <span className="text-slate-400 text-sm">🔍</span>
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-transparent outline-none text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 w-full"
//         />
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-3">

//         {/* Toggle Button */}
//         <button
//           onClick={() => setIsDark(!isDark)}
//           className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none
//             ${isDark ? "bg-blue-600" : "bg-slate-200"}`}
//         >
//           <span className={`absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm transition-all duration-300
//             ${isDark ? "translate-x-9 bg-slate-900" : "translate-x-1 bg-white"}`}>
//             {isDark ? "🌙" : "☀️"}
//           </span>
//         </button>

//         {/* Notification */}
//         <button className="text-lg hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors duration-200">
//           🔔
//         </button>

//         {/* Divider */}
//         <div className="w-px h-8 bg-slate-200 dark:bg-slate-600" />

//         {/* User Info — clicks to settings */}
//         <div
//           onClick={() => navigate("/settings")}
//           className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 px-2 py-1 rounded-xl transition-colors duration-200"
//         >
//           <img
//             src="https://i.pravatar.cc/40?img=12"
//             alt="avatar"
//             className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-600"
//           />
//           <div>
//             <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
//               Jhon Deo
//             </p>
//             <p className="text-xs text-slate-400 dark:text-slate-500">
//               jhondeo123@gmail.com
//             </p>
//           </div>
//           <span className="text-slate-400 dark:text-slate-500 text-xl ml-1">›</span>
//         </div>

//       </div>
//     </header>
//   )
// }

//Responsive

import { useNavigate } from "react-router-dom"
import { Search, Bell, Sun, Moon, Menu } from "lucide-react"

export default function Header({ isDark, setIsDark, setSidebarOpen }) {
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between px-4 lg:px-7 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">

      {/* Left — Hamburger on mobile, Search on desktop */}
      <div className="flex items-center gap-3">

        {/* Hamburger — only on mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors duration-200"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-full px-4 py-2 w-60 transition-colors duration-300">
          <Search className="text-slate-400 dark:text-slate-500 w-4 h-4 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 w-full"
          />
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2 lg:gap-3">

        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative w-14 h-7 lg:w-16 lg:h-8 rounded-full transition-colors duration-300 focus:outline-none
            ${isDark ? "bg-blue-600" : "bg-slate-200"}`}
        >
          <span className={`absolute top-0.5 lg:top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300
            ${isDark ? "translate-x-7 lg:translate-x-9 bg-slate-900" : "translate-x-1 bg-white"}`}
          >
            {isDark
              ? <Moon className="w-3 h-3 text-blue-300" />
              : <Sun className="w-3 h-3 text-amber-500" />
            }
          </span>
        </button>

        {/* Notification */}
        <button className="hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors duration-200">
          <Bell className="w-5 h-5 text-slate-500 dark:text-slate-400" />
        </button>

        {/* Divider — hidden on mobile */}
        <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-600" />

        {/* User Info */}
        <div
          onClick={() => navigate("/settings")}
          className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 px-2 py-1 rounded-xl transition-colors duration-200"
        >
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="avatar"
            className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-600"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight">
              Jhon Deo
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              jhondeo123@gmail.com
            </p>
          </div>
          <span className="hidden md:block text-slate-400 text-xl ml-1">›</span>
        </div>

      </div>
    </header>
  )
}