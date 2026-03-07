import { Button } from '@/components/ui/button';

export function AppDownloadSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-left max-w-md">
            <h2 className="text-3xl font-display font-black text-slate-900 mb-4">
              GET DAILY FANTASY SPORTS AT YOUR FINGERTIPS ANYTIME, ANYWHERE.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on App Store" 
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
        
        {/* Devices Image Mockup */}
        <div className="max-w-4xl mx-auto">
           <img src="https://picsum.photos/seed/devices/800/300" alt="Devices" className="w-full h-auto grayscale opacity-80" />
        </div>
      </div>
    </section>
  );
}
