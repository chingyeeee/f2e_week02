import { pdfjs } from "react-pdf";

function readPdf(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = async function () {
      // 將 base64 中的前綴刪去，並進行解碼
      const Base64Prefix = "data:application/pdf;base64,";
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

      const data = atob(reader.result.substring(Base64Prefix.length));
      const pdfDoc = await pdfjs.getDocument({ data }).promise;

      // get total page
      const totalPage = pdfDoc.numPages;

      //宣告pdfDatabyPage array儲存頁面
      let pdfDatabyPage = [];

      // slice data to array by page
      for (let i = 1; i <= totalPage; i++) {
        const pageData = await pdfDoc.getPage(i);
        pdfDatabyPage.push(pageData);
      }
      resolve(pdfDatabyPage);
    };

    reader.readAsDataURL(file);
  });
}
export default readPdf;
