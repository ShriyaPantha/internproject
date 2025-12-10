import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, PhotoCarousel } from "@/components/ui/carousel";
import { img1, img2, img3 } from "@/constants/image";

const CarouselPlugin = () => {
  // Initialize autoplay plugin
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,           // 2 seconds autoplay
      stopOnInteraction: false,
    })
  );

  return (
    <PhotoCarousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="w-full max-w-md mx-auto"
      onMouseEnter={plugin.current.stop}   // Pause on hover
      onMouseLeave={plugin.current.reset}  // Resume autoplay
    >
      <CarouselContent>

        {/* Slide 1 */}
        <CarouselItem>
          <div className="relative bg-gradient-to-br from-white to-green-200/60 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-green-200">
            <div className="flex items-center justify-between gap-6 mt-6">
              <div className="flex flex-col gap-3 max-w-sm">
                <p className="font-semibold text-3xl leading-tight text-green-800 pt-15">
                  Priority Help, anytime
                </p>
                <p className="text-md text-green-700 leading-relaxed pb-10">
                  Receive quicker responses and dedicated support for smoother store operations.
                </p>
                <button className="bg-blue-400 hover:bg-blue-500 transition text-white rounded-lg py-2 px-4 w-fit mt-2">
                  Learn More
                </button>
              </div>
              <div className="min-w-[110px] flex justify-center">
                <img src={img1} alt="Store Growth" className="w-28 h-28 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* Slide 2 */}
        <CarouselItem>
          <div className="relative bg-gradient-to-br from-white to-green-200/60 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-green-200">
            <div className="flex items-center justify-between gap-6 mt-6">
              <div className="flex flex-col gap-3 max-w-sm">
                <p className="font-semibold text-3xl leading-tight text-green-800 pt-15">
                  Grow Your Store Confidently
                </p>
                <p className="text-md text-green-700 leading-relaxed pb-10">
                  Access advanced tools and proven strategies to grow your business faster and smarter.
                </p>
                <button className="bg-blue-400 hover:bg-blue-500 transition text-white rounded-lg py-2 px-4 w-fit mt-2">
                  Upgrade Now
                </button>
              </div>
              <div className="min-w-[110px] flex justify-center">
                <img src={img2} alt="Store Growth" className="w-28 h-28 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* Slide 3 */}
        <CarouselItem>
          <div className="relative bg-gradient-to-br from-white to-green-200/60 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-green-200">
            <div className="flex items-center justify-between gap-6 mt-6">
              <div className="flex flex-col gap-3 max-w-sm">
                <p className="font-semibold text-3xl leading-tight text-green-800 pt-15">
                  Smart selling with AI tools
                </p>
                <p className="text-md text-green-800 leading-relaxed pb-10">
                  Automate tasks, reply instantly, and gain helpful insights for growth with less effort.
                </p>
                <button className="bg-blue-400 hover:bg-blue-500 transition text-white rounded-lg py-2 px-4 w-fit mt-2">
                  Explore AI
                </button>
              </div>
              <div className="min-w-[110px] flex justify-center">
                <img src={img3} alt="AI Tools" className="w-28 h-28 object-cover rounded-xl shadow-md" />
              </div>
            </div>
          </div>
        </CarouselItem>

      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </PhotoCarousel>
  );
};

export default CarouselPlugin;
