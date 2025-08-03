// import { HiOutlineMail } from "react-icons/hi";
// import { FiPhone } from "react-icons/fi";
// import { IoLocationOutline } from "react-icons/io5";
// import SingleInfo from "./SingleInfo";

// const ContactInfo = () => {
//   return (
//     <div className="flex flex-col gap-4">
//       <SingleInfo text="salmannazeer.19500@gmail.com" Image={HiOutlineMail} />
//       <SingleInfo text="+92 312 23032122" Image={FiPhone} />
//       <SingleInfo text="Karachi, Pakistan" Image={IoLocationOutline} />
//     </div>
//   );
// };

// export default ContactInfo;








import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[400px]">
      <SingleInfo text="salmannazeer.19500@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+92 312 23032122" Image={FiPhone} />
      <SingleInfo text="Karachi, Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
