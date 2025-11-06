import founderImage from "@/assets/4689d90526ecc9744c8606a164056746ffe63530.png";

export function About() {
  return (
    <section className="px-6 py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            <img
              src={founderImage}
              alt="Christoffer, Founder of Averi Marketing"
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-gray-600">
              Christoffer, Founder of Averi Marketing
            </p>
          </div>
          
          <div className="space-y-6 md:pt-8">
            <h2 className="text-5xl">
              Meet The Founder
            </h2>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                We started Averi Marketing with a belief: that real value is created in the operations 
                of real businesses - and that there's a better, more thoughtful way to acquire and grow them.
              </p>
              
              <p>
                The B2B services sector is one of the largest sectors globally and stands out for its 
                durability and the people behind it.
              </p>
              
              <p>
                At Averi Marketing, we are building a firm that preserves legacy, values transparency, 
                and focuses relentlessly on execution.
              </p>
              
              <p>
                We know the pride and persistence it takes to build a great company and we acquire 
                businesses with care and respect - ensuring smooth transitions and a strong future for 
                teams and legacies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
