import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { BsEye } from "react-icons/bs";
import { H5, Title } from "../../../utilities/typography";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineTags } from "react-icons/ai";
import { DocTag } from "../../../utilities/layout";

const DocsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`;

const DocTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const BtnTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BtnReview = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DocHeader = ({ docName, docTags }) => {
  return (
    <DocsHeader>
      <DocTitle>
        <BtnTitle>
          <FaRegEdit />
          <H5 $mode="black" bold>
            {docName}
          </H5>
        </BtnTitle>
        <BtnTitle>
          <AiOutlineTags />
          <DocTag $tag="teach">{docTags}</DocTag>
        </BtnTitle>
      </DocTitle>
      <BtnReview>
        <BsEye size="1.2rem" color={colors.n5} />
        <Title>預覽</Title>
      </BtnReview>
    </DocsHeader>
  );
};
