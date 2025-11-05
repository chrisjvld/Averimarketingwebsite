import { Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="px-6 py-24 bg-[#F8F8F8]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl">
          Ready to get more booked calls?
        </h2>
        <p className="text-xl text-gray-600">
          Let's talk - no pressure, no BS.
        </p>
        <div className="pt-4">
          <button 
            className="inline-flex items-center gap-2 bg-[#2A7FFF] hover:bg-[#2778F0] text-white px-8 py-[18px] rounded-[10px] transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
            style={{ fontFamily: 'Inter', fontWeight: 600 }}
          >
            <Calendar className="h-[18px] w-[18px]" strokeWidth={1.5} />
            Book a free strategy call
          </button>
        </div>
      </div>
    </section>
  );
}
