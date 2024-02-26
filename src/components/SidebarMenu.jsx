import React from 'react';
import MenuHeader from './MenuHeader';
import { useMenu } from '../services/menuContext';

const SidebarMenu = () => {
    const { menu } = useMenu();
    return (
        <div className="select-none">
            {menu.map((item) => (
                <MenuHeader menuContent={item} key={item.key}></MenuHeader>
            ))}
        </div>
    );
};

export default SidebarMenu;
