import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12">
            <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Want to Turn Social Media Into a Profitable Career?
                </h1>
                <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold">
                    Discover your way to success with Fametonic:
                </h2>
                <ul className="space-y-2">
                    <li>✨ Start growing your influence right away—no waiting required!</li>
                    <li>✨ Create viral TikToks and Reels step by step...</li>
                    <li>✨ Use a Personal AI Worker...</li>
                    <li>✨ Learn from expert-led courses...</li>
                </ul>
                <button className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full font-bold">
                    GET STARTED →
                </button>
                <p className="text-sm">1-minute quiz for personalized Insights</p>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
                {/* Add your phone image here */}
                {/* <img src="/phone.png" alt="App Preview" className="mx-auto" /> */}
                <Image src="/phone.png" alt="App Preview" width={500} height={500} priority />
            </div>
        </section>
    );
}

export default Hero