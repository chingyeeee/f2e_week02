import { devices } from "../../../utilities/devices";
import styled from "styled-components";
import { Image } from "../../../utilities/layout";
import IconEmpty from "../../../img/icons/icon-empty-state.svg";
import { P1 } from "../../../utilities/typography";

const Empty = styled.div`
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

export const EmptyState = () => {
  return (
    <Empty>
      <Image src={IconEmpty} />
      <P1>目前尚無需簽署的文件</P1>
    </Empty>
  );
};
