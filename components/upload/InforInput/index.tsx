import { FC } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "./../../../styles/color";

interface Props {
  type: "input" | "textarea" | "select";
  title: string;
}

const InforInput: FC<Props> = ({ type, title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {(() => {
        switch (type) {
          case "input":
            return <input type="text" placeholder="음악 제목이 무엇인가요?" />;
          case "select":
            return (
              <select>
                <option value="">힙합음악</option>
              </select>
            );
          case "textarea":
            return <textarea placeholder="곡에 대한 설명을 적어주세요!" />;
        }
      })()}
    </Wrapper>
  );
};

export default InforInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    border: 1px solid ${ColorMap.grey300};
    color: ${ColorMap.grey100};
    font-size: 17px;
    border-radius: 5px;
    padding: 0 15px;
    &::placeholder {
      color: ${ColorMap.grey200};
    }
  }
  & textarea {
    height: 200px;
    padding-top: 15px;
  }
`;
