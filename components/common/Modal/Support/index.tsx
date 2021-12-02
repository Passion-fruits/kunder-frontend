import styled from "@emotion/styled";
import { FC } from "react";
import { ColorMap } from "../../../../styles/color";

const Support: FC = () => {
  return (
    <Wrapper>
      <h1>후원하기</h1>
      <p>후원 후 아티스트와 소통하세요!</p>
      <span className="support-price-title">
        후원 별풍선 <strong>( 10개 이상부터 가능합니다 )</strong>
      </span>
      <input type="number" defaultValue={0} />
      <span className="my-coin-count">
        보유 별풍선 <b>10개</b>
      </span>
      <button>후원하기</button>
    </Wrapper>
  );
};

export default Support;

export const Wrapper = styled.div`
  width: 500px;
  padding: 40px 50px;
  border-radius: 10px;
  background-color: ${ColorMap.grey800};
  & h1 {
    font-size: 25px;
    color: ${ColorMap.grey000};
  }
  & p {
    font-size: 17px;
    color: ${ColorMap.grey200};
    margin-top: 5px;
  }
  & .support-price-title {
    font-size: 18px;
    font-weight: 500;
    color: ${ColorMap.grey000};
    margin-top: 25px;
    display: flex;
    align-items: center;
    & strong {
      font-size: 15px;
      font-weight: 400;
      color: ${ColorMap.green100};
      margin-left: 10px;
    }
  }
  & input[type="number"] {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    background-color: ${ColorMap.grey900};
    color: ${ColorMap.grey000};
    margin: 15px 0;
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
  }
  & .my-coin-count {
    font-size: 17px;
    color: ${ColorMap.grey000};
    & b {
      color: ${ColorMap.mainColor};
    }
  }
  & button {
    width: 100%;
    height: 50px;
    color: ${ColorMap.grey000};
    font-size: 18px;
    font-weight: bold;
    margin-top: 25px;
    background-color: ${ColorMap.mainColor};
    border-radius: 5px;
  }
`;
