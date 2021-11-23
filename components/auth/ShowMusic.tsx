import { FC, useState } from "react";
import * as S from "./styles";
import ShowMusicCard from "./ShowMusicCard";

interface Props {}

const ShowMusic: FC<Props> = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(4);
  return (
    <S.FlexWrap>
      <S.ShowMusicWrapper index={currentCardIndex}>
        {data.map((obj, index) => (
          <ShowMusicCard
            key={index}
            currentShow={currentCardIndex === index}
            setCurrentIndex={setCurrentCardIndex}
            index={index}
          />
        ))}
      </S.ShowMusicWrapper>
    </S.FlexWrap>
  );
};

export default ShowMusic;
