import "./Banner.css";

const Banner = () => {
    return (
        <section className="w-full h-full xs:h-[76px] lg:h-[46px] py-2 xs:py-0 bg-gradient-primary-secondary">
            <div className="container max-w-[960px] mx-auto w-fit h-full flex justify-center items-center px-3">
                <div className="flex text-center md:text-left items-start lg:gap-1 max-w-[350px] sm:max-w-[500px] md:max-w-fit">
                    <span className="banner-emoji">🚀</span>
                    <p className="banner-text">
                        <span className="text-[#00E7F9] font-extrabold">FRESH BEGINNINGS SALE:</span> 
                        <span className="font-semibold"> Extra 25% OFF, Limited Spots - start your journey today!</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
