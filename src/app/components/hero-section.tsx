import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709541658608-dfe38af68925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHN0YWluZWQlMjBnbGFzc3xlbnwxfHx8fDE3Njk5NTM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Church interior with stained glass"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">
          Welcome to Grace Community Church
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8">
          A place of faith, hope, and love
        </p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join us as we worship together, grow in faith, and serve our community with the love of Christ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Visit Us
          </button>
          <button
            onClick={() => document.getElementById("doctrines")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors dark:hover:bg-white/20"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}