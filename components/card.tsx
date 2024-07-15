import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="h-96 w-64">
      <div className="relative h-72 overflow-hidden rounded-2xl shadow-inner">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute right-0 top-0 z-10 rounded-bl-md bg-header-text px-5 py-3 text-sm shadow-lg">
          Lorem Ipsum
        </div>
      </div>
      <div className="py-4 pl-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
