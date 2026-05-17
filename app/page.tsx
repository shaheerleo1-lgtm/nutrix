'use client';

import { motion } from 'motion/react';
import { ArrowRight, Leaf, Shield, Zap } from 'lucide-react';
import ChatWidget from '@/components/ChatWidget';

const PRODUCTS = [
  {
    name: "Morning Renew",
    desc: "Energizing blend with green tea and lemon.",
    price: "$29.99",
    image: "https://picsum.photos/seed/herb1/400/500",
  },
  {
    name: "Nightly Reset",
    desc: "Calming herbal infusion for deep recovery.",
    price: "$34.99",
    image: "https://picsum.photos/seed/herb2/400/500",
  },
  {
    name: "Turmeric Boost",
    desc: "Anti-inflammatory extract for gut health.",
    price: "$24.99",
    image: "https://picsum.photos/seed/herb3/400/500",
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-emerald-100" />
          </div>
          <span className="text-2xl font-playfair font-bold tracking-tight">Herbal Nutrix</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-emerald-800 transition-colors">Products</a>
          <a href="#" className="hover:text-emerald-800 transition-colors">Our Story</a>
          <a href="#" className="hover:text-emerald-800 transition-colors">Science</a>
        </div>
        <button className="px-6 py-2 border border-stone-300 rounded-full text-sm font-medium hover:border-stone-900 transition-all">
          Shop Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6 text-emerald-800">
            <span className="h-px w-8 bg-emerald-800" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">100% Organic Purity</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-playfair leading-[0.9] mb-8">
            Nature's <span className="italic text-emerald-800">Cleanse</span> for Your Body.
          </h1>
          <p className="text-lg text-stone-600 mb-10 max-w-md leading-relaxed">
            Premium detox solutions formulated with ancient herbal wisdom and modern science. Restore your energy, clarity, and vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-800 text-white rounded-full font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20">
              Explore Collection <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border border-stone-200 rounded-full font-medium hover:bg-stone-100 transition-all">
              Watch Our Process
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square"
        >
          <div className="absolute -inset-4 border border-emerald-800/10 rounded-[4rem] group-hover:inset-0 transition-all duration-700" />
          <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img 
              src="/assets/images/herbal_nutrix_hero.png" 
              alt="Herbal Nutrix Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Float badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-[200px]"
            >
              <p className="text-xs font-bold uppercase text-emerald-800 mb-1">Featured</p>
              <p className="font-playfair text-xl">The 14-Day Reset Bundle</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="bg-stone-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl mb-4">Why Herbal Nutrix?</h2>
            <p className="text-stone-500 max-w-xl mx-auto tracking-wide uppercase text-xs font-bold">Uncompromising quality for your wellness</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Lab Tested", text: "Every batch is verified for purity and potency." },
              { icon: Leaf, title: "Farm to Cup", text: "Organic ingredients sourced directly from ethical farms." },
              { icon: Zap, title: "Bio-Active", text: "Maximum absorption through optimal temperature drying." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-white rounded-3xl text-center hover:shadow-xl transition-all border border-stone-200"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-6 h-6 text-emerald-800" />
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3">{benefit.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-playfair text-5xl mb-4">Crafted Selections</h2>
            <p className="text-stone-500">Pick your path to a cleaner lifestyle.</p>
          </div>
          <a href="#" className="text-stone-900 border-b border-stone-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-emerald-800 hover:border-emerald-800 transition-colors transition-all">
            See All Items
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-stone-200 shadow-md">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-playfair text-2xl mb-1">{prod.name}</h3>
                  <p className="text-stone-500 text-sm">{prod.desc}</p>
                </div>
                <span className="font-bold text-emerald-800">{prod.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-stone-300 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Leaf className="w-8 h-8" />
              <span className="text-3xl font-playfair font-bold">Herbal Nutrix</span>
            </div>
            <p className="max-w-sm mb-8 opacity-70">
              Restoring human health through the potent power of wild-harvested botanicals. Joined by thousands on the journey to vitality.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-colors cursor-pointer">In</div>
              <div className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-colors cursor-pointer">Tw</div>
              <div className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-colors cursor-pointer">Fb</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Categories</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 italic transition-opacity">Detox Teas</a></li>
              <li><a href="#" className="hover:opacity-100 italic transition-opacity">Elixirs</a></li>
              <li><a href="#" className="hover:opacity-100 italic transition-opacity">Accessories</a></li>
              <li><a href="#" className="hover:opacity-100 italic transition-opacity">Bundles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-sm mb-4 opacity-70">Special offers and wellness tips.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Email" className="bg-emerald-800/50 border border-emerald-700 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-emerald-500" />
              <button className="bg-white text-emerald-900 p-2 rounded-full"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-emerald-800/50 mt-16 pt-8 flex flex-col md:row justify-between text-xs opacity-50">
          <p>© 2024 Herbal Nutrix. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </main>
  );
}
