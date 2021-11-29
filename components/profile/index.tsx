import { FC } from "react";
import * as S from "./styles";
import Information from "./Information/index";

interface Props {}

const Profile: FC<Props> = () => {
  return (
    <S.Wrapper>
      <Information />
    </S.Wrapper>
  );
};

export default Profile;
