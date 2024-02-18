// src/components/Layout.js\
import Sidebar from "./Sidebar";
import BottomBlock from "./BottomBlock";

export default function Layout() {
  return (
    <div className="flex h-screen bg-zinc-900">
      <Sidebar></Sidebar>
      <div className="w-5/6">
        <div className="flex items-center justify-center h-4/5 p-5">
          <p class="lg:text-9xl xs:text-5xl sm:text-5xl poppins-bold text-cyan-500"> Siddharth Singh</p>
        </div>
        <BottomBlock></BottomBlock>
      </div>
    </div>
  );
}
