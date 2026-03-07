import { articles } from '@/data/mockData';
import { Button } from '@/components/ui/button';

export function Hero() {
  const featuredArticle = articles[0];

  return (
    <section className="py-8 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Slider Area */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative aspect-[16/9] lg:aspect-auto lg:h-[400px] group">
            <img 
              src={featuredArticle.imageUrl} 
              alt="Featured" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span className="bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded w-fit mb-3 uppercase">
                {featuredArticle.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                {featuredArticle.title}
              </h2>
              <p className="text-slate-200 line-clamp-2 mb-4 hidden md:block">
                {featuredArticle.excerpt}
              </p>
            </div>
            
            {/* Slider Dots (Mock) */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
            </div>
          </div>

          {/* Sidebar Ad Area */}
          <div className="hidden lg:flex flex-col justify-center items-center bg-white border border-slate-200 p-4 h-[400px]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto flex items-center justify-center text-white font-bold text-2xl">
                FD
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900">FANDUEL</h3>
              <div className="bg-slate-100 p-4 rounded-lg border border-dashed border-slate-300">
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Use Code:</p>
                <p className="text-xl font-bold text-brand-blue">250MATCH</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-slate-900">FOR 100%</p>
                <p className="text-2xl font-bold text-slate-900">UP TO $250</p>
                <p className="text-[10px] text-slate-500">FIRST DEPOSIT MATCH BONUS</p>
              </div>
              <Button className="w-full bg-[#ffaa00] hover:bg-[#ff9900] text-white font-bold text-lg uppercase shadow-md">
                Join Now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
