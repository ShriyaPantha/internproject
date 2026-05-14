import Layout from '@/components/app/layout';
import Faqq from '@/components/FAQ/faqq';
import React from 'react'

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
const Faq = () => {
  return (
    <MainLayout>

    <div>
    <Faqq/>
    </div>
    </MainLayout>
  )
}

export default Faq
