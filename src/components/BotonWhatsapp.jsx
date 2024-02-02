import { BsWhatsapp } from "react-icons/bs";

function BotonWhatsapp() {
  return (
    <>
      <a
        className=" fixed right-20 bottom-7 z-50 px-2 py-2 bg-[#25d366] w-16 h-16 rounded-full shadow-lg
       text-white cursor-pointer
        mb-2 opacity-100"
      >
        <BsWhatsapp className="h-8 w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </a>
    </>
  );
}

export default BotonWhatsapp;
