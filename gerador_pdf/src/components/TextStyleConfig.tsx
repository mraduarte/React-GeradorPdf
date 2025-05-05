const TextStyleConfig = () => {
  return (
    <div className="text-style-config">
      <label className="configLabel">
        Font size:
        <input type="text" className="input" />
      </label>
      <label className="configLabel">
        Font color:
        <input type="color" className="colorPicker" />
      </label>
      <label className="configLabel">
        Bold:
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default TextStyleConfig;
