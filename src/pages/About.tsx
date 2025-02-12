
import { NavBar } from "@/components/NavBar";

const About = () => {
  return (
    <main className="min-h-screen bg-nude-50">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-nude-300 mb-8">About Damdoom</h1>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-nude-300/90 leading-relaxed mb-6">
              Welcome to Cookies by Damdoom, where passion meets perfection in every bite. As a self-taught baker with a 
              dream that started in a small kitchen, I've transformed my love for baking into a journey of creating 
              joy through delicious treats.
            </p>
            <p className="text-nude-300/90 leading-relaxed mb-6">
              My story began with a simple chocolate chip cookie recipe that I would make for family and friends. 
              Their encouragement and love for my baked goods inspired me to expand my repertoire and share my creations 
              with a wider audience. Today, each recipe is carefully crafted and tested to ensure the perfect balance 
              of flavors and textures.
            </p>
            <p className="text-nude-300/90 leading-relaxed">
              What sets Cookies by Damdoom apart is not just the quality of ingredients or the unique flavor combinations, 
              but the love and attention to detail that goes into every single item. From our signature chocolate chip 
              cookies to our decadent tiramisu, each treat is made with care and precision to bring you the best possible 
              experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
