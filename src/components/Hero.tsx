import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] -mt-[72px] pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl text-white">
              We help agencies book more qualified calls - fast.
            </h1>
            <p className="text-xl text-gray-400">
              Done-for-you lead generation systems that bring clients to you.
            </p>
            <div className="pt-4 space-y-3">
              <button 
                className="inline-flex items-center gap-2 bg-[#2A7FFF] hover:bg-[#1E6EE6] text-white px-7 py-4 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
                style={{ 
                  fontFamily: 'Inter', 
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '0.25px',
                  boxShadow: '0px 4px 14px rgba(42, 127, 255, 0.25)'
                }}
              >
                <Calendar className="h-5 w-5" strokeWidth={1.5} />
                Book a free strategy call
              </button>
              <p className="text-sm text-gray-500">
                No pressure - just see if we're a fit.
              </p>
            </div>
            <p className="text-sm text-gray-500 pt-2">
              Trusted by agencies across the globe.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Minimal visual space - intentionally empty for clean aesthetic */}
          </div>
        </div>
      </div>
    </section>
  );
}
