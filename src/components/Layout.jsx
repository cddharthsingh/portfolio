import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import BottomBlock from './BottomBlock';
import LineColumn from './LineColumn';
import MainArea from './MainArea';

export default function Layout() {
    const [sidebarWidth, setSidebarWidth] = useState(Math.floor(window.innerWidth / 7));
    const dragBarWidth = useRef(null);

    const startResizing = (e) => {
        const resize = (moveEvent) => {
            const clientXMove = moveEvent.clientX || (moveEvent.touches && moveEvent.touches[0].clientX);
            let width =
                clientXMove > Math.floor(window.innerWidth / 10) ? clientXMove : Math.floor(window.innerWidth / 10);
            setSidebarWidth(width);
        };

        const stopResizing = () => {
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResizing);
            document.removeEventListener('touchmove', resize);
            document.removeEventListener('touchend', stopResizing);
        };

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResizing);
        document.addEventListener('touchmove', resize, { passive: false });
        document.addEventListener('touchend', stopResizing);
    };

    return (
        <div className="flex h-screen bg-zinc-900">
            <Sidebar width={sidebarWidth}></Sidebar>
            <div
                ref={dragBarWidth}
                onMouseDown={startResizing}
                onTouchStart={startResizing}
                className="cursor-col-resize bg-zinc-950 w-1"
            />
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
