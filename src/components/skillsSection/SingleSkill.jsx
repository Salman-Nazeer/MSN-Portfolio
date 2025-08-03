// const SingleSkill = ({ imgSvg, text }) => {
//   return (
//     <div className="hover:-translate-y-10 transition-all duration-500">
//       <div className="flex flex-col items-center gap-2 relative">
//         <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
//           {imgSvg}
//         </div>
//         <p className="text-white font-bold">{text}</p>
//       </div>
//       <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
//     </div>
//   );
// };

// export default SingleSkill;



const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-6 md:hover:-translate-y-10 transition-all duration-500 relative w-full max-w-[120px] sm:max-w-[140px] mx-auto">
      <div className="flex flex-col items-center gap-2 relative z-10">
        <div className="bg-white text-cyan h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-4xl sm:text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold text-sm sm:text-base text-center">{text}</p>
      </div>

      {/* Background block */}
      <div className="w-[80px] sm:w-[100px] h-[160px] sm:h-[200px] bg-orange absolute top-[40px] sm:top-[50px] -z-10 mx-auto left-1/2 -translate-x-1/2 rounded-md shadow-md" />
    </div>
  );
};

export default SingleSkill;
