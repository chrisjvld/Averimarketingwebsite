import { useState } from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { BookingPage } from "./components/BookingPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "booking">("home");

  if (currentPage === "booking") {
    return <BookingPage onBack={() => setCurrentPage("home")} />;
  }

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
        <Hero onBookCall={() => setCurrentPage("booking")} />
        <Services />
        <About />
        <CTA onBookCall={() => setCurrentPage("booking")} />
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex flex-col items-center gap-4">
          <div className="text-sm text-gray-600">
            <span className="text-gray-500">Contact us:</span>{' '}
            <a 
              href="mailto:christoffer@averimarketing.com" 
              className="text-[#2A7FFF] hover:underline"
            >
              christoffer@averimarketing.com
            </a>
          </div>
          <div className="text-sm text-gray-500">
            © 2025 Averi Marketing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
