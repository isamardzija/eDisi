import Moon from "../../Icons/Moon";
import Sun from "../../Icons/Sun";
import "./themetoggle.css"
export default function ThemeToggle(props) {
  const { darkTheme, onThemeToggle } = props;
  return (
    <div className="themeToggle-container">
      <label htmlFor="themeToggle">Switch to {darkTheme ? "dark" : "light"} theme</label>
      <button id="themeToggle" onClick={onThemeToggle}>{darkTheme ? <Moon /> : <Sun />}</button>
    </div>
  );
}
