import { Code2, Database, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Frontend Ready',
    desc: 'Vite + React + Tailwind with beautiful components and animations.'
  },
  {
    icon: Database,
    title: 'Persistent Backend',
    desc: 'FastAPI with MongoDB so your data is stored and queryable.'
  },
  {
    icon: Zap,
    title: 'Instant Preview',
    desc: 'Live sandbox with hot reload to iterate at the speed of thought.'
  },
  {
    icon: Shield,
    title: 'Best Practices',
    desc: 'Clean separation of concerns, validated schemas, and typed APIs.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need</h2>
          <p className="mt-3 text-gray-600">A curated toolkit that gets out of your way and lets you build.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
