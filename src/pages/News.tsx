import { articles } from '@/data/mockData';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { useSeo } from '@/lib/useSeo';

export function News() {
  useSeo({
    title: 'Betting News & Expert Analysis',
    description: 'Browse professional sports betting analysis, match predictions, and detailed strategy articles covering casino updates and regional Winbox esports tournament reviews.',
    keywords: 'sports betting analysis, esports news, winbox reviews, casino guides, match predictions'
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold mb-8">Betting News & Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
