import ImageUpload from "./ImageUpload";
import TextStyleConfig from "./TextStyleConfig";

import { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.vfs;

const GeneratePDF = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("12");
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);

  const generatePdf = () => {
    const customStyles = {
      fontSize: parseInt(fontSize),
      color: fontColor,
      bold: isBold,
    };

    const docDefinition = {
      content: [
        { text: `Título: ${title}`, style: customStyles },
        { text: `Descrição: ${description}`, style: customStyles },
        ...(image ? [{ image: image, width: 150 }] : []),
      ],
      styles: {
        customStyles: customStyles,
      },
    };

    pdfMake.createPdf(docDefinition).download();
  };

  return (
    <div className="container">
      <label className="label">
        Título:
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </label>
      <label className="label">
        Descrição:
        <input
          type="text"
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </label>
      <TextStyleConfig
        fontColor={fontColor}
        fontSize={fontSize}
        setFontColor={setFontColor}
        setFontSize={setFontSize}
        isBold={isBold}
        setIsBold={setIsBold}
      />
      <ImageUpload setImage={setImage}/>
      <button className="button" onClick={generatePdf}>
        Gerar PDF
      </button>
    </div>
  );
};

export default GeneratePDF;
