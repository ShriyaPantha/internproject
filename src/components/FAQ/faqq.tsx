import Layout from "@/components/app/layout"

const Faqq = () => {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className="border-b px-6 py-4">
        <p className="text-sm text-gray-500">Misc / FAQ</p>
        <div className="flex items-center justify-between mt-2">
          <h1 className="text-2xl font-semibold">Faq</h1>

          <input
            placeholder="Search by keyword"
            className="w-72 rounded-md border px-4 py-2 text-sm"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-[300px_1fr] gap-6 px-6 py-6">
        
        {/* LEFT SIDEBAR (STICKY) */}
        <div className="sticky top-6 h-[calc(100vh-120px)] overflow-y-auto border-r pr-4">
          <h3 className="font-semibold text-blue-600 mb-4">AWS</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="text-blue-600 font-medium">
              How much do your services cost?
            </li>
            <li>Do you offer any money-back guarantee?</li>
            <li>Is 24/7 customer support available?</li>
            <li>Do you offer a trial version?</li>
            <li>What currencies do you support?</li>
            <li>How can I integrate AWS with my project?</li>
            <li>Can I use AWS for machine learning?</li>
            <li>What regions do AWS services cover?</li>
            <li>How does AWS handle data security?</li>
            <li>Is AWS cost-effective for startups?</li>
            <li>What SLAs are offered by AWS?</li>
            <li>Does AWS offer hybrid cloud solutions?</li>
          </ul>
        </div>

        {/* RIGHT CONTENT (SCROLLS) */}
        <div className="space-y-10">
          
          {/* FIRST SECTION */}
          <section>
            <h2 className="text-xl font-semibold mb-4">AWS</h2>

            <h3 className="font-semibold text-blue-600 mb-2">
              How much do your services cost?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our pricing is influenced by several key factors related to the
              specific requirements of your project. These include overall size,
              complexity, and scope of work.
            </p>
          </section>

          {/* SECOND SECTION (APPEARS AFTER SCROLL) */}
          <section>
            <h3 className="font-semibold mb-2">
              Is AWS cost-effective for startups?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              AWS’s pay-as-you-go model and free tier make it highly accessible
              for startups. Qualified startups can benefit from AWS Activate.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-blue-600 mb-2">
              Does AWS offer hybrid cloud solutions?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              AWS supports hybrid cloud architectures through AWS Outposts,
              allowing businesses to extend AWS infrastructure to on-premises.
            </p>
          </section>

          {/* CONTACT CARD */}
          <div className="bg-gray-50 rounded-xl p-6 flex items-center gap-6">
            <div className="text-5xl text-green-400">?</div>
            <div>
              <h4 className="font-semibold">
                Haven’t found the answer you were looking for?
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Feel free to message us or give us a call
              </p>
              <button className="mt-3 rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                Contact us
              </button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Faqq
