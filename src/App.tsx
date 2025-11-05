import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-6 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-tight text-white">Averi Marketing</div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center text-sm text-gray-500">
          © 2025 Averi Marketing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
