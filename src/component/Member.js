import styled from "styled-components";
import { colors } from "../utilities/colors.js";
import { NavBar } from "./common/NavBar.js";
import { TabNav } from "./common/TabNav.js";

//Login後的會員首頁
const MemberBg = styled.div`
  background-color: ${colors.n2};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Member = ({ login, setLogin }) => {
  return (
    <MemberBg>
      <NavBar login={login} setLogin={setLogin} />
      <TabNav />
    </MemberBg>
  );
};
