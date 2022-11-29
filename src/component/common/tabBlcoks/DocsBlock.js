import { Col, Row } from "react-bootstrap";
import { Image } from "../../../utilities/layout";
import styled from "styled-components";
import IconEmpty from "../../../img/icons/icon-empty-state.svg";
import { P1 } from "../../../utilities/typography";
import { devices } from "../../../utilities/devices";

const MainBlockInner = styled(Row)`
  position: relative;
`;

const EmptyState = styled.div`
  position: absolute;
  width: 50%;
  left: 0;
  right: 0;
  top: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  img {
    @media ${devices.tabletH} {
      width: 25%;
    }
  }
`;

export const DocsBlock = () => {
  return (
    <MainBlockInner>
      <Col xs={12} md={6} lg={3}></Col>
      <EmptyState>
        <Image src={IconEmpty} />
        <P1>目前尚無需簽署的文件</P1>
      </EmptyState>
    </MainBlockInner>
  );
};
