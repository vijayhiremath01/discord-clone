import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const state = false; 

export default function Home() {
  return (
    <>
   <h1 className="text-3xl font-bold text-center text-indigo-500 bg-white p-4 font-geist-sans">
    Hello World This is discord clone
   </h1>
    <Button className={cn("bg-indigo-500 text-white" ,
      state && "bg-red-500 text-white"
    )}> Discord ! </Button>
    </>
  );
}
