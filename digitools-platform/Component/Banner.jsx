import BannerImage from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-9/12 ">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-5xl font-bold leading-tight tracking-tighter">
            Supercharge Your
            <br />
            <span className="text-5xl">
            Digital Workflow
            </span>
          </h1>

          <p className="text-gray-500 max-w-lg text-lg">
            Access premium AI tools, design assets, templates, and productivity<br />
            software—all in one place. Start creating faster today.<br />
            Explore Products
          </p>

          <div className="flex flex-wrap gap-5 pt-2">
            <button className="bg-[#4F39F6] hover:bg-red-500 transition-all px-8 py-4 rounded-full font-semibold text-lg flex items-center group text-white">
             Explore Products
            </button>

             <button className="px-8 py-4 rounded-full font-semibold text-lg flex items-center border-2">
             Explore Products
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;