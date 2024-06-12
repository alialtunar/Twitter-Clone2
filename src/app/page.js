import Feed from "@/components/Feed";
import Input from "@/components/Input";


export default function Home() {
  return (
 <div className="max-w-3xl w-full mx-auto border-l border-r min-h-screen">
  <div className="py-2 sticky top-0 z-50 bg-white border-b border-gray-200">
    <h2 className="text-lg sm:text-xl font-bold mx-2">Home</h2>
  </div>
  <Input/>
  <Feed/>
 </div>
  );
}
