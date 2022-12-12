import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { BsPencil, BsCalendar, BsTextareaT } from "react-icons/bs";
import { Title } from "../../../utilities/typography";
import { NavLinkItem } from "../../../utilities/layout";
import AllPages from "../pdf/AllPages";
import { SignAction } from "../pdf/SignAction";
import { useState } from "react";

const DocContent = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 130px;
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
  width: calc(100% - 280px);
  padding: 24px 32px;
  background-color: ${colors.n2};
  overflow-y: scroll;
  #canvas {
    width: 100%;
    object-fit: contain;
  }
`;

export const SignDoc = ({ pdf, docName, setDocName, docTags }) => {
  const [btnType, setBtnType] = useState(null);

  function onHandleClick(btnType) {
    setBtnType(btnType);
  }

  return (
    <DocContent>
      {btnType === "sign" && <SignAction setBtnType={setBtnType} />}
      <SideNav>
        <NavLinkItem
          gap="12px"
          paddingV="16px"
          paddingH="32px"
          onClick={() => onHandleClick("sign")}
        >
          <BsPencil />
          <Title>簽名</Title>
        </NavLinkItem>
        <NavLinkItem
          gap="12px"
          paddingV="16px"
          paddingH="32px"
          onClick={() => onHandleClick("date")}
        >
          <BsCalendar />
          <Title>日期</Title>
        </NavLinkItem>
        <NavLinkItem
          gap="12px"
          paddingV="16px"
          paddingH="32px"
          onClick={() => onHandleClick("text")}
        >
          <BsTextareaT />
          <Title>文字</Title>
        </NavLinkItem>
      </SideNav>
      <ShowDoc>
        <AllPages pdf={pdf} />
      </ShowDoc>
    </DocContent>
  );
};
