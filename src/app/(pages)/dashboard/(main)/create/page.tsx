"use client";
import Image from "next/image";

function handleBack() {
  const response = confirm("Discard everything and go back?");
  if (response) {
    history.back();
  }
}

const page = () => {
  return (
    <div>
      <nav className=" h-24 w-full p-6 ">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 h-20 w-20 hover:bg-[#f2f2f2] transition-all duration-200 rounded-full flex justify-center items-center"
        >
          <Image src="/images/backbutton.png" alt="" width={60} height={60} />
        </button>
      </nav>

      <form
        method="POST"
        action="/api/createquiz"
        className="border border-current flex flex-col gap-4 items-center  h-[80vh] min-h-fit w-[90%] mx-auto"
      >
        <div className="pt-6">
          <h4 className="text-2xl font-bold text-black text-center">
            General Quiz Information
          </h4>
        </div>

        <div>
          <button
            type="button"
            className="bg-[#6F459B] hover:bg-[#5c1982] transition-all duration-300 text-white font-bold py-2 px-4 rounded "
          >
            {" "}
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
