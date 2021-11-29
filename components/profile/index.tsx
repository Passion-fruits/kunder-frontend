import { FC } from "react";
import * as S from "./styles";
import Information from "./Information/index";
import MenuTab from "./MenuTab";

interface Props {}

const Profile: FC<Props> = () => {
  return (
    <S.Wrapper>
      <Information />
      <MenuTab />
    </S.Wrapper>
  );
};

export default Profile;
