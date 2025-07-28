import HeroHeading from "./HeroHeading";
import HeroFeatures from "./HeroFeatures";
import HeroCTA from "./HeroCTA";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="relative flex flex-col-reverse md:flex-row justify-between items-center gap-6 px-2 sm:px-6 md:py-[70px] xl:py-[44px]">
            {/* Content */}
            <div className="flex-1 space-y-6 z-10 max-w-[516px] tracking-normal">
                <HeroHeading />
                <HeroFeatures />
                <HeroCTA />
            </div>

            {/* Phone Background Image */}
            <div className="pointer-events-none relative flex xl:block h-full mt-8 w-full flex-1 md:absolute md:-top-12 md:right-[34px] md:mt-0 md:h-full md:w-1/2">
                <div className="relative w-full xl:w-[666px] min-h-[426px] md:min-h-[673px] mx-auto">
                    <Image
                        src="/phone.png"
                        alt="App Preview"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
