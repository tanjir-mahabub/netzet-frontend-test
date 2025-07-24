const HeroCTA = () => (
    <div className="flex flex-col-reverse md:flex-col gap-[54px] md:gap-[36px] pb-5 md:pb-0">
        {/* CTA Button + Subtext */}
        <div className="flex flex-col gap-3 w-full max-w-full md:max-w-[313px]">
            <button className="cta-button">
                GET STARTED →
            </button>
            <p className="cta-subtext">
                1-minute quiz for personalized Insights
            </p>
        </div>

        {/* Terms + Copyright */}
        <div className="flex flex-col gap-[27px]">
            <p className="cta-terms">
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
            </p>
            <p className="cta-copy">
                Fametonic 2025 © All Rights Reserved.
            </p>
        </div>
    </div>
);

export default HeroCTA;
