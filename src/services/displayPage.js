import HomePage from '../components/HomePage';

export const fetchDisplayPage = (key) => {
    if (key === 'about') {
        return <HomePage></HomePage>;
    }
};
