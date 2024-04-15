import { AppGallery } from "@/components/site/appGallery/AppGallery";
import AppHeader from "./components/AppHeader";

export default function Home() {
  return (
    <div className="h-[2000px] px-28 p-10">
      <AppHeader />
      <div className="flex justify-between gap-1 mt-20">
        <div className="w-[67%]">
          <AppGallery />
        </div>
        <div className="w=[30%]">
          This Section
        </div>
      </div>
    </div>

  );
}
