import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const data = [
    {
        name: 'Projects',
        subMenu: [
            {
                parent: 'Projects',
                name: 'Facecan',
                key: `facecan`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: true,
                isActive: false,
            },
            {
                parent: 'Projects',
                name: 'Time Table Generator',
                key: `ttg`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <TableViewOutlinedIcon fontSize="small" />,
                isOpen: true,
                isActive: false,
            },
            {
                parent: 'Projects',
                name: 'Old School Tailor',
                key: `ost`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <ContentCutOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
        ],
    },
    {
        name: 'Social Links',
        subMenu: [
            {
                parent: 'Social Links',
                name: 'LinkedIn',
                key: `linkedin`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <FontAwesomeIcon icon={faLinkedinIn} size="sm" style={{ color: '#ffffff70' }} />,
                isOpen: true,
                isActive: false,
            },
            {
                parent: 'Social Links',
                name: 'Instagram',
                key: `instagram`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
            {
                parent: 'Social Links',
                name: 'Github',
                key: `github`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
        ],
    },
    {
        name: 'Experiences',
        subMenu: [
            {
                parent: 'Experiences',
                name: 'Xola',
                key: `xola`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
            {
                parent: 'Experiences',
                name: 'Symphony Talent',
                key: `st`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
            {
                parent: 'Experiences',
                name: 'Intrigin',
                key: `intrigin`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
        ],
    },
];
// class Menu {
//     data = data;

//     getActiveMenuItems() {
//         return this.data
//             .map((menu) => {
//                 return menu.subMenu.filter((item) => item.isActive);
//             })
//             .flat();
//     }

//     getOpenMenuItems() {
//         return this.data
//             .map((menu) => {
//                 return menu.subMenu.filter((item) => item.isOpen);
//             })
//             .flat();
//     }

//     updateItem(item) {
//         this.data.map((menu) => {
//             return menu.subMenu.map((subMenu) => {
//                 if (item.key !== subMenu.key) {
//                     return subMenu;
//                 }
//                 return item;
//             });
//         });
//     }
//     setIsOpen(item, flag) {
//         this.data.forEach((menu) => {
//             menu.subMenu.forEach((subMenu) => {
//                 if (subMenu.key === item.key) {
//                     subMenu.isOpen = flag;
//                 }
//             });
//         });
//     }

//     setIsActive(item, flag) {
//         this.data.forEach((menu) => {
//             menu.subMenu.forEach((subMenu) => {
//                 if (subMenu.key === item.key) {
//                     subMenu.isActive = flag;
//                 } else {
//                     // Ensure only one item can be active at a time
//                     if (flag) subMenu.isActive = false;
//                 }
//             });
//         });
//     }
// }

export default data;
