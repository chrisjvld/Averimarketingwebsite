import { ArrowLeft } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookingPageProps {
  onBack: () => void;
}

export function BookingPage({ onBack }: BookingPageProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"strategy-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-6 max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to home</span>
        </button>
      </header>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-88px)]">
        {/* Left Side - Dark */}
        <div className="bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] p-12 md:p-16 flex flex-col justify-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl">
              Book a free strategy call
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Let's discuss how we can help you build a predictable pipeline of qualified leads. 
              We'll review your current approach and share specific strategies tailored to your agency.
            </p>
            <div className="pt-4 space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                <p>30-minute consultation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                <p>No pressure, no commitment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                <p>We'll show you exactly how our system works</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Cal.com Embed */}
        <div className="bg-[#F8F8F8] p-12 md:p-16 flex flex-col justify-center">
          <Cal 
            namespace="strategy-call"
            calLink="christoffer-jamvold-hughes/strategy-call"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view"}}
          />
        </div>
      </div>
    </div>
  );
}
