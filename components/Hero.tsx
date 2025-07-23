import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:py-12 overflow-x-hidden">
            <div className="flex-1 space-y-6">
                <h1 className="font-urbanist text-[25px] lg:text-[35px] font-extrabold md:font-bold text-center md:text-left leading-[100%]">
                    Want to Turn Social Media Into a Profitable Career? 
                </h1>
                <h2 className="font-urbanist text-[25px] lg:text-[35px] font-extrabold md:font-bold text-center md:text-left leading-[100%] text-secondary [text-shadow:0_0_1px_#FC004E,0_4_4px_#FC004E] md:[text-shadow:0_0_1px_#FC004E,0_2_4px_#FC004E]">
                    Discover your way to success with Fametonic:
                </h2>
                <ul className="space-y-3 font-figtree font-medium lg:font-semibold text-[16px] leading-[22px]">
                    <li className="flex items-start gap-2.5 md:gap-1">
                        <Image src="/stars.png" alt="Stars Icon" width={22} height={22} className="flex-shrink-0" />
                        <p className="leading-[22px]">Start growing your influence right away—no waiting required!</p>
                    </li>
                    <li className="flex items-start gap-2.5 md:gap-1">
                        <Image src="/stars.png" alt="Stars Icon" width={22} height={22} className="flex-shrink-0" />
                        <p className="leading-[22px]">Create viral TikToks and Reels step by step with easy-to-follow lessons</p>
                    </li>
                    <li className="flex items-start gap-2.5 md:gap-1">
                        <Image src="/stars.png" alt="Stars Icon" width={22} height={22} className="flex-shrink-0" />
                        <p className="leading-[22px]">Use a Personal AI Worker to boost your content</p>
                    </li>
                    <li className="flex items-start gap-2.5 md:gap-1">
                        <Image src="/stars.png" alt="Stars Icon" width={22} height={22} className="flex-shrink-0" />
                        <p className="leading-[22px]">Learn from expert-led courses designed for aspiring influencers</p>
                    </li>
                </ul>


                <div className="flex flex-col-reverse md:flex-col gap-[28px] md:gap-[65px]">
                    <div className="flex flex-col gap-2 max-w-[313px]">
                        <button className="bg-primary hover:bg-primary-700 w-full h-[40px] text-xl leading-[100%] rounded-[10px] font-bold drop-shadow-[2px_2px_10px_var(--color-secondary)] cursor-pointer transition-all duration-300">
                            GET STARTED →
                        </button>
                        <p className="font-figtree font-normal text-[12px] leading-[16px] text-center align-middle">1-minute quiz for personalized Insights</p>
                    </div>

                    <div className="flex flex-col gap-[27px]">
                        <p className="font-figtree font-medium text-[12px] leading-[100%] align-middle text-tertiary text-center md:text-left">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                        <p className="font-nunito md:font-figtree font-medium text-[10px] leading-[100%] align-middle text-tertiary text-center md:text-left">Fametonic 2025 ©All Rights Reserved.</p>
                    </div>
                </div>
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
}

export default Hero