import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { IoClose, IoAdd } from "react-icons/io5";
import { Subtitle, Title } from "../../../utilities/typography";
import { BtnStyle, Image } from "../../../utilities/layout";
import { useState } from "react";
import { CreateSignCanvas } from "./CreateSignCanvas";
import { fabric } from "fabric";

const AlertBg = styled.div`
  background-color: ${colors.modalBg};
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isShow ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  transform: translateY(-130px);
`;

const Modal = styled.div`
  background-color: ${colors.n1};
  border-radius: 8px;
  box-shadow: 0 0 20px ${colors.shadowlv2};
  position: relative;
  min-width: 40vw;
  .icon-close {
    position: absolute;
    top: 16px;
    left: 16px;
    cursor: pointer;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-top: 24px;
  border-bottom: 1px solid ${colors.n3};
`;

const ModalLink = styled(Subtitle)`
  padding-bottom: 8px;
  border-bottom: 3px solid
    ${(props) => (props.active ? colors.p1 : "transparent")};
`;

const ModalContent = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Sign = styled(BtnStyle)`
  max-height: 50px;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
    max-width: 100px;
    height: auto;
  }
`;

const SignModal = () => {
  return (
    <>
      <ModalLink active $mode="active" bold>
        簽名
      </ModalLink>
      <ModalLink>圖片</ModalLink>
    </>
  );
};

const SignModalContent = ({ setAction, sign, setShowSignModal, canvas }) => {
  function applySign(sign) {
    fabric.Image.fromURL(sign, (img) => {
      img.set({
        // 這邊可以設定上下左右距離、角度、寬高等等
        left: 250,
        top: 250,
      });
      img.scaleToWidth(50);
      img.scaleToHeight(50);
      canvas.add(img).renderAll();
    });
    setShowSignModal(false);
  }

  return (
    <SignList>
      {sign.map((sign, i) => {
        return (
          <Sign className="mt-3" key={i} onClick={() => applySign(sign)}>
            <Image src={sign} />
          </Sign>
        );
      })}
      <BtnStyle className="w-100 mt-3" onClick={() => setAction("createSign")}>
        <Title $mode="active" bold>
          創建簽名
        </Title>
        <IoAdd />
      </BtnStyle>
    </SignList>
  );
};

const CreateSignModal = () => {
  return (
    <Subtitle className="pb-3" $mode="black" bold>
      創建簽名
    </Subtitle>
  );
};

export const SignAction = ({
  sign,
  setSign,
  canvas,
  setShowSignModal,
  showSignModal,
}) => {
  const [action, setAction] = useState("sign");

  return (
    <AlertBg isShow={showSignModal}>
      <Modal>
        <IoClose
          className="icon-close"
          onClick={() => setShowSignModal(false)}
        />
        <ModalHeader>
          {action === "sign" ? <SignModal /> : <CreateSignModal />}
        </ModalHeader>
        <ModalContent>
          {action === "sign" ? (
            <SignModalContent
              setAction={setAction}
              sign={sign}
              setShowSignModal={setShowSignModal}
              canvas={canvas}
            />
          ) : (
            <CreateSignCanvas
              setAction={setAction}
              sign={sign}
              setSign={setSign}
            />
          )}
        </ModalContent>
      </Modal>
    </AlertBg>
  );
};
