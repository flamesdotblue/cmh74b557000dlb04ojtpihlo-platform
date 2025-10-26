import React from "react";

const AnimatedRoleBadge = ({ role }) => {
  const roleStyles = {
    recruiter: {
      bg: "bg-blue-50",
      ring: "ring-blue-200",
      emoji: "🍼",
    },
    jobseeker: {
      bg: "bg-emerald-50",
      ring: "ring-emerald-200",
      emoji: "🛝",
    },
    interviewer: {
      bg: "bg-amber-50",
      ring: "ring-amber-200",
      emoji: "🧸",
    },
  }[role] || { bg: "bg-slate-50", ring: "ring-slate-200", emoji: "✨" };

  return (
    <div
      aria-hidden
      title="Animated role illustration"
      className={`w-16 h-16 rounded-full grid place-items-center text-3xl ${roleStyles.bg} ring-2 ${roleStyles.ring} animate-[wiggle_2.2s_ease-in-out_infinite]`}
    >
      {roleStyles.emoji}
      <style>{`@keyframes wiggle {0%{transform:rotate(0) scale(1)}25%{transform:rotate(-6deg) scale(1.02)}50%{transform:rotate(0) scale(1.03)}75%{transform:rotate(6deg) scale(1.02)}100%{transform:rotate(0) scale(1)}}`}</style>
    </div>
  );
};

export default function RoleContent({ roleConfig, activeTab }) {
  React.useEffect(() => {
    if (activeTab) {
      const el = document.getElementById(activeTab);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [roleConfig.key, activeTab]);

  return (
    <div className="flex flex-col gap-6">
      <div className="p-4 border border-slate-200 rounded-xl flex items-center gap-4 bg-white">
        <AnimatedRoleBadge role={roleConfig.key} />
        <div>
          <h2 className="text-xl font-semibold">{roleConfig.title}</h2>
          <p className="text-slate-600 text-sm">{roleConfig.blurb}</p>
        </div>
      </div>

      {roleConfig.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          tabIndex={-1}
          aria-labelledby={`${section.id}-heading`}
          className="scroll-mt-32"
        >
          <h3 id={`${section.id}-heading`} className="text-lg font-semibold mb-2">
            {section.label}
          </h3>
          <div>{section.render()}</div>
        </section>
      ))}
    </div>
  );
}
