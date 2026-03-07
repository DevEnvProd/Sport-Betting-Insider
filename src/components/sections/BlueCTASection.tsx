import { Button } from '@/components/ui/button';

export function BlueCTASection() {
  return (
    <section className="bg-brand-blue py-20 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-black leading-tight">
            We don't haze<br/>rookies.
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            For new players, we offer special contests designed to let you play for real cash while you learn the ropes — no experienced players allowed.
          </p>
        </div>
        
        <div className="bg-white text-slate-900 p-8 md:p-12 text-center rounded-sm shadow-xl max-w-md mx-auto w-full">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
              FD
            </div>
            <span className="ml-3 text-3xl font-black tracking-tight">FANDUEL</span>
          </div>
          <h3 className="text-xl font-bold mb-2">NFL Beginner Double Up</h3>
          <p className="text-slate-600 mb-8">All winners get double their entry fee</p>
          <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-6 text-lg rounded-full">
            Enter Now
          </Button>
        </div>
      </div>
    </section>
  );
}
