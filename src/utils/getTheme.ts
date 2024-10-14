const getTheme = () =>
  window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches
    ? 'dark'
    : 'light';
export default getTheme;
