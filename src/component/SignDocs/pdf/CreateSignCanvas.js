import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { P2, Subtitle } from "../../../utilities/typography";
import { useEffect, useRef, useState } from "react";
import getTouchPos from "../../../utilities/canvas/getTouchPos";
import getMousePos from "../../../utilities/canvas/getMousePos";
import { BtnStyle } from "../../../utilities/layout";

const Canvas = styled.canvas`
  border-radius: 4px;
  border: 1px solid ${colors.n3};
  background-color: ${colors.n2};
`;

const CanvasFooter = styled.div`
  padding: 24px 0 8px;
  display: flex;
  gap: 32px;
  width: 100%;
`;

const BtnClear = styled(P2)`
  cursor: pointer;
`;

const CanvasColors = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .icon {
    cursor: pointer;
  }
`;

const Color = styled.div`
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  padding: 8px;
  border: 3px solid ${colors.n1};
  box-shadow: 0 0 0 2px ${(props) => (props.active ? colors.s1 : "transparent")};
`;

const BtnUse = styled(BtnStyle)`
  position: absolute;
  right: 32px;
  top: 12px;
  background-color: ${colors.p1};
  &:hover {
    background-color: ${colors.p3};
  }
`;

export const CreateSignCanvas = ({ setAction, sign, setSign, setSignData }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);

  const [drawing, setDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState(colors.n7);

  const canvasSize = 300;

  useEffect(() => {
    setCanvas(canvasRef.current);
    if (canvasRef.current) setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef]);

  // 開始
  const handleTouchStart = (event) => {
    setDrawing(true);
    const touchPos = getTouchPos(canvas, event);
    ctx.beginPath(touchPos.x, touchPos.y);
    ctx.moveTo(touchPos.x, touchPos.y);
    // event.preventDefault();
  };

  const handleMouseDown = (event) => {
    setDrawing(true);
    const mousePos = getMousePos(canvas, event);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    // event.preventDefault();
  };

  // 移動
  const handleTouchMove = (event) => {
    if (!drawing) return;
    const touchPos = getTouchPos(canvas, event);
    ctx.lineWidth = 2;
    ctx.lineCap = "round"; // 繪制圓形的結束線帽
    ctx.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
    ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
    ctx.shadowColor = strokeColor; // 邊緣顏色
    ctx.strokeStyle = strokeColor; // 線條顏色
    ctx.lineTo(touchPos.x, touchPos.y);
    ctx.stroke();
  };

  const handleMouseMove = (event) => {
    if (!drawing) return;
    const mousePos = getMousePos(canvas, event);
    ctx.lineWidth = 2;
    ctx.lineCap = "round"; // 繪制圓形的結束線帽
    ctx.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
    ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
    ctx.shadowColor = strokeColor; // 邊緣顏色
    ctx.strokeStyle = strokeColor; // 線條顏色
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  };

  // 結束
  const handleTouchEnd = (event) => {
    setDrawing(false);
  };

  const handleMouseUp = (event) => {
    setDrawing(false);
  };

  // 清除
  function clearCanvas() {
    ctx.clearRect(0, 0, canvasSize + 200, canvasSize);
  }

  // 換顏色
  function handleStrokeColor(color) {
    setStrokeColor(color);
  }

  // 轉圖片
  const handleConvertToImage = () => {
    const image = canvas.toDataURL("image/png");
    setSignData(image);
    setSign([...sign, image]);
    if (sign) setAction("sign");
  };

  return (
    <div className="d-flex flex-column align-items-end gap-2 w-100">
      <AiOutlineQuestionCircle color={colors.n5} />
      <Canvas
        ref={canvasRef}
        width={canvasSize + 200}
        height={canvasSize}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <CanvasFooter>
        <BtnClear $mode="active" onClick={clearCanvas}>
          清除
        </BtnClear>
        <CanvasColors>
          <Color
            color={colors.n7}
            active={strokeColor === colors.n7 ? true : false}
            onClick={() => handleStrokeColor(colors.n7)}
          />
          <Color
            color={colors.pdf}
            active={strokeColor === colors.pdf ? true : false}
            onClick={() => handleStrokeColor(colors.pdf)}
          />
          <Color
            color={colors.error}
            active={strokeColor === colors.error ? true : false}
            onClick={() => handleStrokeColor(colors.error)}
          />
          <IoAdd className="icon" size="1.25rem" color={colors.n5} />
        </CanvasColors>
        <BtnUse onClick={handleConvertToImage}>
          <Subtitle $mode="white">使用</Subtitle>
        </BtnUse>
      </CanvasFooter>
    </div>
  );
};
