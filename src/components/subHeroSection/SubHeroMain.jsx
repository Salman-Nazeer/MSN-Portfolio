// const SubHeroMain = () => {
//   return (
//     <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
//       <p className="md:block sm:hidden">Fast Learner</p>
//       <p className="md:block sm:hidden">Team Work</p>
//       <p>Details Master</p>
//     </div>
//   );
// };

// export default SubHeroMain;





const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-lightGrey bg-brown text-lightGrey py-6">
      <div className="flex flex-col sm:flex-row justify-around items-center gap-4 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl uppercase">Fast Learner</p>
        <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl uppercase">Team Work</p>
        <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl uppercase">Details Master</p>
      </div>
    </div>
  );
};

export default SubHeroMain;
