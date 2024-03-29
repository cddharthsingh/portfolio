import React, { useState, useRef } from 'react';
import SidebarMenu from './SidebarMenu';
import Skills from './Skills';
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
        <div className="flex h-screen bg-semi-dark-grey">
            <div className={`w-[${sidebarWidth}px] hidden sm:block flex-shrink-0 bg-dark-grey select-none`}>
                <div className="poppins-bold text-2xl text-zinc-200 p-4">SIDDHARTH SINGH</div>
                <SidebarMenu width={sidebarWidth}></SidebarMenu>
            </div>
            <div
                ref={dragBarWidth}
                onMouseDown={startResizing}
                onTouchStart={startResizing}
                className="cursor-col-resize bg-semi-dark-grey w-px hidden sm:block"
            />
            <div
                style={{ width: `${window.innerWidth - sidebarWidth}px` }}
                className={`flex-1 sm:w-[calc(100% - ${sidebarWidth}px)]`}
            >
                <MainArea></MainArea>
                <Skills></Skills>
            </div>
        </div>
    );
}
