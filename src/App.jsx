import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="get-started" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold">Spin up your next app</h3>
                <p className="mt-3 text-gray-600">Use the live sandbox to design UI, wire APIs, and preview instantly. When you’re ready, export or deploy.</p>
                <ul className="mt-6 space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>Backend-first APIs with validation</li>
                  <li>Reusable, accessible UI components</li>
                  <li>Zero-config previews and hot reload</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-200 p-8">
                <h4 className="text-lg font-medium">Quick Start</h4>
                <ol className="mt-4 space-y-3 text-sm text-gray-700 list-decimal pl-5">
                  <li>Describe your idea</li>
                  <li>We scaffold backend and UI</li>
                  <li>Preview, iterate, and ship</li>
                </ol>
                <a href="#" className="mt-6 inline-block rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">Open Sandbox</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
