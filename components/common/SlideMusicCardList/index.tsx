import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ShowMusicCard from "./Card";
import { Music } from "../../../lib/interface/music";

interface Props {
  data?: Music[];
}

const SlideCardList: FC<Props> = ({ data }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(4);

  useEffect(() => {
    let index = currentCardIndex;
    data.length > 0 &&
      window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0 && index < data.length - 1) {
          setCurrentCardIndex(index + 1);
          index++;
        } else if (event.deltaY < 0 && index > 0) {
          setCurrentCardIndex(index - 1);
          index--;
        }
      });
  }, [data]);

  return (
    <FlexWrap>
      <ShowMusicWrapper index={currentCardIndex}>
        {data.map((obj, index) => (
          <ShowMusicCard
            key={index}
            currentShow={currentCardIndex === index}
            setCurrentIndex={setCurrentCardIndex}
            index={index}
            music={obj}
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
