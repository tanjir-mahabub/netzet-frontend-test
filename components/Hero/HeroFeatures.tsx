import FeatureItem from "./FeatureItem";

const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
];

const HeroFeatures = () => (
    <ul className="space-y-3 font-figtree font-normal lg:font-semibold text-[16px] leading-[22px]">
        {features.map((text, index) => (
            <FeatureItem key={index} text={text} />
        ))}
    </ul>
);

export default HeroFeatures;
