import React from "react";

export default function RoleSwitcher({ roles, activeRole, onChangeRole }) {
  const activeIndex = roles.findIndex((r) => r.key === activeRole);

  return (
    <div role="tablist" aria-label="Role switcher" className="w-full overflow-x-auto">
      <div className="inline-flex gap-1 p-1 rounded-xl border border-slate-200 bg-slate-50">
        {roles.map((r, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={r.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`role-tabpanel-${r.key}`}
              id={`role-tab-${r.key}`}
              onClick={() => onChangeRole(r.key)}
              className={
                "px-3.5 py-2 rounded-lg text-sm font-medium transition " +
                (isActive
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white")
              }
            >
              <span className="align-middle">{r.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
