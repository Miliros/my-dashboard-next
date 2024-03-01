import { WidgetGrid } from "@/components/dashboard/WidgetGrid";
import { SimpleWidget } from "@/components/dashboard/SimpleWidget";

export const metadata = {
  title: "Admin Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className=" flex flex-col text-black p-2 items-center justify-center">
        <span className="text-4xl mb-9 font-semibold text-gray-600 tracking-wide">Dashboard</span>
        {/* <span className="text-xl">Información general</span> */}
    
     <WidgetGrid/>
    </div>
  );
}
