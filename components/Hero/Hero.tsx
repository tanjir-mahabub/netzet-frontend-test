import HeroHeading from "./HeroHeading";
import HeroFeatures from "./HeroFreatures";
import HeroCTA from "./HeroCTA";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-6 overflow-x-hidden">
            <div className="flex-1 space-y-6">
                <HeroHeading />
                <HeroFeatures />
                <HeroCTA />
            </div>

            <div className="flex-1 mt-8 md:mt-0">
                <div className="relative w-[250px] md:w-[666px] min-h-[250px] md:min-h-[666px] mx-auto">
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
