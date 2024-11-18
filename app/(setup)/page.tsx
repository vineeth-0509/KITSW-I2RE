
import DarkTheme from "@/components/DarkTheme";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='flex flex-col'>
     <UserButton/>
      <DarkTheme/>
    </div>
  );
}
