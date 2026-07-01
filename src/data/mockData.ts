import { format, addDays } from 'date-fns';
import { winboxArticles } from './winboxArticles';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
  content?: string;
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

const baseArticles: Article[] = [
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
  {
    id: '5',
    title: "The Rise of Virtual Sports in Online Casinos: Is It Worth the Hype?",
    excerpt: "The line between traditional sports betting and casino games is blurring rapidly. We look at virtual soccer, basketball, and racing to see if RNG-based sports games can ever match the thrill of the real thing.",
    category: "Casino",
    author: "Marcus Vance",
    date: format(addDays(new Date(), -1), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/virtualcasino/800/600",
    content: `<h2>The New High-Pace Frontier of Casino Action</h2><p>For decades, sports bettors and slot players existed in entirely separate loops of the gaming world. The sports bettor spent days analyzing roster sheets, injury reports, and weather forecasts, while the casino enthusiast enjoyed instant, rapid-fire results. But recently, a fascinating hybrid has taken over online lobby layouts: Virtual Sports betting.</p><p>These are not video games simulated by human players; they are fully automated, graphic-heavy simulations driven by complex Random Number Generator (RNG) math. Every two to three minutes, a brand-new "season" or "match" kicks off—be it virtual dog racing, soccer tournaments, or basketball shootouts. The question is: why are traditional sports bettors flocking to these rapid games, and should you give them a go?</p><h2>How RNG Sports Simulation Works</h2><p>In virtual sports, the odds displayed represent the actual probability weight stored inside the algorithms. A heavy virtual favorite is mathematically much more likely to string together passing sequences and score, but just like in real life, the RNG code allows for upset potentials. The matches are rendered in real-time using CGI engines, complete with professional commentary and realistic crowd noises. The appeal is straightforward: absolute immediacy. There is no waiting for the weekend or dodging weather delays.</p><ul><li><strong>Speed of Play:</strong> Matches settle in 120 seconds, allowing for continuous betting cycles.</li><li><strong>Pure Data:</strong> Zero real-world variables like player fatigue, bad referee calls, or personal scandals to account for.</li><li><strong>Constant Availability:</strong> 24/7 league schedules that run uninterrupted.</li></ul><h2>Is it Sports Betting or a Sophisticated Slot?</h2><p>Bettors must keep in mind that at their core, virtual sports are built on the exact same licensing and RNG logic as modern video slots or computerized roulette tables. A statistical house edge is baked directly into the system. While you can spot trends across the simulated team histories, those previous results do not influence the next math seed generated. It is an amazing option for casual sports enthusiasts looking for a quick fix, but serious bettors should treat it as an enjoyable, fast-paced side distraction rather than a market to conquer with sharp analysis.</p>`
  },
  {
    id: '6',
    title: "Evolution of Live Dealer Sports-Themed Casino Games",
    excerpt: "From football-themed live roulette games like Football Studio to cards-based sports table setups, live casinos have integrated sports in fresh, engaging ways. Here is our hands-on review.",
    category: "Casino",
    author: "Elena Rostova",
    date: format(addDays(new Date(), -2), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/livecasino/800/600",
    content: `<h2>Bridging the Gap: Live Casino Dealers Talk Sports</h2><p>If you have spent any time in legal online live-dealer lobbies recently, you have likely noticed a shift in theme. Game developers are no longer sticking to standard green felt blackjack and quiet roulette dealers in tuxedoes. Instead, casinos have successfully combined sports punditry with quick-fire interactive tables, creating a lively environment where host chat boards are dominated by debates over Premier League transfers, UFC cards, and NBA playoff results.</p><p>The most prominent example of this synthesis is the live card game segment, exemplified by titles like "Football Studio". But what makes these sports-themed hybrid games so sticky for natural sports enthusiasts? We spent some hands-on hours testing the prominent tables to see if they live up to the hype.</p><h2>The Casual Appeal of High Card Showdowns</h2><p>Games like Football Studio are incredibly simple to understand. The core loop is virtually identical to classical high-card casino games (e.g., Dragon Tiger). The dealer draws one card for the "Home" side and one card for the "Away" side. Players bet on Home, Away, or a Draw. Whichever card is of higher rank wins the hand.</p><p>What keeps players deeply engaged is not the complex strategy—there isn't any—but the atmosphere. The entire studio is modeled like an upscale sports broadcasting desk. Complete with digital goal celebrations, live match updates scrolling on bottom tickers, and hosts who literally function as friendly sports commentators. As a player, you can bet on hands while debating whether Real Madrid will secure another Champion's League title, or if the Lakers should trade their draft picks. The dealer actively reads the live chat, turning the table into an interactive watch party during major tournaments.</p><h2>The Verdict: Pure Social Entertainment</h2><p>These games are explicitly designed for relaxed, casual players who want to relax and chat with fellow sports fans. The fast-paced card rounds serve as a secondary backdrop to the community banter. While they don't offer the deep cerebral calculations of live blackjack or sports-book hedging, they represent a fantastic, highly engaging social experience for any casual sports fan looking to pass some downtime.</p>`
  },
  {
    id: '7',
    title: "The Mobile Esports Craze: How Platforms Like Winbox are Shaping Regional Tournaments",
    excerpt: "Mobile eSports tournaments are pulling millions of viewers across Southeast Asia. We look at the top tier competitive titles and why platforms like Winbox are becoming the go-to hubs for serious gaming enthusiasts.",
    category: "Esports",
    author: "Jeremy 'Spitfire' Lim",
    date: format(addDays(new Date(), -1), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/esportssea/800/600",
    content: `<h2>Southeast Asia's Domination in Mobile Esports</h2><p>While Western competitive gaming still heavily revolves around PC leagues like League of Legends and Counter-Strike 2, Southeast Asia took a completely different path. Driven by cheap, high-performance smartphones and seamless network coverage, regional players skipped the expensive PC rigs altogether. Titles like Mobile Legends: Bang Bang (MLBB), PUBG Mobile, and Free Fire are now filling local arenas, drawing millions of simultaneous live streaming viewers, and creating national esport celebrities.</p><p>As these leagues mature, the eco-system surrounding them has expanded. Dedicated virtual spaces have emerged to help enthusiasts track match stats, stream amateur brackets, and place predictions. A standout example is <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" class="font-bold text-brand-blue hover:underline">winbox</a>, which has established itself as a premier venue for tracking Asian match statistics, hosting community leagues, and offering real-time betting options on mobile esports tournaments.</p><h2>Understanding the Appeal of Mobile Competitions</h2><p>Western critics initially doubted whether esports played on 6-inch phone screens could retain tactical depth. However, a single look at an MPL (Mobile Legends Professional League) draft phase instantly dispels those biases. Teams swap picks and counters in real-time, executing hyper-coordinated split pushes and map-rotation plays calculated to the millisecond.</p><p>Regional interest has peaked to a point where governments are actively funding training facilities, and mobile tournaments are recognized as official medal events in the SEA Games. The barriers to entry are incredibly minor: any teenager with a budget smartphone can download the game client and begin climbing the ranks, with dreams of being scouted by top-tier organizations like Fnatic ONIC or Blacklist International.</p><h2>The Role of Integrated Hubs</h2><p>In this dynamic landscape, staying updated on rosters, live match telemetry, and schedule changes is crucial. Platforms like <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" class="font-bold text-brand-blue hover:underline">winbox</a> are meeting this demand by compiling localized stats and giving gaming communities direct ways to back their favorite squads. Whether you are hedging on first-turret takedowns or analyzing the pick/ban ratios of regional qualifiers, the modernization of these specialized betting and hub systems has successfully elevated mobile esports into a top-tier betting market alongside traditional sports.</p>`
  },
  {
    id: '8',
    title: "Winbox Esports Betting Guide: Maximize Value on Upcoming Valorant and Dota 2 Majors",
    excerpt: "With the international competitive gaming season heating up, identifying value in the esports betting market is all about stats. Here's a breakdown of how to use Winbox's analytical tools to get ahead.",
    category: "Esports",
    author: "Chris 'Method' Harris",
    date: format(addDays(new Date(), -2), 'MMM d, yyyy'),
    imageUrl: "https://picsum.photos/seed/esportsguide/800/600",
    content: `<h2>Navigating the Volatile World of Esports Betting</h2><p>Unlike traditional athletic sports, where decades of institutional stats can stabilize a betting market, esports exists in a state of constant, chaotic flux. Balance patches roll out every month, game developers completely redesign maps, and young rosters can shift from regional underdogs to world champions in a single weekend. For the standard sports bettor, this volatility can look intimidating. But for those who know how to extract value from live data, it represents a goldmine.</p><p>With the Valorant Champions Tour (VCT) and the massive Dota 2 international majors quickly approaching on the tournament calendar, mastering the digital metrics is essential. By digging into the live analytics portal on the official <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" class="font-bold text-brand-blue hover:underline">winbox</a> platform, experienced bettors can track live kill-to-death ratios, first-blood percentages, and objective control metrics before lock-in.</p><h2>Applying Traditional Metrics to Esports</h2><p>Analyzing an esports match isn't fundamentally different from breaking down an NFL drive; you are looking for systematic, repeatable advantages. Here are the core factors we analyze during our preparation rounds:</p><ul><li><strong>Map Pools and Bans:</strong> In games like Valorant, some squads are mathematically dominant on pick-heavy maps like Bind, but struggle on open maps like Breeze. Always look at map pick/ban histories before the line moves.</li><li><strong>Draft and Team Composition:</strong> In Dota 2, games can often be decided in the drafting stage. A defensive draft that scales into the late-game will lose early tempo but dominate if they can stretch the match past 35 minutes. Identifying these thresholds is key for live in-play staking.</li><li><strong>First Blood and Objective Control:</strong> Teams that secure the first kill or grab early objectives (like Rift Heralds or Pistol Rounds) are statistically on track to win over 70% of professional series.</li></ul><h2>Harnessing Live Analytics</h2><p>Because esport matches are incredibly fast-paced, live in-play betting offers some of the highest value lines on the market. If a world-class roster suffers a setback during the early rounds due to a minor drafting mistake, their odds might drop significantly. Using real-time trackers on platforms like <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" class="font-bold text-brand-blue hover:underline">winbox</a> allowing you to monitor active economy gaps, creep scores, and ultimate usage timers makes it possible to spot the recovery potential before the market adjusts. Watch the matches, study the team stats, and leverage tech platform speed to maximize your returns.</p>`
  },
];

export const articles: Article[] = [...baseArticles, ...winboxArticles];

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
