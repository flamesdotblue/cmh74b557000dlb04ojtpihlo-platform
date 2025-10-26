import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Compass, Mic } from "lucide-react";

export default function RoleGateway({ roles, onSelectRole }) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Choose your journey</h1>
        <p className="text-slate-600 mt-2">
          Explore the app through the lens of your role — Recruiter, Job Seeker, or Interviewer.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roles.map((role, idx) => (
          <motion.button
            key={role.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx }}
            onClick={() => onSelectRole(role.key)}
            className="group text-left bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-lg border border-slate-200 bg-slate-50 mb-3">
              {role.key === "recruiter" && <Briefcase className="w-6 h-6 text-slate-700" />}
              {role.key === "jobseeker" && <Compass className="w-6 h-6 text-slate-700" />}
              {role.key === "interviewer" && <Mic className="w-6 h-6 text-slate-700" />}
            </div>
            <div className="font-medium text-lg">{role.title}</div>
            <div className="text-sm text-slate-600 mt-1 min-h-[44px]">{role.blurb}</div>
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-800">
              <span className="px-3 py-1 rounded-full bg-slate-900 text-white group-hover:bg-slate-800 transition">Explore</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
