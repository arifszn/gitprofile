import { createContext, useState } from 'react';
import { getInitialTheme } from '../helpers/utils';

const initialValue = getInitialTheme();

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(initialValue);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
