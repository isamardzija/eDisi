import "./fontsize.css";
export default function FontSize(props) {
  const { fontSize, onFontSizeChange } = props;

  return (
    <div className="fontSize-container">
      <label htmlFor="fontsize">Change font size:</label>
      <input
        type="range"
        name="fontsize"
        id="fontsize"
        min={16}
        max={32}
        step={2}
        defaultValue={16}
        onChange={onFontSizeChange}
      />
    </div>
  );
}
