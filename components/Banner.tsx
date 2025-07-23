const Banner = () => {
    return (
        <section className="w-full h-[76px] lg:h-[46px] bg-gradient-primary-secondary">
            <div className="container mx-auto w-fit h-full flex justify-center items-center px-3">
                <div className="flex text-center md:text-left items-start lg:gap-1">
                    <span className="text-center md:text-right font-figtree font-extrabold text-[16px] lg:text-[22px] leading-[100%] flex-shrink-0">🚀</span>
                    <p className="w-fit text-center md:text-left text-white font-figtree font-extrabold text-[16px] lg:text-[22px] leading-[100%]">
                        <span className="text-secondary">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots — start your journey today!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
