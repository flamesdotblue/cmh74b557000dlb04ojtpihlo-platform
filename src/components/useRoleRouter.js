import React from "react";
import { roleConfigs } from "./roleConfigs.jsx";

const ROLE_KEYS = ["recruiter", "jobseeker", "interviewer"];

function getRoleFromQuery(search) {
  const sp = new URLSearchParams(search);
  const role = sp.get("role");
  if (!role) return null;
  if (ROLE_KEYS.includes(role)) return role;
  return null;
}

function getTabFromQuery(search) {
  const sp = new URLSearchParams(search);
  const tab = sp.get("tab");
  return tab || null;
}

function setQuery(role, tab, mode = "push") {
  const url = new URL(window.location.href);
  const sp = url.searchParams;
  sp.delete("role");
  sp.delete("tab");
  if (role) {
    sp.set("role", role);
    if (tab) sp.set("tab", tab);
  }
  url.search = sp.toString();
  if (mode === "replace") {
    window.history.replaceState({}, "", url.toString());
  } else {
    window.history.pushState({}, "", url.toString());
  }
}

export function useRoleRouter() {
  const [view, setView] = React.useState("gateway");
  const [activeRole, setActiveRole] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(null);

  const roleConfig = React.useMemo(() => {
    if (!activeRole) return null;
    return roleConfigs.find((r) => r.key === activeRole) || null;
  }, [activeRole]);

  const validateTab = React.useCallback((role, tab) => {
    const cfg = roleConfigs.find((r) => r.key === role);
    if (!cfg) return null;
    if (tab && cfg.sections.some((s) => s.id === tab)) return tab;
    return cfg.sections[0]?.id || null;
  }, []);

  React.useEffect(() => {
    const role = getRoleFromQuery(window.location.search);
    if (!role) {
      setView("gateway");
      setActiveRole(null);
      setActiveTab(null);
      return;
    }
    const tab = getTabFromQuery(window.location.search);
    const validTab = validateTab(role, tab);
    setView("role");
    setActiveRole(role);
    setActiveTab(validTab);
    setQuery(role, validTab, "replace");
    const popHandler = () => {
      const r = getRoleFromQuery(window.location.search);
      const t = getTabFromQuery(window.location.search);
      if (!r) {
        setView("gateway");
        setActiveRole(null);
        setActiveTab(null);
      } else {
        const vt = validateTab(r, t);
        setView("role");
        setActiveRole(r);
        setActiveTab(vt);
      }
    };
    window.addEventListener("popstate", popHandler);
    return () => window.removeEventListener("popstate", popHandler);
  }, [validateTab]);

  const setRole = React.useCallback((role, opts = { push: true }) => {
    const vt = validateTab(role, null);
    setView("role");
    setActiveRole(role);
    setActiveTab(vt);
    setQuery(role, vt, opts.replace ? "replace" : "push");
  }, [validateTab]);

  const setTab = React.useCallback((tab, opts = { push: true }) => {
    if (!activeRole) return;
    const vt = validateTab(activeRole, tab);
    setActiveTab(vt);
    setQuery(activeRole, vt, opts.replace ? "replace" : "push");
  }, [activeRole, validateTab]);

  const goToGateway = React.useCallback(() => {
    setView("gateway");
    setActiveRole(null);
    setActiveTab(null);
    setQuery(null, null, "push");
  }, []);

  return { view, activeRole, activeTab, setRole, setTab, goToGateway, roleConfig };
}
