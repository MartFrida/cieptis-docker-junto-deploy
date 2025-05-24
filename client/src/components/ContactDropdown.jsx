/* eslint-disable react/prop-types */

import ContactModal from "./ContactModal";

const ContactDropdown = ({ isOpen, onClose, sectionId }) => {

  return (
    <div className="fixed inset-0 flex items-top md:items-center justify-center backdrop-blur-sm z-53 ">
      <ContactModal isOpen={isOpen} onClose={onClose} sectionId={sectionId} />
    </div>
  );
};

export default ContactDropdown;
