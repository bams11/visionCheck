import styled from "styled-components";

export const PanelTitle = styled.div`
  width: 100%;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const PanelBody = styled.div`
  border: 2px solid black;
  flex: 1;
  height: 200px;
  padding-left: 10px;
`;

export const ImageInfoBody = styled(PanelBody)`
  width: 390px;
  line-height: 30px;
`;

export const ProcessedImageBody = styled(PanelBody)`
  width: 900px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
`;

export const OriginImageBody = styled(PanelBody)`
  display: flex;
  width: 400px;
  height: 396px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 0px;
`;
