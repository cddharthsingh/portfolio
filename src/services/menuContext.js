// MenuContext.js
import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children, initialMenuContent }) => {
    const [menu, setMenu] = useState(initialMenuContent || []);

    const setIsOpen = (menuItem, value) => {
        setMenu((prevMenu) => {
            const updatedMenu = [...prevMenu];
            const menuItemIndex = updatedMenu.findIndex((menuGroup) => menuGroup.name === menuItem.parent);
            if (menuItemIndex !== -1) {
                const updatedSubMenu = [...updatedMenu[menuItemIndex].subMenu];
                const subMenuItemIndex = updatedSubMenu.findIndex((item) => item.key === menuItem.key);
                if (subMenuItemIndex !== -1) {
                    updatedSubMenu[subMenuItemIndex] = { ...updatedSubMenu[subMenuItemIndex], isOpen: value };
                    updatedMenu[menuItemIndex] = { ...updatedMenu[menuItemIndex], subMenu: updatedSubMenu };
                }
            }
            return updatedMenu;
        });
    };

    const setIsActive = (menuItem, value) => {
        setMenu((prevMenu) => {
            const updatedMenu = prevMenu.map((menuGroup) => {
                const updatedSubMenu = menuGroup.subMenu.map((item) => {
                    if (item.key === menuItem.key) {
                        return { ...item, isActive: value };
                    }
                    return item;
                });
                return { ...menuGroup, subMenu: updatedSubMenu };
            });
            return updatedMenu;
        });
    };

    const updateItem = (menuItem) => {
        setMenu((prevMenu) => {
            const updatedMenu = prevMenu.map((menuGroup) => {
                const updatedSubMenu = menuGroup.subMenu.map((item) => {
                    if (item.key === menuItem.key) {
                        return menuItem;
                    }
                    return item;
                });
                return { ...menuGroup, subMenu: updatedSubMenu };
            });
            return updatedMenu;
        });
    };

    return <MenuContext.Provider value={{ menu, setIsOpen, setIsActive, updateItem }}>{children}</MenuContext.Provider>;
};

export const useMenu = () => useContext(MenuContext);
