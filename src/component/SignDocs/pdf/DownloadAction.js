import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { IoClose } from "react-icons/io5";
import { Title } from "../../../utilities/typography";
import { BtnStyle } from "../../../utilities/layout";

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
  min-width: 30vw;
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
  border-bottom: 1px solid ${colors.n2};
`;

const ModalContent = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTitle = styled(Title)`
  padding-bottom: 8px;
  border-bottom: 3px solid
    ${(props) => (props.active ? colors.p1 : "transparent")};
`;

const ModalFooter = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${colors.n2};
  gap: 16px;
`;

export const DownloadAction = ({
  showDownloadModal,
  setShowDownloadModal,
  savePdf,
}) => {
  return (
    <AlertBg isShow={showDownloadModal}>
      <Modal>
        <IoClose
          className="icon-close"
          onClick={() => setShowDownloadModal(false)}
        />
        <ModalHeader>
          <ModalTitle $mode="black" bold>
            提示
          </ModalTitle>
        </ModalHeader>
        <ModalContent>
          <Title $mode="black" bold>
            是否確認創建簽署文件？
          </Title>
        </ModalContent>
        <ModalFooter>
          <BtnStyle onClick={() => setShowDownloadModal(false)}>取消</BtnStyle>
          <BtnStyle main onClick={savePdf}>
            確認
          </BtnStyle>
        </ModalFooter>
      </Modal>
    </AlertBg>
  );
};
