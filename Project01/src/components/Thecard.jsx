import React from 'react'
import { PiFilesDuotone } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";

function Thecard({data, reference}) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <PiFilesDuotone />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-5">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#000" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full  py-4 ${
              data.tag.tagColor === "rose" ? "bg-rose-100" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className={`text-sm ${data.tag.fontColor === "black" ? "text-black" : "text-white"} font-semibold`}>
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Thecard
