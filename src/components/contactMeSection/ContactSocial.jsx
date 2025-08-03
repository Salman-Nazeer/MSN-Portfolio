import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://github.com/Salman-Nazeer"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/m-salman-nazeer-42a49326b"
        Icon={FaLinkedinIn}
      />
    </div>
  );
};

export default ContactSocial;
