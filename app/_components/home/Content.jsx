import Imagesection from "./Imagesection";

function Content() {
  return (
    <div className="w-full  max-w-[90%] max-w-6xl mx-auto min-h-[calc(100vh-120px)] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 lg:gap-16 px-6 md:px-10 py-10 md:py-0 pb-28 md:pb-0">
      {/* Text Section */}
      <div className="w-full md:flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Hello, I&apos;m <span className="text-green-400">Assal</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mt-4 leading-relaxed max-w-xl mx-auto md:mx-0">
          23-year-old Full-Stack Developer from Morocco, specializing in the{" "}
          <span className="font-semibold text-gray-200">MERN stack</span>,{" "}
          <span className="font-semibold text-gray-200">WordPress</span>, and{" "}
          <span className="font-semibold text-gray-200">SEO optimization</span>.
          I build fast, scalable web apps.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-auto shrink-0 flex justify-center md:justify-end">
        <Imagesection />
      </div>
    </div>
  );
}

export default Content;