  // const SubSkills = () => {
  //   return (
  //     <div className="border-y-2 border-lightGrey relative ">
  //       <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
  //       <img
  //         src="../../public/images/subSkills.jpg"
  //         alt="subSkills image"
  //         className=""
  //       />
  //     </div>
  //   );
  // };

  // export default SubSkills;





  const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-orange to-cyan opacity-50 z-10" />
      <img
        src="/images/subSkills.jpg"
        alt="subSkills image"
        className="w-full h-auto object-cover z-0"
      />
    </div>
  );
};

export default SubSkills;
