const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-orange text-3xl">
        <Image aria-hidden="true" />
      </div>
      <p className="text-lightGrey break-all">{text}</p>
    </div>
  );
};

export default SingleInfo;
