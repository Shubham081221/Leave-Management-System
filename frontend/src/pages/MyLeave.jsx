import { useState } from "react"
import { leaves } from "../data/leaveData" 

const filters = ["All", "Pending", "Approved", "Rejected"]

// const leaves = [
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: true }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: true }, { label: "Hr", approved: true }], status: "Approved" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Rejected" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: true }, { label: "Hr", approved: true }], status: "Approved" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
// ]

const statusStyles = {
  Pending:  { badge: "bg-amber-100  dark:bg-amber-900/40  text-amber-700  dark:text-amber-400"  },
  Approved: { badge: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400" },
  Rejected: { badge: "bg-red-100    dark:bg-red-900/40    text-red-700    dark:text-red-400"    },
}

const filterStyles = {
  All:      "bg-slate-800  dark:bg-white      text-white dark:text-slate-800",
  Pending:  "bg-amber-100  dark:bg-amber-900/40  text-amber-700  dark:text-amber-400",
  Approved: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400",
  Rejected: "bg-red-100    dark:bg-red-900/40    text-red-700    dark:text-red-400",
}

export default function MyLeave() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = activeFilter === "All"
    ? leaves
    : leaves.filter((l) => l.status === activeFilter)

  return (
    <>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
        My Leave History
      </h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-5 transition-colors duration-300">
        Track all your leave requests in one place
      </p>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2 mb-5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
              ${activeFilter === f
                ? filterStyles[f]
                : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-700">
              {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "STATUS"].map((h) => (
                <th
                  key={h}
                  className="text-left text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider px-6 py-4"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={i}
                className="border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                {/* Type */}
                <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {row.type}
                </td>

                {/* Dates */}
                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {row.dates}
                </td>

                {/* Days */}
                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {row.days}
                </td>

                {/* Approval Steps */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {row.steps.map((step, j) => (
                      <span
                        key={j}
                        className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300
                          ${step.approved
                            ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
                            : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                          }`}
                      >
                        {step.label}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300
                    ${statusStyles[row.status].badge}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-600">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-sm font-medium">No {activeFilter} leaves found</p>
          </div>
        )}
      </div>
    </>
  )
}