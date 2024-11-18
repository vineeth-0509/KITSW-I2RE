"use client"
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriterTittle(){
    return (
        <div className='text-xl font-bold  ' >
       <Typewriter
        options={{
            loop: true,
        }}
        onInit={(typewriter)=> {
            typewriter.typeString('<span class="text-red-500 text-xl ">KITSWI2RE</span>')
            .pauseFor(1000)
            .deleteAll()
            .typeString("AN EVERY ORGANIZATION & EVENT OF KITSW")
            .start()
        }}
       
       />
       </div>
    )
}