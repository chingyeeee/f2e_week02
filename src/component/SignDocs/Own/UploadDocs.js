import { Container, Row, Col } from "react-bootstrap";
import { LightBg } from "../../../utilities/layout";
import styled from "styled-components";
import { colors } from "../../../utilities/colors";
import { P2, Title } from "../../../utilities/typography";
import { useState } from "react";

const Upload = styled(LightBg)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 82px);
`;

const TabMenu = styled.div`
  display: flex;
  gap: 24px;
  padding: 40px 60px 0;
  border-bottom: 1px solid ${colors.n3};
`;

const TabLink = styled(Title)`
  border-bottom: 2px solid
    ${(props) => (props.active ? colors.p1 : "transparent")};
  color: ${(props) => (props.active ? colors.p1 : colors.n5)};
  padding-bottom: 16px;
  cursor: pointer;
  h4 {
    font-weight: ${(props) => (props.active ? "700" : "400")};
    color: ${(props) => (props.active ? colors.p1 : colors.n6)};
    line-height: 20px;
  }
  &:hover {
    color: ${colors.p3};
  }
`;

const UploadBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.n1};
  box-shadow: 0 0 15px ${colors.shadowlv1};
  border-radius: 8px;
`;

const UploadFile = styled.div`
  padding: 40px 60px 0;
  input {
    display: none;
  }
`;

const LabelFile = styled.label`
  width: 100%;
  border: 1px dotted ${colors.n4};
  position: relative;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  background-color: ${colors.n1};
`;

const FileBtnBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 30%;
  height: 44px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const FileBtn = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.main ? colors.p1 : colors.n1)};
  border-radius: 4px;
  border: 1px solid ${colors.p1};
  padding: 12px 20px;
  color: ${colors.p1};
  text-align: center;
  &:hover {
    background-color: ${(props) => (props.main ? colors.p3 : colors.p2)};
    color: ${colors.p1};
  }
`;

const Remind = styled.div`
  padding: 16px 0 40px;
`;

export const UploadDocs = () => {
  // Upload檔案進度
  // const [uploadPercent, setUploadPercent] = useState(0);

  // const UploadProgess = (e) => {
  //   let percent = ((e.loaded / e.total) * 100).toFixed(2);
  //   setUploadPercent(percent);
  // };

  const onFileUpload = async (e) => {
    const fileList = e.target.files;

    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
    }
  };

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  }

  return (
    <Upload>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mx-auto">
            <UploadBlock>
              <TabMenu>
                <TabLink active>上傳檔案</TabLink>
                <TabLink>掃描檔案</TabLink>
                <TabLink>歷史上傳</TabLink>
              </TabMenu>
              <UploadFile>
                <LabelFile>
                  <input
                    id="fileUploader"
                    type="file"
                    accept="image/png,application/pdf"
                    onChange={onFileUpload}
                  />
                  <FileBtnBlock>
                    <FileBtn>
                      <Title $mode="active">選擇檔案 (PDF / png)</Title>
                    </FileBtn>
                    <P2>或直接拖放檔案進來</P2>
                  </FileBtnBlock>
                </LabelFile>
                <Remind>
                  <P2>檔案大小不得超過 10 MB</P2>
                </Remind>
              </UploadFile>
            </UploadBlock>
          </Col>
        </Row>
      </Container>
    </Upload>
  );
};
