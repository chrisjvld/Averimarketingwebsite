import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-5xl">
            Our Strategy
          </h2>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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
            
            <p>
              We focus on scalable systems that drive consistent volume while maintaining quality. 
              Our process is designed to build predictable client flow - a long-term foundation for 
              sustainable growth.
            </p>
          </div>
        </div>
        
        <div className="md:pt-0 pt-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop"
            alt="Modern architecture"
            className="w-full h-[600px] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
