import { FC, useState } from "react";
import styled from "@emotion/styled";
import ShowMusicCard from "./Card";
import { Music } from "../../../lib/interface/music";

interface Props {
  data?: Music[] | number[];
}

const SlideCardList: FC<Props> = ({
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(4);
  return (
    <FlexWrap>
      <ShowMusicWrapper index={currentCardIndex}>
        {data.map((obj, index) => (
          <ShowMusicCard
            key={index}
            currentShow={currentCardIndex === index}
            setCurrentIndex={setCurrentCardIndex}
            index={index}
          />
        ))}
      </ShowMusicWrapper>
    </FlexWrap>
  );
};

export default SlideCardList;

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ShowMusicWrapper = styled.div<{ index }>`
  width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  gap: 40px;
  transform: ${({ index }) => `translateX(-${200 * index + 40 * index}px)`};
  transition: 0.5s;
`;
