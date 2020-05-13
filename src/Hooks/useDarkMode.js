import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage();

    useEffect(() => {
        const element = window.document.body;
        value ? element.classList.add('dark-mode') : element.classList.remove('dark-mode')
    }, [value]);
    return [value, setValue];
}