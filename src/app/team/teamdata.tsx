"use client";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const space = Space_Grotesk({
  weight: ["700", "500", "300"],
  subsets: ["latin"],
  display: "swap",
});

const TeamsData = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<null | number>(
    null
  );

  const handleButtonClick = (index: number) => {
    setSelectedDepartment(index);
  };
  return (
<>
      <h1 className="text-4xl md:text-5xl font-bold my-8 text-center">MEET THE TEAM</h1>  
      <div className="flex flex-wrap justify-center gap-6 mx-auto my-10 max-w-screen-xl">
        {/* Team member 1 */}
        <motion.div
          className="relative border border-white hover:border-[#FFBA25] w-40 md:w-52"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1}}
        >
          <div className="relative w-full h-52 md:h-72">
            <Image
              src="/Images/WhatsApp Image 2024-04-13 at 14.27.05_ed22832f.jpg"
              fill
              alt="profile picture"
              className="w-full h-full object-cover grayscale rounded-lg"
            />
          </div>
          <div className="flex gap-2 items-center justify-between p-3">
            <h2 className="text-[#FFBA25] md:text-lg text-sm sm:text-xl">
              Dhruv Naik
            </h2>
            <Link
              href={"https://github.com/Droovian"}
              className="hover:text-tangerine"
              title="GitHub Profile link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Team member 2 */}
        <motion.div
          className="relative border border-white hover:border-[#FFBA25] w-40 md:w-52"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1}}
        >
          <div className="relative w-full h-52 md:h-72">
            <Image
              src="/Images/web.jpg"
              fill
              alt="profile picture"
              className="w-full h-full object-cover grayscale rounded-lg"
            />
          </div>
          <div className="flex gap-2 items-center justify-between p-3">
            <h2 className="text-[#FFBA25] md:text-lg text-sm sm:text-xl">
              Shivam Gadekar
            </h2>
            <Link
              href={"https://github.com/gadekar123"}
              className="hover:text-tangerine"
              title="GitHub Profile link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Team member 3 */}
        <motion.div
          className="relative border border-white hover:border-[#FFBA25] w-40 md:w-52"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1}}
        >
          <div className="relative w-full h-52 md:h-72">
            <Image
              src="/Images/IMG_4020.JPG"
              fill
              alt="profile picture"
              className="w-full h-full object-cover grayscale rounded-lg"
            />
          </div>
          <div className="flex gap-2 items-center justify-between p-3">
            <h2 className="text-[#FFBA25] md:text-lg text-sm sm:text-xl">
              Joel Alvares
            </h2>
            <Link
              href={"https://github.com/Introvert2000"}
              className="hover:text-tangerine"
              title="GitHub Profile link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Add more team members here */}
      </div>
    </>
  );
};

export default TeamsData;