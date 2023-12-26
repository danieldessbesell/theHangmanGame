export default function handleChangeTheme(themeSelect, setThemeSelect) {
    if (themeSelect === 'dark') {
      setThemeSelect('light');
    } else {
      setThemeSelect('dark');
    }
  }