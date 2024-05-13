import { AiOutlineControl } from 'react-icons/ai';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';
import { MouseEvent } from 'react';

/**
 * Renders a theme changer component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @return {JSX.Element} The rendered theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const changeTheme = (
    e: MouseEvent<HTMLAnchorElement>,
    selectedTheme: string,
  ) => {
    e.preventDefault();

    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);

    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);

    setTheme(selectedTheme);
  };

  return (
    <div>
   
    </div>
  );
};

export default ThemeChanger;
