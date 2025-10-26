import React from "react";

export default function RoleSwitcher({ roles, activeRole, onChangeRole }) {
  const activeIndex = roles.findIndex((r) => r.key === activeRole);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const next = (activeIndex + dir + roles.length) % roles.length;
      onChangeRole(roles[next].key);
    }
  };

  return (
    <div role="tablist" aria-label="Role switcher" className="w-full overflow-x-auto">
      <div className="inline-flex gap-1 p-1 rounded-xl border border-slate-200 bg-slate-50" onKeyDown={onKeyDown}>
        {roles.map((r) => {
          const isActive = r.key === activeRole;
          return (
            <button
              key={r.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`role-tabpanel-${r.key}`}
              id={`role-tab-${r.key}`}
              onClick={() => onChangeRole(r.key)}
              className={
                "px-3.5 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 " +
                (isActive ? "bg-white shadow-sm text-slate-900" : "text-slate-600 hover:text-slate-900 hover:bg-white")
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
