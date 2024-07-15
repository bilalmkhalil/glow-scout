import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const TreatmentCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="w-full">
      <div className="relative h-64 overflow-hidden rounded-2xl">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <div className="text-gen-color absolute right-4 top-4 rounded-md bg-[#F6E9CE] px-3 py-1 text-sm">
          Lorem ipsum
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-1 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;
