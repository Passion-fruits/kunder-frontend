import { FC } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "./../../../styles/color";

interface Props {}

const ImgUpload: FC<Props> = () => {
  return (
    <Wrapper>
      <div className="none" />
      <button>이미지 업로드</button>
    </Wrapper>
  );
};

export default ImgUpload;

const Wrapper = styled.div`
  width: 250px;
  & img,
  .none {
    width: 250px;
    height: 250px;
  }
  & .none {
    background: linear-gradient(45deg, #9a87ff, #00ff90);
  }
  & button {
    background-color: ${ColorMap.mainColor};
    color: ${ColorMap.grey000};
    width: 100%;
    height: 35px;
    font-size: 15px;
    border-radius: 3px;
    margin-top: 15px;
  }
`;
