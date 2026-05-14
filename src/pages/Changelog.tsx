import Layout from "@/components/app/layout";
import React from "react";


function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
const changelogData = [
  {
    version: "V1.8.0",
    title: "Prism Flux",
    date: "8 January, 2026",
    latest: true,
    features: [
      "Added a new Theme Preset System with ready-made visual styles.",
      "Introduced a Vision Mode toggle across presets.",
    ],
    updates: [
      "Upgraded to Next.js 16.0.",
      "Resolved critical security vulnerabilities.",
      "Improved documentation for custom presets.",
    ],
  },
  {
    version: "V1.7.0",
    title: "Solar Drift",
    date: "10 November, 2025",
    latest: false,
    features: ["New Hiring Dashboard", "Pipeline Management improvements"],
    updates: [],
  },
];

const Changelog = () => {

  return (
    <>
    <MainLayout>
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-10">
          <h1 className="text-3xl font-bold">Changelog</h1>

          {changelogData.map((item, index) => (
            <div
            key={index}
              id={item.version}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-semibold text-primary">
                  {item.version} – {item.title}
                </h2>
                {item.latest && (
                  <span className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground">
                    Latest
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {item.date}
              </p>

              {item.features.length > 0 && (
                  <>
                  <h3 className="font-semibold mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {item.updates.length > 0 && (
                  <>
                  <h3 className="font-semibold mt-4 mb-2">Updates</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {item.updates.map((update, i) => (
                        <li key={i}>{update}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside className="hidden lg:block sticky top-20 h-fit">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="font-semibold mb-3">On this page</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {changelogData.map((item, i) => (
                  <li key={i}>
                  <a
                    href={`#${item.version}`}
                    className="hover:text-primary transition"
                    >
                    {item.version} – {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
    </MainLayout>
    </>
  );
};

export default Changelog;
