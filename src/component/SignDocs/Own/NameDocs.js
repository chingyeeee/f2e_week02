import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { Caption, P1, P2, Title } from "../../../utilities/typography";
import { Container, Row, Col } from "react-bootstrap";
import { LightBg } from "../../../utilities/layout";
import { useState } from "react";

const Name = styled(LightBg)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.n1};
  box-shadow: 0 0 15px ${colors.shadowlv1};
  border-radius: 8px;
  padding: 32px;
  gap: 40px;
`;

const BtnBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnBack = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const BtnNext = styled(BtnBack)`
  background-color: ${colors.p1};
  color: ${colors.n1};
  border-radius: 4px;
  padding: 8px 12px;
`;

const NameFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  flex-grow: 1;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  input[type="text"] {
    padding: 12px 16px;
    border-radius: 4px;
    outline: 0;
    border: 1px solid ${colors.n5};
    font-size: 14px;
  }
`;

const FileNameInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid ${colors.n5};
`;

export const NameDocs = ({
  pdfByPages,
  fileName,
  setPdf,
  setDocName,
  setDocTags,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTag, setInputTag] = useState("");

  const saveDocName = () => {
    if (inputValue === "") return;
    setDocName(inputValue);
    setDocTags(inputTag);
  };

  return (
    <Name>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mx-auto">
            <NameBlock>
              <BtnBlock>
                <BtnBack onClick={() => setPdf(null)}>
                  <HiOutlineChevronLeft color={colors.p1} />
                  <P2 $mode="active">?????????</P2>
                </BtnBack>
                <BtnNext onClick={saveDocName}>
                  <P2 $mode="white">?????????</P2>
                  <HiOutlineChevronRight color={colors.n1} />
                </BtnNext>
              </BtnBlock>
              <NameFile>
                <InputBlock>
                  <Title $mode="black" bold>
                    ????????????
                  </Title>
                  <input
                    type="text"
                    placeholder="?????????????????????"
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    required
                  />
                </InputBlock>
                <InputBlock>
                  <Title $mode="black" bold>
                    ????????????
                  </Title>
                  <FileNameInput>
                    <Caption>
                      {pdfByPages.length === 1 ? "??????" : "??????"}
                    </Caption>
                    <P1 $mode="black" medium>
                      {fileName}
                    </P1>
                  </FileNameInput>
                </InputBlock>
                <InputBlock>
                  <Title $mode="black" bold>
                    ????????????
                  </Title>
                  <input
                    type="text"
                    onChange={(e) => setInputTag(e.target.value)}
                    placeholder="?????????????????????"
                  />
                </InputBlock>
              </NameFile>
            </NameBlock>
          </Col>
        </Row>
      </Container>
    </Name>
  );
};
