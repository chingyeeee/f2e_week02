import styled from "styled-components";
import { colors } from "../utilities/colors.js";
import { Image } from "../utilities/layout.js";
import Logo from "../img/common/logo.svg";
import DecoHomePerson from "../img/deco-home-person.svg";
import { Col, Container, Row } from "react-bootstrap";
import { P1, P2 } from "../utilities/typography.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const HomeBg = styled.section`
  background-color: ${colors.p2};
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Action = styled.div`
  margin-top: 50px;
  background-color: ${colors.n1};
  border-radius: 8px;
  box-shadow: 0 0 15px ${colors.shadowlv1};
`;

const DecoPerson = styled.div`
  width: 10%;
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
`;

const LoginTips = styled(P2)`
  position: relative;
  margin: 32px 0;
  color: ${colors.n5};
  &::before {
    content: "";
    position: absolute;
    width: 35%;
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
    width: 35%;
    height: 1px;
    background-color: ${colors.n5};
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

export const Home = () => {
  return (
    <HomeBg>
      <Container>
        <Row className="flex-column">
          <Col xs={12} md={3} className="mx-auto">
            <Image src={Logo} alt="logo" />
          </Col>
          <Col xs={12} md={6} className="mx-auto">
            <Action>
              <Row className="flex-column">
                <Col xs={12} md={12} className="mx-auto">
                  <Head>
                    <TabLogin medium>登入</TabLogin>
                    <TabLogin>登入</TabLogin>
                  </Head>
                  <Body>
                    <Row className="justify-content-center">
                      <Col xs={6} className="text-end">
                        <LoginType>
                          <FontAwesomeIcon
                            className="px-1"
                            icon={faFacebookF}
                            size="xl"
                          />
                        </LoginType>
                      </Col>
                      <Col xs={6}>
                        <LoginType>
                          <FontAwesomeIcon icon={faGoogle} size="xl" />
                        </LoginType>
                      </Col>
                    </Row>
                    <LoginTips className="text-center">
                      或使用電子信箱登入
                    </LoginTips>
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
