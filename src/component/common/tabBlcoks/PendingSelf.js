import { Col, Container, Row } from "react-bootstrap";
import {
  Dropdown,
  Image,
  InputWithIcon,
  LayoutBtn,
  LightBg,
} from "../../../utilities/layout";
import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import {
  AiOutlineUnorderedList,
  AiOutlineAppstore,
  AiOutlineSync,
} from "react-icons/ai";
import { colors } from "../../../utilities/colors";
import { devices, devicesMax } from "../../../utilities/devices";
import IconEmpty from "../../../img/icons/icon-empty-state.svg";
import { P1 } from "../../../utilities/typography";

const MainBlock = styled(Row)`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.n3};
`;

const FilterTypeBlock = styled.div`
  display: flex;
  align-items: center;

  .btn-block {
    display: flex;
    gap: 32px;
    align-items: center;
  }
  @media ${devices.tabletH} {
    gap: 32px;
    justify-content: flex-end;
  }
  @media ${devicesMax.tabletH} {
    flex-wrap: wrap;
    width: 100%;
    .btn-layout {
      margin-left: auto;
      margin-right: 16px;
    }
    .btn-block {
      gap: 16px;
      width: 100%;
      padding: 24px 0 12px 0;
    }
  }
`;

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

export const PendingSelf = () => {
  return (
    <LightBg>
      <Container className="position-relative">
        <MainBlock>
          <Col lg={4} className="d-none d-lg-block">
            <Row>
              <Col lg={6}>
                <Dropdown>
                  <option>全部</option>
                  <option>即將過期</option>
                </Dropdown>
              </Col>
              <Col lg={6}>
                <Dropdown>
                  <option>標籤類別</option>
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                  <option>d</option>
                  <option>e</option>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={8}>
            <FilterTypeBlock>
              <InputWithIcon>
                <HiOutlineSearch
                  className="input-icon"
                  color={colors.n5}
                  size="1.5rem"
                />
                <input type="text" placeholder="搜尋" />
              </InputWithIcon>
              <div className="btn-block">
                <HiOutlineAdjustmentsHorizontal
                  className="d-lg-none"
                  color={colors.n6}
                  size="1.5rem"
                />
                <LayoutBtn className="btn-layout">
                  <button className="layout-list active-layout">
                    <AiOutlineUnorderedList size="1.5rem" />
                  </button>
                  <button className="layout-block">
                    <AiOutlineAppstore size="1.5rem" />
                  </button>
                </LayoutBtn>
                <AiOutlineSync color={colors.n6} size="1.5rem" />
              </div>
            </FilterTypeBlock>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <MainBlockInner></MainBlockInner>
          </Col>
        </MainBlock>
        <MainBlockInner>
          <Col xs={12} md={6} lg={3}></Col>
          <EmptyState>
            <Image src={IconEmpty} />
            <P1>目前尚無需簽署的文件</P1>
          </EmptyState>
        </MainBlockInner>
      </Container>
    </LightBg>
  );
};
