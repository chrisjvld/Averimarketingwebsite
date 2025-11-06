import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 space-y-6">
              <h2 className="text-3xl">
                Our Strategy
              </h2>
              
              <div className="space-y-4 text-gray-800 text-sm leading-relaxed">
                <p>
                  Most agencies waste time chasing cold prospects. We don't. Our approach is built on 
                  real-time signal intelligence - tracking buying patterns, hiring trends, and market 
                  shifts to find companies that are actually ready to invest in marketing.
                </p>
                
                <p>
                  We use a proprietary stack that tracks lead signals across data sources. That 
                  means verified contacts, direct decision-makers, and enriched firmographic data that 
                  others can't reach.
                </p>
                
                <p>
                  Every outreach we run is timed, targeted, and personalized. No spray-and-pray. No 
                  outdated lists. Just qualified conversations with agencies and businesses that are 
                  ready to grow.
                </p>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-auto">
              <ImageWithFallback
                src="/images/services.svg"
                alt="Minimal workspace illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
