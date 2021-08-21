import config from "../config";

export const getThemeValue = () => {
    if (localStorage.hasOwnProperty('theme')) {
        let theme = localStorage.getItem('theme');
        return theme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : config.defaultTheme;
}