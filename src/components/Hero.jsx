import { Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9rQzS7mK3zH5ZlD9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
              <Star className="text-yellow-500" size={14} />
              <span>AI-powered development environment</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build full‑stack apps faster with Vibe
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 max-w-xl">
              Spin up production-ready backends and polished frontends in minutes. Preview live, iterate instantly, and ship.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">
                <Rocket size={18} className="mr-2" />
                Start Building
              </a>
              <a href="#features" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
    </section>
  );
}
