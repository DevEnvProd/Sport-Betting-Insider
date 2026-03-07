import { Shield, Gift, Lock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-slate-200 pb-12">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-slate-100 rounded-full">
              <Shield className="h-8 w-8 text-slate-800" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase mb-1">New Jersey Casinos</h4>
              <p className="text-xs text-slate-500">Approved for real money gambling in New Jersey</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-slate-100 rounded-full">
              <DollarSign className="h-8 w-8 text-slate-800" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase mb-1">Exclusive Bonuses</h4>
              <p className="text-xs text-slate-500">The best offers so you don't have to search</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-slate-100 rounded-full">
              <Gift className="h-8 w-8 text-slate-800" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase mb-1">Bonus Codes</h4>
              <p className="text-xs text-slate-500">Claim the best bonuses using these codes</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-slate-100 rounded-full">
              <Lock className="h-8 w-8 text-slate-800" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase mb-1">Safe & Secure</h4>
              <p className="text-xs text-slate-500">We only review safe legal gambling sites</p>
            </div>
          </div>
        </div>

        {/* Fantasy Sports Reimagined */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 leading-[0.9]">
              FANTASY<br/>SPORTS<br/>REIMAGINED
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              FanDuel is more than just fantasy sports. It's the best way to watch the games, win real cash, and bring the action right into your living room.
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="relative z-10 w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              {/* Mock Phone Screen */}
              <div className="w-full h-full bg-slate-800 relative">
                 <img src="https://picsum.photos/seed/sportsapp/280/580" alt="App Screen" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                   <h3 className="text-white font-black text-3xl uppercase italic mb-2 drop-shadow-lg">Thursday Million</h3>
                   <Button className="bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-full px-8">Play Now</Button>
                 </div>
              </div>
            </div>
            {/* Decorative Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-blue/10 -skew-y-6 rounded-3xl -z-0"></div>
          </div>
        </div>

        {/* More Ways To Win */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-black text-slate-900 mb-16">MORE WAYS TO WIN</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Win Big</h3>
              <p className="text-4xl font-black text-brand-blue">$4,535,897,174+</p>
              <p className="text-sm text-slate-500">Total all-time payouts</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Play Free</h3>
              <p className="text-4xl font-black text-brand-blue uppercase">Play Contests</p>
              <p className="text-sm text-slate-500">You can win cash without ever paying a cent</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Beat Your Friends</h3>
              <p className="text-4xl font-black text-brand-blue uppercase">Friend Mode</p>
              <p className="text-sm text-slate-500">Play and talk trash the entire time</p>
            </div>
          </div>
          <div className="mt-12">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-lg px-12 py-6 h-auto rounded-sm">
              Play Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
