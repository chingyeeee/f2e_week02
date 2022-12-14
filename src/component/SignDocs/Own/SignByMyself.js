import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { BtnStyle } from "../../../utilities/layout";
import { Subtitle } from "../../../utilities/typography";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import { UploadDocs } from "../Own/UploadDocs";
import { NameDocs } from "./NameDocs";
import { SignDoc } from "./SignDocs";
import { DocHeader } from "./DocHeader";
import { useNavigate } from "react-router-dom";

const SignNavHeader = styled.header`
  background-color: ${colors.n1};
  box-shadow: 0 0 15px ${colors.shadowlv1};
  position: fixed;
  z-index: 10;
  width: 100%;
`;

const SignNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavHelp = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const NavLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavBlock = styled.span`
  width: 40px;
  height: 1px;
  background-color: ${(props) => (props.active ? colors.p1 : colors.n5)};
`;

const NavStep = styled.div`
  background-color: ${(props) => (props.active ? colors.p1 : colors.n5)};
  color: ${colors.n1};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const SignByMyself = () => {
  const [pdf, setPdf] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [docName, setDocName] = useState(null);
  const [docTags, setDocTags] = useState(null);
  const [pdfByPages, setpdfByPages] = useState("");
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const navigate = useNavigate();

  function onUpLoad(blob) {
    setpdfByPages(blob);
  }

  return (
    <>
      <SignNavHeader>
        <SignNav>
          <NavLinks>
            <NavLink>
              <NavStep active>1</NavStep>
              <Subtitle $mode="active">????????????</Subtitle>
            </NavLink>
            <NavBlock active />
            <NavLink>
              <NavStep active={pdf !== null && "true"}>2</NavStep>
              <Subtitle $mode={pdf !== null && "active"}>??????????????????</Subtitle>
            </NavLink>
            <NavBlock active={pdf !== null && "true"} />
            <NavLink>
              <NavStep active={docName !== null && "true"}>3</NavStep>
              <Subtitle $mode={docName !== null && "active"}>
                ??????????????????
              </Subtitle>
            </NavLink>
            <NavBlock active={docName !== null && "true"} />
            <NavLink>
              <NavStep>4</NavStep>
              <Subtitle>??????????????????</Subtitle>
            </NavLink>
          </NavLinks>
          <NavHelp>
            <AiOutlineQuestionCircle color={colors.n5} size="1.5rem" />
            <BtnStyle onClick={() => navigate("/member")}>??????</BtnStyle>
            <BtnStyle main onClick={() => setShowDownloadModal(true)}>
              ????????????
            </BtnStyle>
          </NavHelp>
        </SignNav>
        {docName !== null && <DocHeader docName={docName} docTags={docTags} />}
      </SignNavHeader>

      {pdf === null ? (
        <UploadDocs
          setPdf={setPdf}
          setFileName={setFileName}
          onUpLoad={onUpLoad}
        />
      ) : docName === null ? (
        <NameDocs
          setPdf={setPdf}
          fileName={fileName}
          setDocName={setDocName}
          setDocTags={setDocTags}
          pdfByPages={pdfByPages}
        />
      ) : (
        <SignDoc
          pdfByPages={pdfByPages}
          docName={docName}
          docTags={docTags}
          showDownloadModal={showDownloadModal}
          setShowDownloadModal={setShowDownloadModal}
        />
      )}
    </>
  );
};
