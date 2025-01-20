// import Link from "next/link";
import { Link } from "next-view-transitions";

const page = () => {
  return (
    // <div className="min-h-screen bg-[#35363a] flex flex-col items-center justify-center p-4">
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Container for image and buttons */}
      <div className="relative max-w-2xl w-full">
        {/* Image */}
        <img
          // src="https://images.squarespace-cdn.com/content/v1/537b5dd7e4b0f5318f93e88f/1513714437142-DSAXRULBYX3KBPKQGZBH/morpheusredblue.jpg"

          src="https://i.imgflip.com/21zhvq.jpg"
          alt="Morpheus offering pills"
          className="w-full h-auto"
        />

        {/* Buttons container positioned absolutely over the hands */}
        <div className="absolute bottom-[22%] lg:mb-12 mb-[28px] left-0 right-0 flex justify-between lg:px-[20%] px-[15%]">
          {/* Blue pill - Login */}
          <Link href="/gallery">
            <button className="bg-blue-600 border border-gray-300 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base">
              Gallery
            </button>
          </Link>

          {/* Red pill - Gallery */}
          <Link href="/login">
            <button className="bg-red-600 text-white border border-gray-300 px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 text-sm md:text-base">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
