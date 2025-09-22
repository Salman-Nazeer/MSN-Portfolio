const AboutMeImage = () => {
  return (
    <div className="hidden md:block relative h-[400px] w-[260px] sm:h-[450px] sm:w-[280px] md:h-[500px] md:w-[300px]">
      <div className="h-full w-full rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[-30px] left-[-30px] h-full w-[85%] bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
