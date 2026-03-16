// import { useState } from "react"
// import Sidebar from "./components/Sidebar"
// import Header from "./components/Header"
// import StatsCards from "./components/StatsCards"
// import ApprovalBanner from "./components/ApprovalBanner"
// import RecentRequests from "./components/RecentRequests"

// export default function App() {
//   const [isDark, setIsDark] = useState(false)

//   return (
//     <div className={isDark ? "dark" : ""}>
//       <div className="flex h-screen w-full bg-slate-100 dark:bg-slate-900 transition-colors duration-300">

//         <Sidebar isDark={isDark} />

//         <div className="flex flex-col flex-1 overflow-hidden">
//           <Header isDark={isDark} setIsDark={setIsDark} />

//           <div className="flex-1 overflow-y-auto p-7">
//             <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
//               Welcome User!
//             </h1>
//             <p className="text-sm text-slate-400 dark:text-slate-500 mb-5 transition-colors duration-300">
//               Your leave overview 2026
//             </p>

//             <StatsCards />
//             <ApprovalBanner />
//             <RecentRequests />
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// import { useState } from "react"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import Sidebar from "./components/Sidebar"
// import Header from "./components/Header"
// import Dashboard from "./pages/Dashboard"
// import MyLeave from "./pages/MyLeave"

// export default function App() {
//   const [isDark, setIsDark] = useState(false)

//   return (
//     <BrowserRouter>
//       <div className={isDark ? "dark" : ""}>
//         <div className="flex h-screen w-full bg-slate-100 dark:bg-slate-900 transition-colors duration-300">

//           <Sidebar />

//           <div className="flex flex-col flex-1 overflow-hidden">
//             <Header isDark={isDark} setIsDark={setIsDark} />

//             <div className="flex-1 overflow-y-auto p-7">
//               <Routes>
//                 <Route path="/" element={<Navigate to="/dashboard" />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/my-leave" element={<MyLeave />} />
//               </Routes>
//             </div>
//           </div>

//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import MyLeave from "./pages/MyLeave"

export default function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <BrowserRouter>
      <div className={isDark ? "dark" : ""}>
        <div className="flex h-screen w-full bg-slate-100 dark:bg-slate-900 transition-colors duration-300">

          <Sidebar />

          <div className="flex flex-col flex-1 overflow-hidden">
            <Header isDark={isDark} setIsDark={setIsDark} />

            <div className="flex-1 overflow-y-auto p-7">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my-leave" element={<MyLeave />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}