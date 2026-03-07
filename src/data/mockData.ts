import { format, addDays } from 'date-fns';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
}

export interface GameOdds {
  id: string;
  league: 'NFL' | 'NBA' | 'MLB' | 'NHL' | 'NCAAF';
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'Scheduled' | 'Live' | 'Final';
  startTime: string;
  odds: {
    spread: { home: string; away: string; homeOdds: string; awayOdds: string };
    moneyline: { home: string; away: string };
    total: { over: string; under: string; line: string };
  };
}

export const articles: Article[] = [
  {
    id: '1',
    title: "Chiefs vs. Bills: AFC Championship Rematch Betting Preview",
    excerpt: "Patrick Mahomes and Josh Allen square off again in what promises to be an offensive shootout. Here's where the sharp money is moving.",
    category: "NFL",
    author: "James McCourt",
    date: format(new Date(), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/nfl/800/600",
    featured: true,
  },
  {
    id: '2',
    title: "NBA MVP Race: Jokic Pulls Ahead as Odds Shift Dramatically",
    excerpt: "After a triple-double streak, the Nuggets center is now the clear favorite. Is there any value left on the board?",
    category: "NBA",
    author: "Sarah Jenkins",
    date: format(addDays(new Date(), -1), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/nba/800/600",
  },
  {
    id: '3',
    title: "March Madness Bracketology: Early Sleepers to Watch",
    excerpt: "Don't sleep on these mid-major programs that could bust brackets this year.",
    category: "NCAAB",
    author: "Mike Ross",
    date: format(addDays(new Date(), -2), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/ncaab/800/600",
  },
  {
    id: '4',
    title: "UFC 300: Main Event Odds Analysis",
    excerpt: "Breaking down the stylistic matchup for the lightweight title fight.",
    category: "UFC",
    author: "Dan Hardy",
    date: format(addDays(new Date(), -3), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/ufc/800/600",
  },
];

export const games: GameOdds[] = [
  {
    id: 'g1',
    league: 'NBA',
    homeTeam: 'Lakers',
    awayTeam: 'Celtics',
    status: 'Scheduled',
    startTime: format(addDays(new Date(), 0), "h:mm a"),
    odds: {
      spread: { home: '-2.5', away: '+2.5', homeOdds: '-110', awayOdds: '-110' },
      moneyline: { home: '-140', away: '+120' },
      total: { over: '-110', under: '-110', line: '224.5' },
    },
  },
  {
    id: 'g2',
    league: 'NBA',
    homeTeam: 'Warriors',
    awayTeam: 'Suns',
    status: 'Live',
    homeScore: 88,
    awayScore: 82,
    startTime: 'Q3 4:12',
    odds: {
      spread: { home: '-4.5', away: '+4.5', homeOdds: '-115', awayOdds: '-105' },
      moneyline: { home: '-180', away: '+155' },
      total: { over: '-110', under: '-110', line: '231.5' },
    },
  },
  {
    id: 'g3',
    league: 'NHL',
    homeTeam: 'Rangers',
    awayTeam: 'Devils',
    status: 'Scheduled',
    startTime: format(addDays(new Date(), 0), "7:00 PM"),
    odds: {
      spread: { home: '-1.5', away: '+1.5', homeOdds: '+160', awayOdds: '-190' },
      moneyline: { home: '-150', away: '+130' },
      total: { over: '-115', under: '-105', line: '6.5' },
    },
  },
  {
    id: 'g4',
    league: 'MLB',
    homeTeam: 'Yankees',
    awayTeam: 'Red Sox',
    status: 'Final',
    homeScore: 5,
    awayScore: 3,
    startTime: 'Final',
    odds: {
      spread: { home: '-1.5', away: '+1.5', homeOdds: '+120', awayOdds: '-140' },
      moneyline: { home: '-130', away: '+110' },
      total: { over: '-110', under: '-110', line: '8.5' },
    },
  },
];
