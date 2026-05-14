import Layout from '@/components/app/layout'
import React from 'react'

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}

const Guide = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Getting Started Guide
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Learn how to use the platform step by step
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Introduction
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                Overview of the system and basic concepts you should know.
              </p>
              <button className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                Learn more →
              </button>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Setup Guide
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                Step-by-step instructions to set up your environment.
              </p>
              <button className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                Learn more →
              </button>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Best Practices
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                Tips and tricks to work faster and avoid common mistakes.
              </p>
              <button className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                Learn more →
              </button>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Guide
