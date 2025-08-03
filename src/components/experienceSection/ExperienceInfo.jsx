const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-5xl text-cyan">{number}</p>
      <p className="font-bold text-base text-lightGrey uppercase -mt-2">
        {text}
      </p>
    </div>
  );
};

export default ExperienceInfo;
