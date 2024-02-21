import React from 'react';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import MenuHeader from './MenuHeader';

const SidebarMenu = () => {
    const menu = [
        {
            name: 'Projects',
            subMenu: [
                {
                    name: 'Facecan',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
                {
                    name: 'Time Table Generator',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
                {
                    name: 'Old School Tailor',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
            ],
        },
        {
            name: 'Social Links',
            subMenu: [
                {
                    name: 'LinkedIn',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
                {
                    name: 'Instagram',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
                {
                    name: 'Github',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
            ],
        },
        {
            name: 'Experiences',
            subMenu: [
                {
                    name: 'Xola',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
                {
                    name: 'Symphony Talent',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
                {
                    name: 'Intrigin',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon fontSize="small" />,
                },
            ],
        },
    ];

    return (
        <div className="select-none">
            {menu.map((item) => (
                <MenuHeader menuContent={item} key={item.name}></MenuHeader>
            ))}
        </div>
    );
};

export default SidebarMenu;
