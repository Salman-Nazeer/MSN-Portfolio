// const SingleContactSocial = ({ Icon, link }) => {
//   return (
//     <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
//       <a href={link} className="cursor-pointer">
//         <Icon />
//       </a>
//     </div>
//   );
// };

// export default SingleContactSocial;




const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 border border-orange text-orange rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors duration-300"
      aria-label="Social Link"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
