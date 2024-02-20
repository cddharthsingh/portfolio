// src/components/Layout.js\
import Sidebar from "./Sidebar";
import BottomBlock from "./BottomBlock";
import LineColumn from './LineColumn';
import MainArea from './MainArea';

export default function Layout() {
    return (
        <div className="flex h-screen bg-zinc-900">
            <Sidebar></Sidebar>
            <div className="flex flex-col w-5/6 relative">
                <div className="flex overflow-auto h-4/5 hide-scrollbar">
                    <LineColumn></LineColumn>
                    <MainArea></MainArea>
                </div>
                <BottomBlock></BottomBlock>
            </div>
        </div>
    );
}
