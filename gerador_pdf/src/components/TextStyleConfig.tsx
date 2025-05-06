type Props = {
  fontSize: string;
  setFontSize: (size: string) => void;
  fontColor: string;
  setFontColor: (color: string) => void;
  isBold: boolean;
  setIsBold: (isBold: boolean) => void;
};

const TextStyleConfig = (props: Props) => {
  return (
    <div className="textStyleConfig">
      <label className="configLabel">
        Font size:
        <input
          type="text"
          className="input"
          value={props.fontSize}
          onChange={(e) => props.setFontSize(e.target.value)}
        />
      </label>
      <label className="configLabel">
        Font color:
        <input
          type="color"
          className="colorPicker"
          value={props.fontColor}
          onChange={(e) => props.setFontColor(e.target.value)}
        />
      </label>
      <label className="configLabel">
        Bold:
        <input
          type="checkbox"
          checked={props.isBold}
          onChange={(e) => props.setIsBold(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default TextStyleConfig;
