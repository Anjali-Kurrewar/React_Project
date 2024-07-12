import React,{useRef} from 'react'
import Thecard from './Thecard'

function Thefg() {
    const ref = useRef(null);
    const data = [ {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: {isOpen:true, tagTitle: "Download Now", tagColor:"green", fontColor:"white"}
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: {isOpen:true, tagTitle: "Update", tagColor:"rose", fontColor:"black"}
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: {isOpen:false, tagTitle: "Download Now", tagColor:"green", fontColor:"white"}
    }
];
  return (
    <>
      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 p-5 flex-wrap'>
        {data.map((item, index)=>(
            <Thecard data={item} reference={ref}/>
        ))}
      </div>
    </>
  )
}

export default Thefg 