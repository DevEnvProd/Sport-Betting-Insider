import { Ticket, MessageSquare, Trophy } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center">
             <div className="w-[260px] h-[520px] bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 shadow-xl overflow-hidden">
               <img src="https://picsum.photos/seed/roster/260/520" alt="Roster Selection" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            <h2 className="text-4xl font-display font-black text-slate-900 mb-12">IT'S EASY TO GET STARTED</h2>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Ticket className="h-12 w-12 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">STEP 1</h3>
                <p className="text-lg font-bold text-slate-800">Create an account online or download the app.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <MessageSquare className="h-12 w-12 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">STEP 2</h3>
                <p className="text-lg font-bold text-slate-800">Choose a daily fantasy sports contest and draft from all your favorite players.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Trophy className="h-12 w-12 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">STEP 3</h3>
                <p className="text-lg font-bold text-slate-800">Rack up big points to win big cash prizes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
