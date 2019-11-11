import {useEffect} from 'react';
import {LocalStorage} from './LocalStorage';

export const DarkMode = initialValue => {
  const [darkMode, setDarkMode] = LocalStorage(initialValue);

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return [darkMode, setDarkMode];
}