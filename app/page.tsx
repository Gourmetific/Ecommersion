import Link from "next/link";
import { ArrowRight, BarChart2, Globe, Zap, Sparkles, Target, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobeAnimation from "@/components/globe-animation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          {/* 3D Globe Animation - daha görünür */}
          <div className="absolute inset-0 z-[1] opacity-100 md:opacity-95">
            <GlobeAnimation />
          </div>
          
          {/* Overlay gradient for better text readability - daha az opak */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-b from-slate-900/75 via-slate-900/50 to-slate-900/75 md:from-slate-900/70 md:via-slate-900/45 md:to-slate-900/70"></div>
          
          {/* Geometric shapes - minimal, globe'e odaklanmak için */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[2] opacity-30 md:opacity-40">
            <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-500/5 rounded-full mix-blend-overlay blur-xl animate-pulse"></div>
            <div
              className="absolute top-[40%] right-[10%] w-72 h-72 bg-purple-500/5 rounded-full mix-blend-overlay blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-[15%] left-[15%] w-80 h-80 bg-pink-500/5 rounded-full mix-blend-overlay blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Grid overlay -  */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0zMCA2MFYzMEgwdjMwaDMweiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-5 z-[2]"></div>
        </div>

        {/* Content */}
        <div className="container relative z-[3] mx-auto px-4 text-center pt-32">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium">
            E-Commerce Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed drop-shadow-md">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-2">
            The Cross-Border Power of E-Commerce
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed drop-shadow-md">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-2">
          The Global Path of E-Commerce
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
            We create and develop our own e-commerce brands with innovative
            approaches and creative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              <Link href="/our-story">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg bg-transparent text-white border-white hover:bg-white/10 transition-all duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Managing Brands Section */}
      <section className="pt-4 md:pt-6 pb-16 md:pb-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden -mt-4">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
 
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed drop-shadow-md text-center">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-2">
          Managing Brands
            </span>
          </h2>
  
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {/* Creative Solutions */}
              <div className="group relative bg-gradient-to-br from-blue-50 via-blue-50/50 to-purple-50/30 rounded-2xl p-6 md:p-7 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-lg border border-blue-100/50 overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Creative Solutions
                  </h4>
                  <ul className="space-y-2.5 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-blue-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Product positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Brand story creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">User experience-focused strategies</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Strategies */}
              <div className="group relative bg-gradient-to-br from-purple-50 via-pink-50/50 to-purple-50/30 rounded-2xl p-6 md:p-7 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-lg border border-purple-100/50 overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    Strategies
                  </h4>
                  <ul className="space-y-2.5 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-purple-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Market analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Competitive advantage development</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Working Principle */}
              <div className="group relative bg-gradient-to-br from-pink-50 via-pink-50/50 to-blue-50/30 rounded-2xl p-6 md:p-7 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-lg border border-pink-100/50 overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-900 group-hover:text-pink-600 transition-colors">
                    Working Principle
                  </h4>
                  <ul className="space-y-2.5 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-pink-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Data-driven decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Agile team structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 font-bold mr-2.5 mt-1">•</span>
                      <span className="group-hover:text-gray-900 transition-colors">Sustainable growth approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden bg-gray-100">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group flex flex-col items-center text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-muted-foreground">
                Connecting businesses to customers across the world with
                seamless e-commerce solutions.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
              <p className="text-muted-foreground">
                Optimized platforms that deliver lightning-fast experiences for
                both merchants and customers.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data-Driven</h3>
              <p className="text-muted-foreground">
                Powerful analytics and insights that help businesses make
                informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environment Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-purple-600/10 rounded-full text-purple-600 text-sm font-medium mb-4">
              Our Culture
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Great Environment for Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We believe in creating a positive, collaborative workspace where
              creativity thrives and every team member can grow professionally.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
              <p className="text-muted-foreground">
                Remote-friendly policies that prioritize work-life balance and
                productivity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Collaborative Culture
              </h3>
              <p className="text-muted-foreground">
                An open environment where ideas are shared and innovation is
                encouraged.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Growth Opportunities
              </h3>
              <p className="text-muted-foreground">
                Continuous learning and professional development for all team
                members.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white border-none"
            >
              <Link href="/careers">
                Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
