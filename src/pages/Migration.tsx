import Layout from '@/components/app/layout';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const files = [
  'src/components/base/NestedThemeProvider.tsx',
  'src/components/purchase-widget/PurchaseWidget.tsx',
  'src/components/sections/dashboards/e-commerce/promo-slider/illustrations/Ai-tools.tsx',
  'src/components/sections/dashboards/e-commerce/promo-slider/illustrations/Rocket.tsx',
  'src/components/sections/dashboards/e-commerce/promo-slider/illustrations/Support.tsx',
  'src/components/sections/showcase/nested-theme-demo/LineChartCard.tsx',
  'src/components/sections/showcase/theme-presets/ThemePresetCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/BarChartCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/ButtonsCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/CheckboxesCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/ChipsCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/LineChartCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/ListCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/MeetingCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/MenuCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/PieChartCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/SaleFunnelChartCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/SlideCard.tsx',
  'src/components/sections/showcase/theme-presets/cards/ThemeCard.tsx',
  'src/components/sections/showcase/theme-presets/index.tsx',
  'src/components/settings-panel/VisionModePanel.tsx',
  'src/components/settings-panel/panel-illustrations/ComboIllustration.tsx',
  'src/components/settings-panel/panel-illustrations/SidebarDefaultIllustration.tsx',
  'src/components/settings-panel/panel-illustrations/SidebarIllustration.tsx',
  'src/components/settings-panel/panel-illustrations/SlimIllustration.tsx',
  'src/components/settings-panel/panel-illustrations/StackedIllustration.tsx',
  'src/components/settings-panel/panel-illustrations/TopnavDefaultIllustration.tsx',
  'src/components/settings-panel/panel-illustrations/TopnavIllustration.tsx',
];

const versions = [
  'V1.8.0 – Updated from V1.7.0',
  'V1.7.0 – Updated from V1.6.0',
  'V1.6.0 – Updated from V1.5.0',
  'V1.5.0 – Updated from V1.4.1',
  'V1.4.1 – Updated from V1.4.0',
  'V1.4.0 – Updated from V1.3.1',
  'V1.3.1 – Updated from V1.3.0',
  'V1.3.0 – Updated from V1.2.0',
  'V1.2.0 – Updated from V1.1.0',
  'V1.1.0 – Updated from V1.0.0',
];

const Migration = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-[1400px] px-6 py-10">
        <h1 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Migration
        </h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          {/* MAIN */}
          <div className="flex justify-center">
            <div className="w-full max-w-[520px]">
              <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                V1.8.0 – Updated from V1.7.0
              </h2>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                08 January, 2026
              </p>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  New
                </h3>

                <ul className="space-y-1 text-[13px] leading-5 text-gray-700 dark:text-gray-300">
                  {files.map((file) => (
                    <li key={file} className="break-all">
                      • {file}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                On this page
              </h4>

              <ul className="space-y-2 text-xs">
                {versions.map((v, i) => (
                  <li key={v}>
                    <a
                      href="#"
                      className={`block ${
                        i === 0
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400'
                      } hover:underline`}
                    >
                      {v}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
};

export default Migration;
