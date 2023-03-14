import { createPortal } from "react-dom";
import "./settings.css";
import FontSize from "./FontSize/FontSize";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Gear from "../Icons/Gear";

export default function Settings(props) {
  const { settings, fontSize, onFontSizeChange, darkTheme, onThemeToggle, onDisconnectClick, connection } = props;
  return (
    <div className="settingsDialog">
      <button onClick={() => settings.current.showModal()}>
        <Gear />
      </button>
      {createPortal(
        <dialog ref={settings}>
          <h2>Settings</h2>
          <FontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
          <ThemeToggle darkTheme={darkTheme} onThemeToggle={onThemeToggle} />
            {connection &&
          <div>
            <button type="button" onClick={onDisconnectClick}>
              Disconnect
            </button>
          </div>
          }
          <button onClick={() => settings.current.close()}>Close</button>
        </dialog>,
        document.getElementById("root")
      )}
    </div>
  );
}
