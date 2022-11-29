import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { devices, devicesMax } from "../../utilities/devices";
import { BtnStyle, Image, LightBg } from "../../utilities/layout";
import { P1, P2, Title } from "../../utilities/typography";
import { RiAddFill } from "react-icons/ri";
import IconSignInvitation from "../../img/icons/icon-sign-invitation.svg";
import IconSignPersonal from "../../img/icons/icon-sign-personally.svg";
import { useState } from "react";
import { FilterBlock } from "./tabBlcoks/FilterBlock";
import { Container } from "react-bootstrap";
import { DocsBlock } from "./tabBlcoks/DocsBlock";

const TabBar = styled.div`
  background-color: ${colors.n1};
  padding-top: 63px;
  @media ${devices.tablet} {
    padding-top: 84px;
  }
  @media ${devices.tabletH} {
    padding-top: 88px;
  }
  @media ${devices.laptop} {
    padding-top: 74px;
  }
  @media ${devices.laptopL} {
    padding-top: 65px;
  }
  @media ${devices.desktop} {
    padding-top: 71px;
  }
`;

const TabList = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  overflow-x: auto;
  flex-wrap: nowrap;
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TabLink = styled.a`
  border-bottom: 2px solid
    ${(props) => (props.active ? colors.p1 : "transparent")};
  padding-bottom: 16px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  font-size: 16px;
  color: ${(props) => (props.active ? colors.p1 : colors.n6)};
  line-height: 20px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    color: ${colors.p3};
  }
`;

const BtnAdd = styled(BtnStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${devices.tabletH} {
    gap: 8px;
    align-self: center;
  }
  @media ${devicesMax.tabletH} {
    position: fixed;
    right: 12px;
    bottom: 10%;
    border-radius: 50%;
    padding: 12px;
  }
`;

const BtnAddInner = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  z-index: 3;
  border-radius: 8px;
  filter: drop-shadow(0 0 15px ${colors.shadowlv1});
  -webkit-filter: drop-shadow(0 0 15px ${colors.shadowlv1});
  &::after {
    content: "";
    position: absolute;
    z-index: 10;
  }
  @media ${devices.tabletH} {
    position: absolute;
    top: 85px;
    right: 0;
    &::after {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${colors.n1};
      right: 50px;
      top: -10px;
    }
  }
  @media ${devicesMax.tabletH} {
    position: fixed;
    right: 12px;
    bottom: 20%;
    &::after {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid ${colors.n1};
      right: 20px;
      bottom: -10px;
    }
  }
`;

const AddSign = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 16px;
  max-width: 300px;
  background-color: ${colors.n1};
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  cursor: pointer;
  img {
    width: 20%;
  }
  &:hover {
    background-color: ${colors.n2};
  }
`;

const SignType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TabNav = () => {
  const [showAddType, setShowAddType] = useState(false);

  return (
    <>
      <TabBar>
        <Container>
          <TabMenu>
            <TabList>
              <TabLink active>待自己簽署</TabLink>
              <TabLink>待他人簽署</TabLink>
              <TabLink>已完成</TabLink>
              <TabLink>已取消</TabLink>
              <TabLink>草稿</TabLink>
              <TabLink>已封存</TabLink>
            </TabList>
            <BtnAdd main onClick={() => setShowAddType(!showAddType)}>
              <Title $mode="white" className="d-none d-lg-block">
                新增
              </Title>
              <RiAddFill color={colors.n1} size="1.5rem" />
            </BtnAdd>
            <BtnAddInner show={showAddType ? true : false}>
              <AddSign>
                <Image src={IconSignPersonal} />
                <SignType>
                  <P1 medium $mode="black">
                    自己簽署
                  </P1>
                  <P2>你是文件唯一簽署者</P2>
                </SignType>
              </AddSign>
              <AddSign>
                <Image src={IconSignInvitation} />
                <SignType>
                  <P1 medium $mode="black">
                    邀請他人簽署
                  </P1>
                  <P2>指派簽署欄位給其他簽署人</P2>
                </SignType>
              </AddSign>
            </BtnAddInner>
          </TabMenu>
        </Container>
      </TabBar>
      <LightBg>
        <Container className="position-relative">
          <FilterBlock />
          <DocsBlock />
        </Container>
      </LightBg>
    </>
  );
};
