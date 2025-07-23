import Image from "next/image";

interface FeatureItemProps {
    text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => (
    <li className="flex items-start gap-2.5 md:gap-1">
        <Image
            src="/stars.png"
            alt="Stars Icon"
            width={22}
            height={22}
            className="flex-shrink-0"
            aria-hidden="true"
        />
        <p className="leading-[22px]">{text}</p>
    </li>
);

export default FeatureItem;
