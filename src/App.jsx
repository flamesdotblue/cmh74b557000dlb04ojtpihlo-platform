import React from "react";
import RoleGateway from "./components/RoleGateway";
import RoleSwitcher from "./components/RoleSwitcher";
import LeftRailMenu from "./components/LeftRailMenu";
import RoleContent from "./components/RoleContent";
import { useRoleRouter } from "./components/useRoleRouter";
import { roleConfigs } from "./components/roleConfigs";
import { Menu, X } from "lucide-react";

export default function App() {
  const {
    view,
    activeRole,
    activeTab,
    setRole,
    setTab,
    goToGateway,
    roleConfig,
  } = useRoleRouter();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-14 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {view === "role" && (
                <button
                  className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 hover:bg-slate-50"
                  aria-label="Open navigation menu"
                  onClick={() => setDrawerOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </button>
              )}
              <a href="#" className="font-semibold tracking-tight">Landing Hub</a>
            </div>
            {view === "role" && (
              <button
                className="px-2.5 py-1.5 text-sm rounded-full border border-slate-300 hover:bg-slate-50"
                onClick={goToGateway}
                aria-label="Back to all roles"
              >
                All roles
              </button>
            )}
          </div>
        </div>
        {view === "role" && activeRole && (
          <div className="border-t border-slate-200">
            <div className="max-w-6xl mx-auto px-4 py-2">
              <RoleSwitcher
                roles={roleConfigs}
                activeRole={activeRole}
                onChangeRole={(r) => setRole(r, { push: true })}
              />
            </div>
          </div>
        )}
      </header>

      {view === "gateway" && (
        <main className="max-w-6xl mx-auto px-4 py-10">
          <RoleGateway
            roles={roleConfigs}
            onSelectRole={(r) => setRole(r, { push: true })}
          />
        </main>
      )}

      {view === "role" && roleConfig && (
        <main className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-start gap-6">
            <aside className="hidden lg:block sticky top-[6.75rem] shrink-0" style={{ width: 240 }}>
              <LeftRailMenu
                role={roleConfig.key}
                sections={roleConfig.sections}
                activeTab={activeTab}
                onSelectSection={(id) => setTab(id, { push: true })}
              />
            </aside>

            {drawerOpen && (
              <div className="lg:hidden fixed inset-0 z-50">
                <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
                <div className="absolute left-0 top-0 h-full w-72 bg-white border-r border-slate-200 shadow-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Sections</div>
                    <button
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-slate-200 hover:bg-slate-50"
                      onClick={() => setDrawerOpen(false)}
                      aria-label="Close navigation menu"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <LeftRailMenu
                    role={roleConfig.key}
                    sections={roleConfig.sections}
                    activeTab={activeTab}
                    onSelectSection={(id) => {
                      setDrawerOpen(false);
                      setTab(id, { push: true });
                    }}
                  />
                </div>
              </div>
            )}

            <section id="role-content-scroll-root" className="flex-1 min-w-0">
              <RoleContent roleConfig={roleConfig} activeTab={activeTab} />
            </section>
          </div>
        </main>
      )}

      <footer className="border-t border-slate-200 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Landing Hub
        </div>
      </footer>
    </div>
  );
}
