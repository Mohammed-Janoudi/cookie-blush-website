
export const Hero = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-nude-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-nude-100 text-nude-300 rounded-full text-sm">
              Handcrafted with love
            </span>
            <h1 className="text-4xl md:text-6xl font-light text-nude-300 leading-tight">
              Discover our artisanal cookie collection
            </h1>
            <p className="text-lg text-nude-300/80">
              Each cookie is carefully crafted using traditional recipes and the finest ingredients
            </p>
            <button className="px-8 py-3 bg-nude-200 text-white rounded-full hover:bg-nude-200/90 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="aspect-square rounded-full bg-nude-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder for cookie image */}
              <div className="w-3/4 h-3/4 rounded-full bg-nude-200/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
