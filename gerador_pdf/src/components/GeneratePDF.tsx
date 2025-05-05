import ImageUpload from "./ImageUpload";
import TextStyleConfig from "./TextStyleConfig";

import { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.vfs;

const GeneratePDF = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const generatePdf = () => {
    //Configurações do PDF
    const docDefinition = {
      content: [
        { text: `Título: ${title}` },
        { text: `Descrição: ${description}` },
      ],
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
      <TextStyleConfig />
      <ImageUpload />
      <button className="button" onClick={generatePdf}>Gerar PDF</button>
    </div>
  );
};

export default GeneratePDF;
