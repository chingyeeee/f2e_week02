import styled from "styled-components";
import { colors } from "../utilities/colors.js";
import { Image } from "../utilities/layout.js";
import Logo from "../img/common/logo.svg";
import DecoHomePerson from "../img/deco-home-person.svg";
import { Col, Container, Row } from "react-bootstrap";
import { P1, P2 } from "../utilities/typography.js";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { devices } from "../utilities/devices.js";

const HomeBg = styled.section`
  background-color: ${colors.p2};
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Action = styled.div`
  margin-top: 50px;
  background-color: ${colors.n1};
  border-radius: 8px;
  box-shadow: 0 0 15px ${colors.shadowlv1};
`;

const DecoPerson = styled.div`
  width: 15%;
  position: absolute;
  bottom: 0;
  right: 10%;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const TabLogin = styled(P1)`
  padding: 16px 12px 20px;
  border-bottom: 3px solid ${colors.p1};
  margin: 0;
`;

const Body = styled.div`
  padding: 40px 60px;
  border-top: 1px solid ${colors.n2};
`;

const LoginType = styled.button`
  background-color: ${colors.p2};
  color: ${colors.p1};
  padding: 16px;
  border: 0;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 0 2px ${colors.shadowBlue};
  }
`;

const LoginTips = styled(P2)`
  position: relative;
  margin: 32px 0;
  color: ${colors.n5};
  &::before {
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    background-color: ${colors.n5};
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    background-color: ${colors.n5};
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  @media ${devices.tablet} {
    &::before,
    &::after {
      width: 25%;
    }
  }
  @media ${devices.tabletH} {
    &::before,
    &::after {
      width: 30%;
    }
  }
`;

const LoginInput = styled.div`
  border: 1px solid ${colors.n5};
  padding: 12px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 4px;
  .icon {
    flex-shrink: 0;
  }
  .iconButton {
    cursor: pointer;
  }
  input {
    flex-grow: 1;
    outline: 0;
    border: 0;
    color: ${colors.n7};
  }
  ::placeholder {
    color: ${colors.n5};
  }
`;

const LoginButton = styled.button`
  border: 0;
  border-radius: 4px;
  text-align: center;
  padding: 8px 16px;
  width: 100%;
  margin-top: 32px;
  color: ${(props) => (props.active ? colors.n1 : colors.n5)};
  background-color: ${(props) => (props.active ? colors.p1 : colors.n2)};
  font-weight: 500;
`;

const RegisterTips = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const BtnRegister = styled(P2)`
  color: ${colors.p1};
  cursor: pointer;
  &:hover {
    color: ${colors.p3};
    transition: 0.2s;
  }
`;

const LoginBody = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={6} className="text-end">
          <LoginType>
            <FaFacebookF size="1.5rem" />
          </LoginType>
        </Col>
        <Col xs={6}>
          <LoginType>
            <FaGoogle size="1.5rem" />
          </LoginType>
        </Col>
      </Row>
      <LoginTips className="text-center">或使用電子信箱登入</LoginTips>
      <Row className="flex-column gap-4">
        <Col xs={12}>
          <LoginInput>
            <HiOutlineMail size="1.5rem" color={colors.p1} className="icon" />
            <input type="text" placeholder="請輸入您的電子信箱" />
          </LoginInput>
        </Col>
        <Col xs={12}>
          <LoginInput>
            <HiOutlineLockClosed
              size="1.5rem"
              color={colors.p1}
              className="icon"
            />
            <input type="text" placeholder="請輸入您的密碼" />
            <AiOutlineEyeInvisible
              size="1.5rem"
              color={colors.n5}
              className="icon iconButton"
            />
          </LoginInput>
        </Col>
      </Row>
      <LoginButton>登入</LoginButton>
      <RegisterTips>
        <P2>還沒有帳號？</P2>
        <BtnRegister medium>註冊</BtnRegister>
      </RegisterTips>
    </>
  );
};

export const Home = () => {
  return (
    <HomeBg>
      <Container>
        <Row className="flex-column">
          <Col xs={12} md={5} lg={3} className="mx-auto mt-5">
            <Image src={Logo} alt="logo" />
          </Col>
          <Col xs={12} md={10} lg={5} className="mx-auto">
            <Action>
              <Row className="flex-column">
                <Col xs={12} md={12} className="mx-auto">
                  <Head>
                    <TabLogin medium>登入</TabLogin>
                    <TabLogin>註冊</TabLogin>
                  </Head>
                  <Body>
                    <LoginBody />
                  </Body>
                </Col>
              </Row>
            </Action>
          </Col>
        </Row>
      </Container>

      <DecoPerson className="d-none d-md-block">
        <Image src={DecoHomePerson} />
      </DecoPerson>
    </HomeBg>
  );
};
