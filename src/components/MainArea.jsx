import { useEffect, useState } from 'react';
import LineColumn from './LineColumn';
import TabBar from './TabBar';
import { faHamburger, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarMenu from './SidebarMenu'; // Import your SidebarMenu component

export default function MainArea() {
    const [displayAreaHeight, setDisplayAreaHeight] = useState(650);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        let displayArea = document.getElementById('displayArea');
        if (displayArea) {
            setDisplayAreaHeight(displayArea.clientHeight);
        }
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col h-3/4 overflow-auto relative hide-scrollbar">
            <TabBar></TabBar>
            <div className="pt-10 flex-1 flex flex-col" id="displayArea">
                <div
                    className={`absolute flex z-20 top-[46px] right-4 bg-zinc-500 w-10 justify-center rounded-full drop-shadow-xl sm:hidden`}
                >
                    <button onClick={toggleSidebar} className="py-2">
                        <FontAwesomeIcon icon={isSidebarOpen ? faClose : faHamburger} size="xl" />
                    </button>
                </div>

                {isSidebarOpen && <SidebarMenu />}

                <div className="flex flex-row hidden sm:block">
                    <LineColumn height={displayAreaHeight} />
                    <div></div>
                </div>
            </div>
        </div>
    );
}
