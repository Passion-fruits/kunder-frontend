import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1100px;
  padding: 25px 50px;
  border-radius: 10px;
  background-color: ${ColorMap.grey800};
`;

export const Description = styled.div`
  border-left: 3px solid ${ColorMap.mainColor};
  padding: 3px 15px;
  font-size: 17px;
  color: ${ColorMap.grey200};
`;

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const InputWrap = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & .container {
    width: 48%;
  }
`;

export const Mp3UploadWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & button {
    color: ${ColorMap.red100};
    border: 1px solid ${ColorMap.red100};
    font-size: 16px;
    width: 100px;
    height: 40px;
    border-radius: 5px;
  }
  & span {
    color: ${ColorMap.blue100};
    font-size: 16px;
    font-weight: 500;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: ${ColorMap.mainColor};
  font-size: 20px;
  font-weight: 500;
  color: ${ColorMap.grey000};
`;

export const Alert = styled.p`
  color: ${ColorMap.grey200};
  font-size: 16px;
  margin-top: 30px;
  & b {
    font-weight: 500;
    color: ${ColorMap.green100};
  }
`;
