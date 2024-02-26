import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useMenu } from '../services/menuContext';

export default function TabBar() {
    const { menu, setIsOpen, setIsActive } = useMenu();

    const closeTab = (closedItem) => {
        setIsOpen(closedItem, false);
        setIsActive(closedItem, false);
    };

    let tabContent = menu.map((sub) => {
        return sub.subMenu.map((item) => {
            return <TabTile key={item.name} item={item} closeTab={closeTab} />;
        });
    });

    return (
        <div className="flex flex-row h-8 w-full bg-zinc-950 fixed top-0 text-green-400 Gilroy-Light text-sm z-10 pl-14 py-1 align-middle">
            {tabContent}
        </div>
    );
}

const TabTile = ({ item, closeTab }) => {
    return (
        <>
            {item.isOpen === true && (
                <span className="border-r border-r-zinc-800 inline-flex items-center px-5">
                    {item.name}
                    <CloseOutlinedIcon onClick={() => closeTab(item)} />
                </span>
            )}
        </>
    );
};
