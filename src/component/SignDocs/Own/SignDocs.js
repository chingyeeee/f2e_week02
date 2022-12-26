import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { BsPencil, BsCalendar, BsTextareaT } from "react-icons/bs";
import { P1, Title } from "../../../utilities/typography";
import { BtnStyle, NavLinkItem } from "../../../utilities/layout";
import { SignAction } from "../pdf/SignAction";
import { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { fabric } from "fabric";
import { pdfjs } from "react-pdf";
import renderPdf from "../../../utilities/renderPdf";
import { DownloadAction } from "../pdf/DownloadAction";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const DocContent = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 130px;
  position: relative;
`;

const SideNav = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px 0;
  background-color: ${colors.n1};
  width: 280px;
  box-shadow: 0 0 15px ${colors.shadowlv1};
`;

const ShowDoc = styled.div`
  padding: 24px 32px;
  width: calc(100% - 280px);
  background-color: ${colors.n2};
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  .canvas-container {
    margin: auto;
  }
`;

const Pagination = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  left: 280px;
  right: 0;
  margin: auto;
  bottom: 50px;
  background-color: ${colors.n1};
  border-radius: 8px;
  width: 20%;
  padding: 8px;
  justify-content: space-between;
  box-shadow: 0 0 15px ${colors.shadowlv1};
  svg {
    cursor: pointer;
  }
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SignDoc = ({
  pdfByPages,
  docName,
  showDownloadModal,
  setShowDownloadModal,
  docTags,
}) => {
  // init render state
  const effectRan = useRef(false);
  // variables between re-render
  const fabricCanvasRef = useRef(null);
  // save canvas
  const [canvas, setCanvas] = useState(null);
  //save sign
  const [sign, setSign] = useState([]);
  // 換頁
  const [page, setPage] = useState(0);
  // show modal
  const [showSignModal, setShowSignModal] = useState(false);
  const navigate = useNavigate();

  const editText = new fabric.IText("點擊編輯", {
    fontSize: 24,
    fontWeight: "normal",
  });

  const addDate = new fabric.Text(getDate(), {
    fontSize: 24,
    fontWeight: "normal",
    top: 100,
    left: 100,
  });

  // 監聽使用者要 sign/text/date
  function onHandleClick(e) {
    e.preventDefault();
    let btnType = e.target.closest(".nav-btn").id;

    if (btnType === "sign") setShowSignModal(true);
    if (btnType === "text") canvas.add(editText).renderAll();
    if (btnType === "date") canvas.add(addDate).renderAll();
  }

  // 取得今天日期
  function getDate() {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    return `${year}/${month}/${date}`;
  }

  // 監聽刪除
  function handleUserKeyPress(e) {
    if (e.keyCode === 8) {
      deleteSelectedObjectsFromCanvas();
    }
  }

  // 刪除選取物件
  function deleteSelectedObjectsFromCanvas() {
    if (canvas) {
      const activeObject = canvas.getActiveObject();

      if (activeObject) {
        canvas.remove(activeObject);
      }
    }
  }

  //下一頁
  function handleNextPage() {
    if (page === pdfByPages.length - 1) return;
    renderPdf(pdfByPages[page + 1], canvas);
    setPage(page + 1);
  }

  //上一頁
  function handelPrevPage() {
    if (page === 0) return;
    renderPdf(pdfByPages[page - 1], canvas);
    setPage(page - 1);
  }

  function getLastModified() {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    return `${year}/${month}/${date}`;
  }

  //儲存PDF
  function savePdf() {
    // get sign history list from local storage
    const historyFile = JSON.parse(localStorage.getItem("signHistory")) || [];

    setShowDownloadModal(true);

    // 引入套件所提供的物件
    const pdf = new jsPDF();

    // 將 canvas 存為圖片
    const image = canvas.toDataURL("image/png");

    // 設定背景在 PDF 中的位置及大小
    const width = pdf.internal.pageSize.width;
    const height = pdf.internal.pageSize.height;
    pdf.addImage(image, "png", 0, 0, width, height);

    //儲存到localstorage
    historyFile.push({
      dataURL: image,
      docName,
      docTags,
      timeStamp: getLastModified(),
    });
    localStorage.setItem("signHistory", JSON.stringify(historyFile));

    // 將檔案取名並下載
    pdf.save(`${docName}_signed.pdf`);

    navigate("/member");
  }

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  // init render
  useEffect(() => {
    if (effectRan.current === false) {
      // initialized the fabricJS in #canvas element, and render page 1
      fabricCanvasRef.current = new fabric.Canvas("canvas");
      setCanvas(fabricCanvasRef.current);
      renderPdf(pdfByPages[0], fabricCanvasRef.current);
    }
    return () => (effectRan.current = true);
  }, [pdfByPages]);

  return (
    <DocContent>
      <BtnStyle main className="position-absolute top-0" />
      <SignAction
        sign={sign}
        setSign={setSign}
        canvas={canvas}
        setShowSignModal={setShowSignModal}
        showSignModal={showSignModal}
      />
      <DownloadAction
        showDownloadModal={showDownloadModal}
        setShowDownloadModal={setShowDownloadModal}
        savePdf={savePdf}
      />
      <SideNav>
        <NavLinkItem
          className="nav-btn"
          gap="12px"
          paddingV="16px"
          paddingH="32px"
          onClick={(e) => onHandleClick(e)}
          id="sign"
        >
          <BsPencil />
          <Title>簽名</Title>
        </NavLinkItem>
        <NavLinkItem
          className="nav-btn"
          gap="12px"
          paddingV="16px"
          paddingH="32px"
          onClick={(e) => onHandleClick(e)}
          id="date"
        >
          <BsCalendar />
          <Title>日期</Title>
        </NavLinkItem>
        <NavLinkItem
          className="nav-btn"
          gap="12px"
          paddingV="16px"
          paddingH="32px"
          onClick={(e) => onHandleClick(e)}
          id="text"
        >
          <BsTextareaT />
          <Title>文字</Title>
        </NavLinkItem>
      </SideNav>
      <ShowDoc>
        <canvas id="canvas" />
        <Pagination>
          <BsFillArrowLeftSquareFill
            className="btn-icon"
            size="2rem"
            onClick={handelPrevPage}
            color={page === 0 ? colors.n2 : colors.p1}
          />
          <Pages>
            <P1 medium>{page + 1}</P1>
            <P1 medium>/</P1>
            <P1 medium>{pdfByPages.length}</P1>
          </Pages>
          <BsFillArrowRightSquareFill
            className="btn-icon"
            size="2rem"
            onClick={handleNextPage}
            color={page === pdfByPages.length - 1 ? colors.n2 : colors.p1}
          />
        </Pagination>
      </ShowDoc>
    </DocContent>
  );
};
