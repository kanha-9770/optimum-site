import Image from "next/image";

const ImageSlider: React.FC = () => {
  return (
    <div className="relative w-full mx-auto h-full">
      <Image
        src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728902747/webphome_1_optimized_10_mvqf3i.avif"
        alt="Hero Image"
        height={800}
        width={1200}
        sizes="(max-width: 450px) 100vw, (max-width: 1024px) 50vw, 1200px"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default ImageSlider;
