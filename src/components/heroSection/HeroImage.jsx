import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative w-full flex items-end justify-center">
      {/* Profile Image */}
      <img
        src="/images/profile.jpg"
        alt="Muhammad Salman Nazeer"
        className="w-[80%] max-w-[380px] md:max-w-[500px] lg:max-w-[570px] object-contain z-10"
      />

      {/* Spinning Hexagon Layers */}
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none -z-10">
        <PiHexagonThin className="h-[600px] w-auto text-orange opacity-70 rotate-90 animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none -z-10">
        <PiHexagonThin className="h-[600px] w-auto text-orange opacity-70 blur-lg rotate-90 animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none -z-10">
        <PiHexagonThin className="h-[600px] w-auto text-cyan opacity-70 animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none -z-10">
        <PiHexagonThin className="h-[600px] w-auto text-cyan opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroImage;
