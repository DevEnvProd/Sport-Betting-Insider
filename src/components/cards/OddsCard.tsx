import React from 'react';
import { GameOdds } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface OddsCardProps {
  game: GameOdds;
}

export const OddsCard: React.FC<OddsCardProps> = ({ game }) => {
  const isLive = game.status === 'Live';
  
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-slate-700 hover:bg-slate-900">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-slate-500">{game.league}</span>
          {isLive ? (
            <Badge variant="destructive" className="animate-pulse text-[10px] px-1.5 py-0">LIVE</Badge>
          ) : (
            <span className="text-xs text-slate-500">{game.startTime}</span>
          )}
        </div>
        {isLive && (
          <span className="text-xs font-mono text-brand-accent">{game.startTime}</span>
        )}
      </div>

      <div className="space-y-3">
        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-display font-bold text-lg">{game.awayTeam}</span>
            {game.awayScore !== undefined && (
              <span className="font-mono text-lg font-bold text-slate-300">{game.awayScore}</span>
            )}
          </div>
          <div className="flex space-x-2 text-xs font-mono">
            <div className="flex flex-col items-center justify-center w-12 h-10 bg-slate-800 rounded">
              <span className="text-slate-400">{game.odds.spread.away}</span>
              <span className="text-[10px] text-slate-500">{game.odds.spread.awayOdds}</span>
            </div>
            <div className="flex flex-col items-center justify-center w-12 h-10 bg-slate-800 rounded">
              <span className="text-slate-400">{game.odds.moneyline.away}</span>
            </div>
            <div className="flex flex-col items-center justify-center w-12 h-10 bg-slate-800 rounded">
              <span className="text-slate-400">O {game.odds.total.line}</span>
              <span className="text-[10px] text-slate-500">{game.odds.total.over}</span>
            </div>
          </div>
        </div>

        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-display font-bold text-lg">{game.homeTeam}</span>
            {game.homeScore !== undefined && (
              <span className="font-mono text-lg font-bold text-slate-300">{game.homeScore}</span>
            )}
          </div>
          <div className="flex space-x-2 text-xs font-mono">
            <div className="flex flex-col items-center justify-center w-12 h-10 bg-slate-800 rounded">
              <span className="text-slate-400">{game.odds.spread.home}</span>
              <span className="text-[10px] text-slate-500">{game.odds.spread.homeOdds}</span>
            </div>
            <div className="flex flex-col items-center justify-center w-12 h-10 bg-slate-800 rounded">
              <span className="text-slate-400">{game.odds.moneyline.home}</span>
            </div>
            <div className="flex flex-col items-center justify-center w-12 h-10 bg-slate-800 rounded">
              <span className="text-slate-400">U {game.odds.total.line}</span>
              <span className="text-[10px] text-slate-500">{game.odds.total.under}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-[10px] text-slate-500 uppercase tracking-wider">
        <span>Spread</span>
        <span>Money</span>
        <span>Total</span>
      </div>
    </div>
  );
};
