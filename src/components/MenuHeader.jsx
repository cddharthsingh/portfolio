import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMenu } from '../services/menuContext';

const MenuHeader = ({ menuContent }) => {
    const { setIsOpen, setIsActive } = useMenu();
    const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);

    const toggleHeader = () => {
        setIsHeaderCollapsed(!isHeaderCollapsed);
    };

    const handleItemClick = (item) => {
        setIsOpen(item, true);
        setIsActive(item, true);
    };

    return (
        <div className="bg-zinc-950 text-zinc-500 text-sm Gilroy-Regular">
            <div className="px-5 py-1 cursor-pointer bg-zinc-950 hover:bg-zinc-900" onClick={toggleHeader}>
                {isHeaderCollapsed ? (
                    <KeyboardArrowRightIcon fontSize="small" />
                ) : (
                    <KeyboardArrowUpIcon fontSize="small" />
                )}
                {menuContent.name}
            </div>

            {!isHeaderCollapsed &&
                menuContent.subMenu.map((item) => (
                    <MenuItem key={item.key} item={item} handleItemClick={handleItemClick} />
                ))}
        </div>
    );
};

// Add an onClick handler to MenuItem
const MenuItem = ({ item, handleItemClick }) => {
    let background = item.isActive ? 'bg-[#1111ff60]' : 'bg-zinc-950';
    let classes = 'px-5 py-1 pl-10 cursor-pointer hover:bg-zinc-900 '.concat(background);

    return (
        <div className={classes} onClick={() => handleItemClick(item)}>
            {item.icon} <span className="pl-2">{item.name}</span>
        </div>
    );
};



export default MenuHeader;
