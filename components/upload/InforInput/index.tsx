import { FC } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "./../../../styles/color";

interface Props {}

const InforInput: FC<Props> = () => {
  return (
    <Wrapper>
      <h1>제목</h1>
    </Wrapper>
  );
};

export default InforInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & h1 {
    font-size: 18px;
    color: ${ColorMap.grey000};
    &::after {
      content: "*";
      margin-left: 5px;
      color: ${ColorMap.red100};
    }
  }
  & input,
  textarea,
  select {
    width: 100%;
    height: 50px;
  }
`;
