import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin, FaPinterest, FaWhatsapp, FaYoutube } from 'react-icons/fa'

function Imagesection() {
  return (
    <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
          <div className="relative w-[300px]  h-[300px]">
            <img
              src="/me.jpeg"
              alt="assal simo photo"
              className="w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg"
            />

            <div className="absolute inset-[-15px] flex items-center justify-center">
              <div className="animate-spin-slow absolute w-full flex h-full items-center justify-center">
                <Link
                  href={"https://github.com/yourprofile"}
                  target="_blank"
                  className="text-green-400 p-1 border rounded-full border-green-400 text-2xl absolute top-[-40px] left-1/2 transform -translate-x-1/2"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/yourprofile"}
                  target="_blank"
                  className="text-green-400 p-1 border rounded-full border-green-400 text-2xl absolute bottom-[-40px] left-1/2 transform -translate-x-1/2"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={"https://wa.me/yourwhatsappnumber"}
                  target="_blank"
                  className="text-green-400 p-1 border rounded-full border-green-400 text-2xl absolute top-1/2 right-[-40px] transform -translate-y-1/2"
                >
                  <FaWhatsapp />
                </Link>
                <Link
                  href={"mailto:yourmail@example.com"}
                  target="_blank"
                  className="text-green-400 p-1 border rounded-full border-green-400 text-2xl absolute top-1/2 left-[-40px] transform -translate-y-1/2"
                >
                  <FaEnvelope />
                </Link>
                <Link
                  href={"https://www.pinterest.com/yourprofile"}
                  target="_blank"
                  className="text-green-400 p-1 border rounded-full border-green-400 text-2xl absolute top-[20px] left-[20px]"
                >
                  <FaPinterest />
                </Link>
                <Link
                  href={"https://www.youtube.com/c/yourchannel"}
                  target="_blank"
                  className="text-green-400 p-1 border rounded-full border-green-400 text-2xl absolute bottom-[20px] right-[20px]"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
          <h2 className=" mt-[50px] text-2xl font-semibold text-white">
            Mohammed Assal
          </h2>
          <p className="text-green-400 text-xl font-semibold">Web Developer</p>
        </div>
  )
}

export default Imagesection