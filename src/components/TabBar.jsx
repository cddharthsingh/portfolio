import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useMenu } from '../services/menuContext';

export default function TabBar() {
    const { menu, setIsOpen, setIsActive } = useMenu();

    const closeTab = (closedItem) => {
        setIsOpen(closedItem, false);
        setIsActive(closedItem, false);
    };

    const switchTab = (tab) => {
        setIsActive(tab, true);
    };

    const renderTabs = (items) => {
        let tabs = [];
        items.forEach((item) => {
            if (item.isOpen && !item.children) {
                tabs.push(
                    <TabTile
                        key={item.key}
                        item={item}
                        switchTab={() => switchTab(item.key)}
                        closeTab={() => closeTab(item.key)}
                    />,
                );
            }
            if (item.children && item.children.length > 0) {
                tabs = tabs.concat(renderTabs(item.children));
            }
        });
        return tabs;
    };

    return (
        <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide w-full bg-zinc-950 fixed top-0 text-zinc-400 poppins-light text-sm z-10 pl-0 align-middle select-none">
            {renderTabs(menu)}
        </div>
    );
}

const TabTile = ({ item, closeTab, switchTab }) => {
    const handleTabClick = () => {
        switchTab(item);
    };

    const handleCloseClick = (e) => {
        e.stopPropagation();
        closeTab(item.key);
    };
    return (
        <>
            {item.isOpen === true && (
                <span
                    className={`inline-flex items-center min-w-max border-r border-r-zinc-800 px-4 py-[5px] text-sm cursor-pointer whitespace-nowrap overflow-hidden ${
                        item.isActive ? 'border-t-2 border-t-blue-400 bg-zinc-900' : 'bg-zinc-950'
                    }`}
                    onClick={handleTabClick}
                >
                    {item.icon}
                    <span className="pl-2 truncate">{item.name}</span>
                    <CloseOutlinedIcon
                        className={`ml-4 rounded-full cursor-pointer ${
                            item.isActive ? 'bg-zinc-950 text-zinc-400' : 'bg-zinc-800 text-zinc-400'
                        } hover:bg-red-500`}
                        onClick={handleCloseClick}
                        style={{ height: '1rem', width: '1rem' }}
                    />
                </span>
            )}
        </>
    );
};
