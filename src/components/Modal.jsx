import { IoIosCloseCircle } from "react-icons/io";

function Modal({ showModal, setShowModal }) {
  return (
    <div
      className={`fixed z-[1997] top-0 left-0 right-0  bottom-0 bg-black/80 flex justify-center items-center transition-opacity duration-1000 ${
        showModal ? "opacity-1 " : "opacity-0 pointer-events-none"
      }  `}
    >
      <div className="rounded-md bg-white p-4 flex flex-col md:flex-row   max-w-[700px]">
        <div className="flex-1">
          <img
            src="/images/portfolio.jpg"
            alt=""
            className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] object-cover md:rounded-full rounded-xl "
          />
        </div>
        <div className="flex-1">
          <p className="hidden md:block text-black capitalize text-xl md:text-2xl  text-center underline">
            Welcome to my portfolio
          </p>
          <p className="mt-2 md:mt-5 text-black ">
            Projects here are hosted on free server instances, hence server
            requests on inital website launch might either be slow or fail
          </p>
          <p className="text-black ">
            A subsequent page refresh or following the error prompt will likely
            do the trick
          </p>
        </div>
      </div>
      <button
        onClick={() => setShowModal(false)}
        className="absolute z-[1999] top-4 right-4 md:top-8 md:right-8"
      >
        <IoIosCloseCircle color="white" size={40} />
      </button>
    </div>
  );
}

export default Modal;
