import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import BottomBlock from './BottomBlock';
import LineColumn from './LineColumn';
import MainArea from './MainArea';

export default function Layout() {
    
    const [sidebarWidth, setSidebarWidth] = useState(Math.floor(window.innerWidth / 7));
    const dragBarWidth = useRef(null);

    const startResizing = (e) => {
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResizing);
    };

    const resize = (e) => {
        setSidebarWidth(e.clientX);
    };

    const stopResizing = () => {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResizing);
    };
    return (
        <div className="flex h-screen bg-zinc-900">
            <Sidebar width={sidebarWidth}></Sidebar>
            <div ref={dragBarWidth} onMouseDown={startResizing} className="cursor-col-resize bg-zinc-950 w-1" />
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
