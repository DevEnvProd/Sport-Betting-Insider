import React from 'react';
import { Article } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex flex-col p-5 flex-1">
        <Link to={`/news/${article.id}`}>
          <h3 className="font-display font-semibold text-lg text-slate-900 group-hover:text-brand-blue transition-colors mb-3 line-clamp-2">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>
        
        <Link to={`/news/${article.id}`} className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-brand-blue uppercase tracking-wide">
          Read More <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};
