import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MenuHeader = ({ menuContent }) => {
    const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);
    const subMenu = menuContent.subMenu;
    const toggleHeader = () => {
        setIsHeaderCollapsed(!isHeaderCollapsed);
    };
    console.log('SUB:', subMenu);
    return (
        <div className="bg-zinc-950 text-white text-sm Gilroy-Regular">
            <div className="px-5 py-1 cursor-pointer bg-zinc-950 hover:bg-zinc-900" onClick={toggleHeader}>
                {isHeaderCollapsed ? (
                    <span>
                        <KeyboardArrowRightIcon fontSize="small" />
                    </span>
                ) : (
                    <span>
                        <KeyboardArrowUpIcon fontSize="small" />
                    </span>
                )}
                {menuContent.name}
            </div>

            {!isHeaderCollapsed &&
                subMenu.map((item) => {
                    return <MenuItem item={item}></MenuItem>;
                })}
        </div>
    );
};

const MenuItem = ({ item }) => {
    return (
        <div className="px-5 py-1 pl-10 cursor-pointer bg-zinc-950 hover:bg-zinc-900">
            {item.icon} <span className="pl-2">{item.name}</span>
        </div>
    );
};

export default MenuHeader;
