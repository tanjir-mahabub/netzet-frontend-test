const HeroCTA = () => (
    <div className="flex flex-col-reverse md:flex-col gap-[28px] md:gap-[36px]">
        <div className="flex flex-col gap-2 max-w-full md:max-w-[313px]">
            <button className="bg-primary hover:bg-primary-700 w-full h-[40px] text-xl leading-[100%] rounded-[10px] font-bold drop-shadow-[2px_2px_10px_var(--color-secondary)] cursor-pointer transition-all duration-300">
                GET STARTED →
            </button>
            <p className="font-figtree font-normal text-[12px] leading-[16px] text-center align-middle">
                1-minute quiz for personalized Insights
            </p>
        </div>

        <div className="flex flex-col gap-[27px]">
            <p className="font-figtree font-medium text-[12px] leading-[100%] align-middle text-tertiary text-center md:text-left">
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
            </p>
            <p className="font-nunito md:font-figtree font-medium text-[10px] leading-[100%] align-middle text-tertiary text-center md:text-left">
                Fametonic 2025 © All Rights Reserved.
            </p>
        </div>
    </div>
);

export default HeroCTA;
