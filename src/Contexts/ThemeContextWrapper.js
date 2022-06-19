import {useEffect, useState} from "react";
import {ThemeContext, themes} from "./ThemeContext";

const ThemeContextWrapper = ({children}) => {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = (value) => {
    setTheme(value);
  };

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        break;
      case themes.dark:
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      default:
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )

};

export default ThemeContextWrapper;