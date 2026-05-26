import { useParams, Link } from 'react-router-dom';
import { articles } from '@/data/mockData';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-8">The article you are looking for does not exist.</p>
        <Link to="/news">
          <Button>Back to News</Button>
        </Link>
      </div>
    );
  }

  // Get related articles (exclude current one)
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Breadcrumb / Back Link */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <Link to="/news" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article>
              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {article.date}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex items-center justify-between border-y border-slate-100 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mr-3">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{article.author}</p>
                      <p className="text-xs text-slate-500">Sports Betting Analyst</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-500 hover:text-[#1877F2] hover:bg-[#1877F2]/10">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-500 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-500 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-auto object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-slate-50 px-4 py-2 text-xs text-slate-500 italic border-t border-slate-100">
                  Image credit: Sports Betting Insider / Getty Images
                </div>
              </div>

              {/* Article Body - Dynamic content if available, else Mock Content */}
              <div className="prose prose-lg max-w-none text-slate-700 prose-headings:font-display prose-headings:font-bold prose-a:text-brand-blue hover:prose-a:text-brand-blue/80 prose-img:rounded-xl">
                {article.content ? (
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                ) : (
                  <>
                    <p className="lead text-xl text-slate-600 font-medium mb-6">
                      {article.excerpt}
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                    <h3>Key Matchups to Watch</h3>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-brand-blue p-6 my-8 rounded-r-lg">
                      <h4 className="text-brand-blue font-bold text-lg mb-2 mt-0">Betting Tip</h4>
                      <p className="mb-0 text-slate-700">
                        Consider taking the over on total points if the weather conditions remain clear. Historical data suggests high-scoring games in these matchups.
                      </p>
                    </div>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h3>Expert Analysis</h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                    </p>
                    
                    <ul>
                      <li><strong>Moneyline Value:</strong> Look for value in the underdog early in the week.</li>
                      <li><strong>Spread Movement:</strong> Watch for sharp money moving the line by more than 1.5 points.</li>
                      <li><strong>Player Props:</strong> Focus on rushing yards for the visiting team's quarterback.</li>
                    </ul>

                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </p>
                  </>
                )}
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-bold text-slate-900 mr-2 flex items-center">
                    <Tag className="h-4 w-4 mr-1" /> Tags:
                  </span>
                  {['Sports Betting', article.category, 'Odds', 'Analysis', 'Expert Picks'].map((tag, index) => (
                    <span key={index} className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Ad Placeholder */}
            <div className="bg-slate-100 rounded-lg p-8 text-center border border-slate-200 min-h-[300px] flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Advertisement</span>
              <div className="w-full h-full bg-slate-200 rounded flex items-center justify-center text-slate-400 font-bold">
                300x600 Ad Unit
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-900 text-white rounded-xl p-6 shadow-lg">
              <h3 className="font-display font-bold text-xl mb-2">Get Daily Picks</h3>
              <p className="text-slate-300 text-sm mb-4">Join 50,000+ bettors getting our best bets delivered to their inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold">
                  SUBSCRIBE FREE
                </Button>
              </div>
            </div>

            {/* Trending / Related */}
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-4 border-l-4 border-brand-blue pl-3">
                More {article.category} News
              </h3>
              <div className="space-y-4">
                {relatedArticles.map(related => (
                  <Link key={related.id} to={`/news/${related.id}`} className="group flex gap-4 items-start">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                      <img 
                        src={related.imageUrl} 
                        alt={related.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-blue line-clamp-2 mb-1 leading-snug">
                        {related.title}
                      </h4>
                      <span className="text-xs text-slate-500">{related.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
