import styled from "styled-components";
import { colors } from "./colors";
import IconDown from "../img/icons/icon-down.svg";
import { devices, devicesMax } from "./devices";

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const BtnStyle = styled.button`
  background-color: ${(props) => (props.main ? colors.p1 : colors.n1)};
  border-radius: 4px;
  border: 1px solid ${colors.p1};
  padding: 12px 20px;
  &:hover {
    background-color: ${(props) => (props.main ? colors.p3 : colors.p2)};
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  max-width: 180px;
  padding: 0.75rem;
  border: 1px solid ${colors.n5};
  color: ${colors.n6};
  border-radius: 4px;
  outline: 0;
  /* Arrow */
  appearance: none;
  background-image: url(${IconDown});
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 1.5rem auto;
  @media ${devices.tabletH} {
    background-size: 1.5rem auto;
  }
`;

export const InputWithIcon = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: ${colors.n1};
  border: 1px solid ${colors.n5};
  overflow: hidden;
  @media ${devicesMax.tabletH} {
    width: 100%;
  }
  @media ${devices.tabletH} {
    max-width: 180px;
  }
  .input-icon {
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  input {
    padding: 12px 16px 12px 48px;
    outline: 0;
    border: 0;
    color: ${colors.n7};
    max-width: 100%;
  }
`;

export const LayoutBtn = styled.div`
  display: flex;
  align-items: center;
  .layout-list {
    border-radius: 4px 0 0 4px;
    padding: 10px;
    background-color: ${colors.n1};
    color: ${colors.n5};
    border: 0;
  }
  .active-layout {
    background-color: ${colors.p1};
    color: ${colors.n1};
  }
  .layout-block {
    border-radius: 0 4px 4px 0;
    padding: 10px;
    background-color: ${colors.n1};
    color: ${colors.n5};
    border: 0;
  }
`;

export const WhiteBg = styled.section`
  background-color: ${colors.n1};
`;

export const LightBg = styled.section`
  background-color: ${colors.n2};
  display: flex;
  flex-direction: column;
`;
