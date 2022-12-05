import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { BtnStyle } from "../../../utilities/layout";
import { Subtitle } from "../../../utilities/typography";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const SignNavHeader = styled.header`
  background-color: ${colors.n1};
  box-shadow: 0 0 15px ${colors.shadowlv1};
  padding: 16px 0;
`;

const SignNav = styled.div`
  display: flex;
  justify-content: space-between;
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
  return (
    <>
      <SignNavHeader>
        <Container>
          <SignNav>
            <NavLinks>
              <NavLink>
                <NavStep active>1</NavStep>
                <Subtitle $mode="active">上傳檔案</Subtitle>
              </NavLink>
              <NavBlock />
              <NavLink>
                <NavStep>2</NavStep>
                <Subtitle>確認上傳檔案</Subtitle>
              </NavLink>
              <NavBlock />
              <NavLink>
                <NavStep>3</NavStep>
                <Subtitle>製作簽署檔案</Subtitle>
              </NavLink>
              <NavBlock />
              <NavLink>
                <NavStep>4</NavStep>
                <Subtitle>下載簽署檔案</Subtitle>
              </NavLink>
            </NavLinks>
            <NavHelp>
              <AiOutlineQuestionCircle color={colors.n5} size="2rem" />
              <BtnStyle>取消</BtnStyle>
            </NavHelp>
          </SignNav>
        </Container>
      </SignNavHeader>
      <Outlet />
    </>
  );
};
