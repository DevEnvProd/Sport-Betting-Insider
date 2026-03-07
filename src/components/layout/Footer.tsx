import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl">
              Sports Betting <span className="font-light">Insider</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted source for sports betting news, odds, and expert analysis. We provide the latest updates on legal sports betting in the US.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase text-slate-200">Sports</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/nfl" className="hover:text-brand-blue transition-colors">NFL</Link></li>
              <li><Link to="/nba" className="hover:text-brand-blue transition-colors">NBA</Link></li>
              <li><Link to="/mlb" className="hover:text-brand-blue transition-colors">MLB</Link></li>
              <li><Link to="/nhl" className="hover:text-brand-blue transition-colors">NHL</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 uppercase text-slate-200">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/guides" className="hover:text-brand-blue transition-colors">Betting Guides</Link></li>
              <li><Link to="/odds" className="hover:text-brand-blue transition-colors">Live Odds</Link></li>
              <li><Link to="/tools" className="hover:text-brand-blue transition-colors">Betting Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 uppercase text-slate-200">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/responsible-gambling" className="hover:text-brand-blue transition-colors">Responsible Gambling</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p className="mb-2">© {new Date().getFullYear()} Sports Betting Insider. All rights reserved.</p>
          <p>
            Gambling Problem? Call 1-800-GAMBLER. Must be 21+. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
