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
                    icon: <PersonSearchOutlinedIcon />,
                },
                {
                    name: 'Time Table Generator',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon />,
                },
                {
                    name: 'Old School Tailor',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon />,
                },
            ],
        },
        {
            name: 'Social Links',
            subMenu: [
                {
                    name: 'LinkedIn',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon />,
                },
                {
                    name: 'Instagram',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon />,
                },
                {
                    name: 'Github',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon />,
                },
            ],
        },
        {
            name: 'Experiences',
            subMenu: [
                { name: 'Xola', link: 'https://github.com/cddharthsingh/facecan', icon: <PersonSearchOutlinedIcon /> },
                {
                    name: 'Symphony Talent',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon />,
                },
                {
                    name: 'Intrigin',
                    link: 'https://github.com/cddharthsingh/facecan',
                    icon: <PersonSearchOutlinedIcon />,
                },
            ],
        },
    ];

    return (
        <div>
            {menu.map((item) => (
                <MenuHeader menuContent={item}></MenuHeader>
            ))}
        </div>
    );
};

export default SidebarMenu;
