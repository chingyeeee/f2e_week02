import Container from "react-bootstrap/Container";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styled from "styled-components";
import { Image, UserInfo, UserProfile } from "../../utilities/layout";
import Logo from "../../img/common/logo.svg";
import { devices, devicesMax } from "../../utilities/devices";
import { colors } from "../../utilities/colors";
import { FiMenu } from "react-icons/fi";
import {
  HiOutlineDocumentDuplicate,
  HiOutlineSearch,
  HiOutlineLogout,
} from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  BsPersonFill,
  BsFillCaretDownFill,
  BsChevronRight,
} from "react-icons/bs";
import { Caption, Subtitle, Title } from "../../utilities/typography";
import { useState } from "react";

const Nav = styled.nav`
  padding: 16px 0;
  display: flex;
  background-color: ${colors.n1};
  align-items: center;
  box-shadow: 0 0 15px ${colors.shadowlv1};
  position: fixed;
  width: 100vw;
  z-index: 20;
`;

const NavBrand = styled.a`
  display: inline-block;
  width: 30%;
  margin: auto;
  z-index: 10;
  @media ${devices.tablet} {
    width: 25%;
  }
  @media ${devices.tabletH} {
    width: 20%;
    margin: 0;
  }
  @media ${devices.laptop} {
    width: 15%;
  }
  @media ${devices.laptopL} {
    width: 10%;
  }
`;

const NavLinks = styled.div`
  position: absolute;
  left: 0;
  @media ${devices.tabletH} {
    left: 0;
    right: 0;
    bottom: 3px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  @media ${devices.tabletH} {
    border-bottom: 2px solid
      ${(props) => (props.active ? colors.p1 : "transparent")};
    padding-bottom: 16px;
  }
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: ${(props) => (props.active ? colors.p1 : colors.n6)};
  cursor: pointer;
  h4 {
    margin: 0;
  }
  &:hover {
    color: ${colors.p3};
  }
  @media ${devicesMax.tabletH} {
    border-left: 2px solid
      ${(props) => (props.active ? colors.p1 : "transparent")};
    padding: 16px;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    gap: 8px;
  }
`;

const MainNavWrapper = styled.div`
  @media ${devicesMax.tabletH} {
    width: 65vw;
    height: 100vh;
    background-color: ${colors.n1};
    position: fixed;
    left: ${(props) => (props.open ? "0" : "-70vw")};
    top: 0;
    z-index: -1;
    transition: 0.5s;
  }
  @media ${devices.tabletH} {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const MainNavBg = styled.div`
  @media ${devicesMax.tabletH} {
    width: 100vw;
    height: 100vh;
    position: fixed;
    right: ${(props) => (props.open ? "0" : "100%")};
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    transition: 0.5s;
  }
`;

const MainNav = styled.div`
  @media ${devicesMax.tabletH} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 176px;
    border-top: 1px solid ${colors.n3};
    border-bottom: 1px solid ${colors.n3};
    padding: 16px 0;
    gap: 12px;
  }
  display: flex;
  gap: 32px;
  margin: auto;
  align-self: flex-end;
`;

const SideNav = styled.div`
  @media ${devicesMax.tabletH} {
    position: absolute;
    top: 100px;
    left: 10px;
  }
  @media ${devices.tabletH} {
    margin-left: auto;
    display: flex;
    gap: 24px;
    align-items: center;
    position: absolute;
    right: 0;
    top: -16px;
  }
`;

const UserNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  @media ${devicesMax.tabletH} {
    gap: 16px;
  }
`;

const UserName = styled(Title)`
  color: ${colors.p1};
  margin: 0;
`;

const UserDetail = styled.div`
  @media ${devicesMax.tabletH} {
    position: absolute;
    top: 390px;
    left: 10px;
    color: ${colors.n6};
    h5 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }
  }
  @media ${devices.tabletH} {
    position: absolute;
    right: 0;
    top: 50px;
    background-color: ${colors.n1};
    color: ${colors.n6};
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    gap: 16px;
    border-radius: 4px;
    box-shadow: 0 0 5px ${colors.shadowlv2};
    padding: 16px;
    transition: 0.5s;
  }
`;

const UserQuestion = styled.div`
  @media ${devicesMax.tabletH} {
    position: absolute;
    left: 10px;
    top: 330px;
    display: flex;
    gap: 8px;
    align-items: center;
    .title-help {
      color: ${colors.n6};
    }
  }
`;

const UserLogout = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const NavBar = ({ email, login, setLogin }) => {
  const username = email.split("@")[0];
  const [showUser, setShowUser] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <Nav>
        <Container>
          <div className="d-flex position-relative align-items-center">
            <NavBrand>
              <Image src={Logo} />
            </NavBrand>
            <NavLinks>
              <FiMenu
                color={colors.p1}
                className="d-lg-none"
                size="1.5rem"
                onClick={() => setOpenSidebar(!openSidebar)}
              />
              <MainNavBg open={openSidebar ? true : false} />
              <MainNavWrapper open={openSidebar ? true : false}>
                <MainNav>
                  <NavLink active>
                    <HiOutlineDocumentDuplicate />
                    <Title bold $mode="active">
                      文件
                    </Title>
                  </NavLink>
                  <NavLink>
                    <HiOutlineSearch />
                    <Title>搜尋</Title>
                  </NavLink>
                  <NavLink>
                    <IoMdNotificationsOutline />
                    <Title>通知</Title>
                  </NavLink>
                </MainNav>
                <SideNav>
                  <UserQuestion>
                    <AiOutlineQuestionCircle size="1.5rem" color={colors.n6} />
                    <Title className="d-lg-none title-help">協助</Title>
                  </UserQuestion>
                  <UserNav onClick={() => setShowUser(!showUser)}>
                    <UserProfile
                      width="1.25rem"
                      height="1.25rem"
                      padding="8px"
                      paddingMobile="10px"
                    >
                      <BsPersonFill />
                    </UserProfile>
                    <UserInfo>
                      <UserName bold>{username}</UserName>
                      <Caption className="d-lg-none">{email}</Caption>
                    </UserInfo>
                    <BsFillCaretDownFill
                      color={colors.n6}
                      className="d-none d-lg-block"
                    />
                    <BsChevronRight color={colors.n6} className="d-lg-none" />
                    <UserDetail show={showUser ? true : false}>
                      <Subtitle className="d-none d-lg-block">{email}</Subtitle>
                      <UserLogout>
                        <HiOutlineLogout
                          size="1.5rem"
                          color={colors.n6}
                          className="d-lg-none"
                        />
                        <Subtitle
                          onClick={() => {
                            setLogin(false);
                          }}
                        >
                          登出
                        </Subtitle>
                      </UserLogout>
                    </UserDetail>
                  </UserNav>
                </SideNav>
              </MainNavWrapper>
            </NavLinks>
          </div>
        </Container>
      </Nav>
    </>
  );
};
