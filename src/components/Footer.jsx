import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Vibe Coding. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50">
              <Github size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
