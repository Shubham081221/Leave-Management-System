// import { useNavigate } from "react-router-dom"
// import { leaves } from "../data/leaveData"

// export default function RecentRequests() {
//   const navigate = useNavigate()

//   // Only show latest 2 on dashboard
//   const recentLeaves = leaves.slice(0, 2)

//   return (
//     <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm transition-colors duration-300">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-5">
//         <h3 className="text-base font-bold text-slate-800 dark:text-white transition-colors duration-300">
//           My Recent Request
//         </h3>
//         <button
//           onClick={() => navigate("/my-leave")}
//           className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
//         >
//           View All
//         </button>
//       </div>

//       {/* Table */}
//       <table className="w-full">
//         <thead>
//           <tr className="border-b border-slate-100 dark:border-slate-700 transition-colors duration-300">
//             {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "STATUS"].map((h) => (
//               <th
//                 key={h}
//                 className="text-left text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider pb-3 px-2 transition-colors duration-300"
//               >
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {recentLeaves.map((req, i) => (
//             <tr
//               key={i}
//               className="border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
//             >
//               <td className="py-4 px-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
//                 {req.type}
//               </td>
//               <td className="py-4 px-2 text-sm text-slate-500 dark:text-slate-400">
//                 {req.dates}
//               </td>
//               <td className="py-4 px-2 text-sm text-slate-500 dark:text-slate-400">
//                 {req.days}
//               </td>
//               <td className="py-4 px-2">
//                 <div className="flex items-center gap-2">
//                   {req.steps.map((step, j) => (
//                     <span
//                       key={j}
//                       className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300
//                         ${step.approved
//                           ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
//                           : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
//                         }`}
//                     >
//                       {step.label}
//                     </span>
//                   ))}
//                 </div>
//               </td>
//               <td className="py-4 px-2">
//                 <span className={`text-xs font-semibold px-3 py-1 rounded-full
//                   ${req.status === "Approved" ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
//                   : req.status === "Rejected" ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400"
//                   : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"}`}
//                 >
//                   {req.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

//Responsive

import { useNavigate } from "react-router-dom"
import { leaves } from "../data/leaveData"

export default function RecentRequests() {
  const navigate = useNavigate()
  const recentLeaves = leaves.slice(0, 2)

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 shadow-sm transition-colors duration-300">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-800 dark:text-white">
          My Recent Request
        </h3>
        <button
          onClick={() => navigate("/my-leave")}
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          View All
        </button>
      </div>

      {/* Scrollable table on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-700">
              {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "STATUS"].map((h) => (
                <th key={h} className="text-left text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider pb-3 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentLeaves.map((req, i) => (
              <tr key={i} className="border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200">
                <td className="py-4 px-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{req.type}</td>
                <td className="py-4 px-2 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{req.dates}</td>
                <td className="py-4 px-2 text-sm text-slate-500 dark:text-slate-400">{req.days}</td>
                <td className="py-4 px-2">
                  <div className="flex flex-wrap items-center gap-1">
                    {req.steps.map((step, j) => (
                      <span key={j} className={`text-xs font-semibold px-2 py-1 rounded-full
                        ${step.approved
                          ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
                          : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                        }`}>
                        {step.label}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full
                    ${req.status === "Approved" ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
                    : req.status === "Rejected" ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400"
                    : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"}`}>
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}