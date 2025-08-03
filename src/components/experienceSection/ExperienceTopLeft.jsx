// import ExperienceInfo from "./ExperienceInfo";

// const ExperienceTopLeft = () => {
//   return (
//     <div className="flex flex-col gap-6 w-[300px]">
//       <p className="text-orange font-bold uppercase text-3xl font-special text-center">
//         Since 2023
//       </p>
//       <div className="flex justify-center items-center gap-4">
//         <ExperienceInfo number="3" text="Years" />
//         <p className="font-bold text-6xl text-lightBrown">-</p>
//         <ExperienceInfo number="20" text="Websites" />
//       </div>
//       <p className="text-center">
//         With 1 years of experience building dynamic and user-friendly web
//         applications.
//       </p>
//     </div>
//   );
// };

// export default ExperienceTopLeft;

















import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm text-center">

      <p className="text-orange font-bold uppercase text-2xl font-special">
        Since 2023
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-5xl text-lightBrown hidden sm:block">-</p>
        <ExperienceInfo number="20" text="Websites" />
      </div>
      <p className="text-sm">
        With 1 year of experience building dynamic and user-friendly web
        applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
