import { useEffect, useState } from 'react';
import LineColumn from './LineColumn';
import TabBar from './TabBar';

export default function MainArea() {
    const [displayAreaHeight, setDisplayAreaHeight] = useState(650);
    useEffect(() => {
        let displayArea = document.getElementById('displayArea');
        if (displayArea) {
            setDisplayAreaHeight(displayArea.clientHeight);
        }
    }, []);
    return (
        <div className="flex flex-col h-4/5 overflow-auto relative hide-scrollbar">
            <TabBar></TabBar>
            <div className="pt-10 flex-1 flex flex-col" id="displayArea">
                <div className="flex flex-row">
                    <LineColumn height={displayAreaHeight} />
                </div>
            </div>
        </div>
    );
}
