import { Hero } from '@/components/sections/Hero';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { BlueCTASection } from '@/components/sections/BlueCTASection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AppDownloadSection } from '@/components/sections/AppDownloadSection';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { articles } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  // Use all articles for the news grid
  const newsArticles = articles;

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <FeaturesSection />
      
      <BlueCTASection />
      
      <HowItWorksSection />
      
      <AppDownloadSection />
      
      {/* Up to the Minute Sports Betting News */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-display font-black text-slate-900 uppercase">
              UP TO THE MINUTE SPORTS BETTING NEWS
            </h2>
            <Link to="/news">
              <Button variant="ghost" className="text-brand-blue hover:text-brand-blue/80 hover:bg-transparent font-bold">
                VIEW ALL <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
