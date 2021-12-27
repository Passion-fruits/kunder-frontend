import styled from "@emotion/styled";
import { FC, useState } from "react";
import InfiniteCroll from "../common/InfiniteScroll";
import { ColorMap } from "./../../styles/color";

const History: FC = () => {
  const [option, setOption] = useState(1);
  const handleSelect = ({ target }) => {
    setOption(parseInt(target.value));
  };
  return (
    <Wrapper>
      <select onChange={handleSelect}>
        <option value={1}>청취 기록</option>
        <option value={2}>좋아요 표시한 음악</option>
      </select>
      {option === 1 ? (
        <InfiniteCroll type="userHistory" />
      ) : (
        <InfiniteCroll type="userLikeMusic" />
      )}
    </Wrapper>
  );
};

export default History;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  & select {
    width: 230px;
    height: 45px;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 500;
    color: ${ColorMap.grey200};
    background: ${ColorMap.grey700};
  }
`;
