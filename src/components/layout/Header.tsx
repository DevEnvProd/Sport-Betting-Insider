import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Home as HomeIcon, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'SPORTS BETTING NEWS', href: '/news' },
    { name: 'ONLINE CASINO BONUSES', href: '/casino' },
    { name: 'Sports Betting – $250 Match Bonus', href: '/bonus' },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top Section: Logo and Banner */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center space-x-2 group">
           <span className="font-display font-bold text-3xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            Sports Betting <span className="font-light text-slate-600 group-hover:text-blue-400">Insider</span>
          </span>
        </Link>
        
        {/* Placeholder for the Banner Ad shown in screenshot */}
        <div className="hidden md:block w-[728px] h-[90px] bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden relative group cursor-pointer">
           <img src="https://picsum.photos/seed/banner/728/90" alt="Ad Banner" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <span className="bg-brand-green text-white font-bold px-4 py-2 rounded shadow-lg transform -rotate-2 group-hover:scale-110 transition-transform duration-300">JOIN NOW!</span>
           </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="w-full bg-slate-900 border-b border-slate-800 shadow-lg relative z-50">
        <div className="container mx-auto px-0 flex items-center h-14">
          {/* Home Icon Box - "Cool" Redesign */}
          <Link 
            to="/" 
            className="relative h-full w-16 bg-blue-600 flex items-center justify-center group overflow-hidden shrink-0"
          >
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <HomeIcon className="relative z-10 h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center h-full ml-4 space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative h-full flex items-center px-5 text-sm font-bold uppercase tracking-wider transition-colors group",
                  location.pathname === item.href 
                    ? "text-white bg-slate-800" 
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Cool underline effect */}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform transition-transform duration-300 origin-left",
                  location.pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          <div className="flex-1"></div>

          {/* Search & Mobile Toggle */}
          <div className="flex items-center h-full">
            <div className="hidden md:flex items-center h-full border-l border-slate-700">
               <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-none h-full w-14 transition-colors">
                 <Search className="h-5 w-5" />
               </Button>
            </div>
            
            {/* "New Articles" Indicator - Redesigned */}
            <div className="h-full bg-slate-800 border-l border-slate-700 flex items-center px-4 relative group cursor-pointer hover:bg-slate-700 transition-colors">
               <div className="flex flex-col items-end mr-2">
                 <span className="text-[10px] text-blue-400 font-bold leading-none uppercase tracking-wider">New</span>
                 <span className="text-[10px] text-slate-400 font-bold leading-none uppercase tracking-wider">Articles</span>
               </div>
               <span className="font-display font-black text-2xl text-white italic group-hover:text-blue-400 transition-colors">12</span>
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden ml-0 text-white hover:bg-slate-800 h-full w-14 rounded-none border-l border-slate-700" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav Menu - Moved INSIDE header for correct positioning */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-slate-900 border-t border-slate-800 absolute top-full left-0 w-full shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col py-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center justify-between px-6 py-4 text-sm font-bold uppercase border-b border-slate-800/50 transition-all duration-200 group",
                        location.pathname === item.href 
                          ? "bg-slate-800/80 text-blue-400 border-l-4 border-l-blue-500 pl-5" 
                          : "text-slate-300 hover:bg-slate-800 hover:text-white hover:pl-8"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        location.pathname === item.href ? "text-blue-500" : "text-slate-600 group-hover:text-white group-hover:translate-x-1"
                      )} />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Search */}
                <div className="p-4 bg-slate-900/50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full bg-slate-800 text-white pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto flex items-center">
          <div className="bg-[#222] text-white text-xs font-bold px-4 py-2 uppercase whitespace-nowrap">
            Breaking News
          </div>
          <div className="flex-1 px-4 py-2 overflow-hidden">
            <p className="text-xs text-slate-600 truncate animate-pulse">
              Monmouth Park Will Be Ready For Sports Betting By NFL Week 1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
