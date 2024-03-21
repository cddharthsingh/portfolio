import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

const resetIsActive = (items) => {
    items.forEach((item) => {
        item.isActive = false;
        if (item.children) {
            resetIsActive(item.children);
        }
    });
};

const findAndPerformAction = (items, key, action) => {
    for (let item of items) {
        if (item.key === key) {
            action(item);
            return true;
        } else if (item.children) {
            if (findAndPerformAction(item.children, key, action)) return true;
        }
    }
    return false;
};

export const MenuProvider = ({ children, initialMenuContent }) => {
    const [menu, setMenu] = useState(initialMenuContent || []);

    const setIsOpen = (key, isOpen) => {
        setMenu((prevMenu) => {
            const updatedMenu = [...prevMenu];
            findAndPerformAction(updatedMenu, key, (item) => {
                item.isOpen = isOpen;
                if (!isOpen) {
                    setIsActive(key, false);
                }
            });
            return updatedMenu;
        });
    };

    const setIsActive = (key, isActive) => {
        setMenu((prevMenu) => {
            const updatedMenu = [...prevMenu];
            if (isActive) {
                resetIsActive(updatedMenu);
            }
            findAndPerformAction(updatedMenu, key, (item) => (item.isActive = isActive));
            return updatedMenu;
        });
    };

    return <MenuContext.Provider value={{ menu, setIsOpen, setIsActive }}>{children}</MenuContext.Provider>;
};

export const useMenu = () => useContext(MenuContext);
