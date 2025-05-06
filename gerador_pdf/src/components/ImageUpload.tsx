type Props = {
  setImage: (img: string) => void;
};

const ImageUpload = ({ setImage }: Props) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  };

  return (
    <div className="imageUpload">
      <label className="label">
        Upload Image:
        <input
          type="file"
          accept="image/*"
          className="input"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
