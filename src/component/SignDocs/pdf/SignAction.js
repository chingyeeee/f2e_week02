import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { IoClose, IoAdd } from "react-icons/io5";
import { Subtitle, Title } from "../../../utilities/typography";
import { BtnStyle, Image } from "../../../utilities/layout";
import { useState } from "react";
import { CreateSignCanvas } from "./CreateSignCanvas";

const AlertBg = styled.div`
  background-color: ${colors.modalBg};
  width: 100vw;
  height: 100vh;
  display: flex;
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
  gap: 32px;
  width: 100%;
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

const SignModalContent = ({ setAction, sign }) => {
  return (
    <SignList>
      {/* {sign.forEach((sign) => (
        <BtnStyle className="w-100 mt-3">
          <Image src={sign} />
        </BtnStyle>
      ))} */}
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

export const SignAction = ({ setBtnType }) => {
  const [action, setAction] = useState("sign");
  const [sign, setSign] = useState([]);

  return (
    <AlertBg>
      <Modal>
        <IoClose className="icon-close" onClick={() => setBtnType("")} />
        <ModalHeader>
          {action === "sign" ? <SignModal /> : <CreateSignModal />}
        </ModalHeader>
        <ModalContent>
          {action === "sign" ? (
            <SignModalContent setAction={setAction} sign={sign} />
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
