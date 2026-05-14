import Layout from '@/components/app/layout';
import React from 'react'

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
const Showcase = () => {
  return (
    <MainLayout>

    <div>
      
    </div>
    </MainLayout>
  )
}

export default Showcase
