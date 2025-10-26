import React from "react";

export const roleConfigs = [
  {
    key: "recruiter",
    title: "Recruiter",
    blurb: "Source talent, manage your pipeline, and schedule with ease.",
    sections: [
      {
        id: "overview",
        label: "Overview",
        render: () => (
          <div className="prose prose-slate max-w-none">
            <p>
              Meet the Recruiter Hub — your command center for requisitions, candidates, and interviews.
              Streamlined workflows and insights at a glance.
            </p>
          </div>
        ),
      },
      {
        id: "features",
        label: "Features",
        render: () => (
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>AI-assisted candidate ranking</li>
            <li>Collaborative feedback with role-based permissions</li>
            <li>Automated scheduling and reminders</li>
          </ul>
        ),
      },
      {
        id: "pricing",
        label: "Pricing",
        render: () => (
          <div className="text-slate-700">
            Plans scale with your hiring volume. Contact Sales for enterprise.
          </div>
        ),
      },
      {
        id: "faqs",
        label: "FAQs",
        render: () => (
          <div className="text-slate-700">
            Common questions about workflows, integrations, and security.
          </div>
        ),
      },
    ],
  },
  {
    key: "jobseeker",
    title: "Job Seeker",
    blurb: "Build a standout profile, discover roles, and apply with confidence.",
    sections: [
      {
        id: "overview",
        label: "Overview",
        render: () => (
          <div className="prose prose-slate max-w-none">
            <p>
              Your personalized career cockpit — track applications, refine your resume, and prepare for interviews.
            </p>
          </div>
        ),
      },
      {
        id: "features",
        label: "Features",
        render: () => (
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Smart role recommendations</li>
            <li>One-click applications with profile sync</li>
            <li>Interview prep with AI practice prompts</li>
          </ul>
        ),
      },
      {
        id: "resources",
        label: "Resources",
        render: () => (
          <div className="text-slate-700">Templates, guides, and tips to land your next opportunity.</div>
        ),
      },
      {
        id: "faqs",
        label: "FAQs",
        render: () => (
          <div className="text-slate-700">Answers about privacy, application visibility, and alerts.</div>
        ),
      },
    ],
  },
  {
    key: "interviewer",
    title: "Interviewer",
    blurb: "Structured interviews, fast feedback, and fair hiring decisions.",
    sections: [
      {
        id: "overview",
        label: "Overview",
        render: () => (
          <div className="prose prose-slate max-w-none">
            <p>
              Prepare with scorecards, collaborate on feedback, and maintain consistency across panels.
            </p>
          </div>
        ),
      },
      {
        id: "guide",
        label: "Guide",
        render: () => (
          <div className="text-slate-700">Role-based guides and best practices for effective interviews.</div>
        ),
      },
      {
        id: "faqs",
        label: "FAQs",
        render: () => (
          <div className="text-slate-700">Learn about scheduling, panel coordination, and calibration.</div>
        ),
      },
    ],
  },
];
