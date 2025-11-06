export default function CTA() {
  return (
    <section id="get-started" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to build your next app?</h3>
            <p className="mt-1 text-blue-100">Spin up a full‑stack project with best practices baked in.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-blue-50"
            >
              Start Free
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
