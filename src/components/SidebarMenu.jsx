import React, { useEffect, useRef } from 'react';
import { useMenu } from '../services/menuContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Header = ({ item, paddingLeft }) => {
    const { setIsOpen } = useMenu();

    const toggleOpen = () => {
        setIsOpen(item.key, !item.isOpen);
    };

    return (
        <div
            onClick={toggleOpen}
            key={item.key}
            className="poppins-light cursor-pointer py-[2px] hover:bg-zinc-800"
            style={{ paddingLeft: paddingLeft }}
        >
            <FontAwesomeIcon
                icon={item.isOpen ? faFolderOpen : faFolder}
                style={{ color: '#de8e04', marginRight: '8px' }}
            />
            {item.name}
        </div>
    );
};

const MenuItem = ({ item, paddingLeft, onTap }) => {
    const { setIsOpen, setIsActive } = useMenu();

    const handleItemClick = () => {
        setIsOpen(item.key, true);
        setIsActive(item.key, true);
        if (onTap) {
            onTap();
        }
    };

    return (
        <div
            className={`poppins-light cursor-pointer py-[2px] hover:bg-zinc-800 ${item.isActive ? 'bg-zinc-800' : ''}`}
            onClick={handleItemClick}
            style={{ paddingLeft: paddingLeft }}
        >
            {item.icon}
            <span className="pl-2">{item.name}</span>
        </div>
    );
};

const SidebarMenu = ({ width, onTap = null }) => {
    const { menu } = useMenu();
    const contentRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (onTap && contentRef.current && !contentRef.current.contains(event.target)) {
                onTap();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onTap]);

    const renderMenuItems = (items, level) => {
        let paddingLeft = level * 15 + 'px';
        return items.map((item) => (
            <div style={{ width: `${width}px` }} key={item.key}>
                <React.Fragment key={item.key}>
                    {item.children ? (
                        <>
                            <Header paddingLeft={paddingLeft} item={item} />
                            {item.isOpen && <div>{renderMenuItems(item.children, level + 1)}</div>}
                        </>
                    ) : (
                        <MenuItem item={item} paddingLeft={paddingLeft} onTap={onTap} />
                    )}
                </React.Fragment>
            </div>
        ));
    };

    return (
        <div className={`${onTap ? 'pt-[3.1rem]' : 'pt-3'} text-zinc-400`} ref={contentRef}>
            {renderMenuItems(menu, 1)}
        </div>
    );
};

export default SidebarMenu;
