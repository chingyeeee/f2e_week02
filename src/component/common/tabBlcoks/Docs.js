import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import {
  DocTag,
  Image,
  UserInfo,
  UserProfile,
} from "../../../utilities/layout";
import { H5, P2, Title } from "../../../utilities/typography";
import { BsPersonFill } from "react-icons/bs";
import PDF from "../../../img/icons/icon-file-type-pdf.svg";
import PNG from "../../../img/icons/icon-file-type-png.svg";
import { FiMoreVertical } from "react-icons/fi";
import { Col } from "react-bootstrap";
import {
  BsClipboardCheck,
  BsInfoCircle,
  BsDownload,
  BsPencilSquare,
  BsTag,
  BsArchive,
  BsTrash,
} from "react-icons/bs";
import { useState } from "react";

const Doc = styled.div`
  background-color: ${colors.n1};
  border: 1px solid ${colors.n3};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  cursor: pointer;
`;

const DocHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 8px 24px 16px;
  border-bottom: 1px solid ${colors.n3};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
`;

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DocAuthor = styled.div`
  padding: 16px 16px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DocIcon = styled.div`
  padding-top: 16px;
  margin-left: auto;
  margin-right: 24px;
`;

const HeaderTitle = styled.div`
  display: flex;
`;

const BtnMore = styled.div`
  position: relative;
  .icon-more {
    padding: 4px;
    &:hover {
      border-radius: 4px;
      background-color: ${colors.n3};
    }
  }
`;

const MoreContent = styled.div`
  position: absolute;
  border-radius: 8px;
  box-shadow: 0 0 15px ${colors.shadowlv1};
  display: ${(props) => (props.more ? "flex" : "none")};
  flex-direction: column;
  min-width: 150px;
  overflow: hidden;
  left: 0;
  top: 30px;
`;

const BtnAction = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  background-color: ${colors.n1};
  svg {
    color: ${colors.n6};
  }
  &:hover {
    background-color: ${colors.p2};
    svg {
      color: ${colors.p1};
    }
    p {
      color: ${colors.p1};
    }
  }
`;

export const Docs = ({ username, historyFile }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {historyFile.map((doc, i) => {
        return (
          <Col xs={12} md={6} lg={4} xl={3} key={i}>
            <Doc>
              <DocHeader>
                <HeaderTitle>
                  <HeaderContent>
                    <MainTitle>
                      <H5 bold>{doc.docName}</H5>
                      <Tags>
                        <DocTag $tag="teach">{doc.docTags}</DocTag>
                      </Tags>
                    </MainTitle>
                  </HeaderContent>
                  <DocIcon>
                    <Image src={PDF} alt="pdf" />
                  </DocIcon>
                  <BtnMore onClick={() => setShowMore(!showMore)}>
                    <FiMoreVertical className="icon-more" size="1.5rem" />
                    <MoreContent more={showMore ? true : false}>
                      <BtnAction>
                        <BsInfoCircle strokeWidth="0.3" />
                        <P2 medium>簽署狀態</P2>
                      </BtnAction>
                      <BtnAction>
                        <BsClipboardCheck strokeWidth="0.3" />
                        <P2 medium>稽核軌跡</P2>
                      </BtnAction>
                      <BtnAction>
                        <BsDownload strokeWidth="0.3" />
                        <P2 medium>下載檔案</P2>
                      </BtnAction>
                      <BtnAction>
                        <BsPencilSquare strokeWidth="0.3" />
                        <P2 medium>重新命名</P2>
                      </BtnAction>
                      <BtnAction>
                        <BsTag strokeWidth="0.3" />
                        <P2 medium>管理標籤</P2>
                      </BtnAction>
                      <BtnAction>
                        <BsArchive strokeWidth="0.3" />
                        <P2 medium>封存</P2>
                      </BtnAction>
                      <BtnAction>
                        <BsTrash strokeWidth="0.3" />
                        <P2 medium>刪除</P2>
                      </BtnAction>
                    </MoreContent>
                  </BtnMore>
                </HeaderTitle>
                <P2>最後修改時間：{doc.timeStamp}</P2>
              </DocHeader>
              <DocAuthor>
                <Title>簽署者：</Title>
                <UserProfile
                  width="1rem"
                  height="1rem"
                  padding="5px"
                  paddingMobile="5px"
                >
                  <BsPersonFill />
                </UserProfile>
                <UserInfo>
                  <Title $mode="black">{username}</Title>
                </UserInfo>
              </DocAuthor>
            </Doc>
          </Col>
        );
      })}
    </>
  );
};
