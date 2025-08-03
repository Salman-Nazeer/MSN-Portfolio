// import ContactInfo from "./ContactInfo";
// import ContactSocial from "./ContactSocial";

// const ContactMeRight = () => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-12">
//       <img
//         src="../../public/images/email-image.png"
//         alt="email image"
//         className="max-w-[300px]"
//       />
//       <ContactInfo />
//       <ContactSocial />
//     </div>
//   );
// };

// export default ContactMeRight;








import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full lg:max-w-[500px]">
      <img
        src="../../public/images/email-image.png"
        alt="email image"
        className="w-full max-w-[300px] sm:max-w-[350px] object-contain"
      />

      <ContactInfo />
      <ContactSocial />
      </div>
  );
};

export default ContactMeRight;
