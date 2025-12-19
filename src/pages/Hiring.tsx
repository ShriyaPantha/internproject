import Layout from "@/components/app/layout";


function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const Hiring= () => {
  return ( 
    <MainLayout>
    <div className="p-6 text-xl font-semibold"></div>;
    </MainLayout>
    );
};
export default Hiring;
