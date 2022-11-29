import { Col, Row } from "react-bootstrap";
import { Dropdown, InputWithIcon, LayoutBtn } from "../../../utilities/layout";
import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import {
  AiOutlineUnorderedList,
  AiOutlineAppstore,
  AiOutlineSync,
} from "react-icons/ai";
import { colors } from "../../../utilities/colors";
import { devices, devicesMax } from "../../../utilities/devices";

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

export const FilterBlock = () => {
  return (
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
            <TbAdjustmentsHorizontal
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
    </MainBlock>
  );
};
