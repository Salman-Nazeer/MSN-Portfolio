// import HeroText from "./HeroText";
// import HeroPic from "./HeroPic";

// const HeroMain = () => {
//   return (
//     <div className=" pt-40 pb-16">
//       <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
//         <HeroText />
//         <HeroPic />
//       </div>
//     </div>
//   );
// };

// export default HeroMain;


import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 gap-10">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
