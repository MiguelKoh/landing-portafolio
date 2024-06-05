import { BsWhatsapp } from "react-icons/bs";

function BotonWhatsapp() {
  return (
      <a href="https://wa.me/529994090432" 
      
      className="fixed xs:right-9 md:right-14 bottom-7 z-50 p-2 bg-[#25d366] xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full 
      shadow-lg text-white cursor-pointer mb-2 opacity-100 flex justify-center items-center">
      
      <BsWhatsapp className="xs:h-7 xs:w-7 md:h-8 md:w-8" />
      
      </a>
  );
}

export default BotonWhatsapp;
