import React from "react";

export default function LeftRailMenu({ role, sections, activeTab, onSelectSection }) {
  React.useEffect(() => {
    const handler = (entries) => {
      let topMost = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const rect = entry.target.getBoundingClientRect();
          const top = Math.abs(rect.top);
          const id = entry.target.id;
          if (!topMost || top < topMost.top) topMost = { id, top };
        }
      }
      if (topMost && topMost.id !== activeTab) {
        onSelectSection(topMost.id);
      }
    };

    const observer = new IntersectionObserver(handler, {
      root: null,
      rootMargin: "0px 0px -55% 0px",
      threshold: [0.2, 0.4, 0.6],
    });

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, sections]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        el.focus();
      }, 350);
    }
    onSelectSection(id);
  };

  return (
    <nav aria-label="Section navigation">
      <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 px-2">Sections</div>
      <ul className="space-y-1">
        {sections.map((s) => {
          const selected = activeTab === s.id;
          return (
            <li key={s.id}>
              <button
                onClick={() => handleClick(s.id)}
                className={
                  "w-full text-left px-2 py-2 rounded-md text-sm transition " +
                  (selected ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100")
                }
                aria-current={selected ? "page" : undefined}
              >
                {s.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
