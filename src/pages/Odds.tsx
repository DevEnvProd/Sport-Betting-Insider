import { games } from '@/data/mockData';
import { OddsCard } from '@/components/cards/OddsCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useSeo } from '@/lib/useSeo';

export function Odds() {
  const [selectedLeague, setSelectedLeague] = useState<string>('All');
  
  useSeo({
    title: `${selectedLeague === 'All' ? 'Live Sports Betting Odds & Betting Lines' : `Real-time ${selectedLeague} Game Odds & Lines`} | Sport Betting Insider`,
    description: `Track real-time ${selectedLeague === 'All' ? 'multi-sport' : selectedLeague} betting odds, point spreads, head-to-head moneylines, and over/under numbers from top global books.`,
    keywords: `${selectedLeague} odds, sports betting lines, game spreads, live moneylines`
  });

  const leagues = ['All', 'NFL', 'NBA', 'MLB', 'NHL', 'NCAAF', 'UFC'];
  
  const filteredGames = selectedLeague === 'All' 
    ? games 
    : games.filter(g => g.league === selectedLeague);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-4xl font-display font-bold">Live Odds</h1>
        
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
          {leagues.map(league => (
            <Button
              key={league}
              variant={selectedLeague === league ? 'default' : 'outline'}
              onClick={() => setSelectedLeague(league)}
              className="whitespace-nowrap"
            >
              {league}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map(game => (
          <OddsCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
