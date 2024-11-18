'use client'

import { UserButton } from "@clerk/nextjs";
import TypeWriterTittle from "./TypeWriterTitle";
import DarkTheme from "./DarkTheme";
import { useTheme } from "next-themes";

export default function Navbar() {
    const {theme} = useTheme();
  return (
    <div
      className={`border rounded-sm border-b-4 p-2 flex justify-between items-center 
        ${theme === 'light' ? 'border-gray-500' : 'border-white'} bg-transparent`}
        suppressHydrationWarning
    >
<UserButton/>
   
       <TypeWriterTittle />
       <DarkTheme/>
   
    </div>
  );
}