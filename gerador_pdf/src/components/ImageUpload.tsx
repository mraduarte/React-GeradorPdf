const ImageUpload = () => {
  return (
    <div className="imageUpload">
      <label className="label">
        Upload Image:
        <input type="file" accept="image/*" className="input"/>
      </label>
    </div>
  );
};

export default ImageUpload;
