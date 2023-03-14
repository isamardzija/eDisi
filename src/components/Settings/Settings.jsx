import { useRef } from "react";
import { createPortal } from "react-dom";
import "./settings.css";
import FontSize from "./FontSize/FontSize";

export default function Settings(props) {
  const { fontSize, onFontSizeChange } = props;
  const settings = useRef(null);
  return (
    <div className="settingsDialog">
      <button onClick={() => settings.current.showModal()}>
        Open Settings
      </button>
      {createPortal(
        <dialog ref={settings} >
          <h2>Settings</h2>
          <FontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
          <button onClick={() => settings.current.close()}>Close</button>
        </dialog>,
        document.getElementById("root")
      )}
    </div>
  );
}
