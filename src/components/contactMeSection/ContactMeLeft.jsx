import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-[600px]">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
