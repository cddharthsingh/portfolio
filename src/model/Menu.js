import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faWordpressSimple, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export const data2 = [
    {
        name: 'Projects',
        key: 'projects',
        children: [
            {
                name: 'Facecan',
                key: 'facecan',
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <FontAwesomeIcon icon={faPython} />,
                isOpen: false,
                isActive: false,
            },
            {
                name: 'Time Table Generator',
                key: 'ttg',
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <FontAwesomeIcon icon={faPython} />,
                isOpen: false,
                isActive: false,
            },
            {
                name: 'Old School Tailor',
                key: 'ost',
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <FontAwesomeIcon icon={faWordpressSimple} />,
                isOpen: false,
                isActive: false,
            },
            {
                name: 'Small Projects',
                key: 'small-projects',
                children: [
                    {
                        name: 'Project A',
                        key: 'project-a',
                        link: 'https://github.com',
                        icon: <FontAwesomeIcon icon={faLinkedinIn} size="sm" style={{ color: '#ffffff70' }} />,
                        isOpen: false,
                        isActive: false,
                    },
                    {
                        name: 'Project B',
                        key: 'project-b',
                        link: 'https://github.com',
                        icon: <FontAwesomeIcon icon={faLinkedinIn} size="sm" style={{ color: '#ffffff70' }} />,
                        isOpen: false,
                        isActive: false,
                    },
                ],
            },
        ],
    },
    {
        name: 'Social Links',
        key: 'socialLinks',
        children: [
            {
                name: 'LinkedIn',
                key: `linkedin`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <FontAwesomeIcon icon={faLinkedinIn} />,
                isOpen: false,
                isActive: false,
            },
            {
                name: 'Instagram',
                key: `instagram`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <FontAwesomeIcon icon={faInstagram} />,
                isOpen: false,
                isActive: false,
            },
            {
                name: 'Github',
                key: `github`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <FontAwesomeIcon icon={faGithub} />,
                isOpen: false,
                isActive: false,
            },
        ],
    },
    {
        name: 'Experiences',
        key: 'experiences',
        children: [
            {
                name: 'Xola',
                key: `xola`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
            {
                name: 'Symphony Talent',
                key: `st`,
                link: 'https://github.com/cddharthsingh/facecan',
                icon: <PersonSearchOutlinedIcon fontSize="small" />,
                isOpen: false,
                isActive: false,
            },
            {
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
