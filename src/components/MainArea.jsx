import { useEffect, useState } from 'react';
import LineColumn from './LineColumn';
import TabBar from './TabBar';
import { faHamburger, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarMenu from './SidebarMenu';
import { useMenu } from '../services/menuContext';
import { fetchDisplayPage } from '../services/displayPage';

export default function MainArea() {
    const [displayAreaHeight, setDisplayAreaHeight] = useState(500);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { currentActive } = useMenu();

    useEffect(() => {
        let displayArea = document.getElementById('displayArea');
        if (displayArea) {
            setDisplayAreaHeight(displayArea.clientHeight);
        }
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const displayPageContent = fetchDisplayPage(currentActive);

    return (
        <div className="flex flex-col h-3/4 overflow-auto relative hide-scrollbar">
            <TabBar></TabBar>
            <div className="pt-10 flex-1 flex flex-col" id="displayArea">
                <div
                    className={`fixed flex z-20 top-[46px] right-4 bg-grey box-shadow-grey w-10 justify-center rounded-full drop-shadow-xl sm:hidden`}
                >
                    <button onClick={toggleSidebar} className="py-2">
                        <FontAwesomeIcon icon={isSidebarOpen ? faClose : faHamburger} size="xl" color="#686868" />
                    </button>
                </div>

                {isSidebarOpen && (
                    <div className="fixed top-0 left-0 z-19 w-full h-full bg-dark-grey">
                        <SidebarMenu onTap={toggleSidebar} />
                    </div>
                )}

                <div className="flex flex-row flex-1">
                    <div className="flex-row hidden sm:block">
                        <LineColumn height={displayAreaHeight} />
                    </div>
                    <div className="p-4">{displayPageContent}</div>
                </div>
            </div>
        </div>
    );
}
