import { useEffect, useState } from 'react';
import LineColumn from './LineColumn';
import TabBar from './TabBar';
import { faHamburger, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarMenu from './SidebarMenu';

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
                    className={`fixed flex z-20 top-[46px] right-4 bg-grey w-10 justify-center rounded-full drop-shadow-xl sm:hidden`}
                >
                    <button onClick={toggleSidebar} className="py-2">
                        <FontAwesomeIcon icon={isSidebarOpen ? faClose : faHamburger} size="xl" />
                    </button>
                </div>

                {isSidebarOpen && <SidebarMenu />}

                <div className="flex flex-row flex-1">
                    <div className="flex-row hidden sm:block">
                        <LineColumn height={displayAreaHeight} />
                    </div>
                    <div className="p-4 rounded-lg shadow-md flex-auto">
                        {' '}
                        {/* Adjusted for flexibility */}
                        <pre className="text-green-400 font-mono">
                            <code>
                                {`<div>
    <p>
        Diving into the digital world with a mix of creativity, caffeine, and code,
        I'm `}
                                {<span className="text-blue-500">Siddharth Singh</span>}
                                {`, a Full Stack Developer with a knack for crafting
        minimal yet impactful solutions. From spinning up dynamic web applications
        to decoding the complexities of user interfaces, I've journeyed through the realms 
        of React, Node, Angular, and beyond.
    </p>
    <p>
        When I'm not tethered to my keyboard, you might find me exploring the endless 
        possibilities of graphic design and UI/UX.
    </p>
</div>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
