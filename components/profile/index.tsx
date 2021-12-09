import { FC } from "react";
import * as S from "./styles";
import Information from "./Information/index";
import MenuTab from "./MenuTab";
import { Profile } from "./../../lib/interface/profile";
import { useRouter } from "next/dist/client/router";

interface Props {
  profile: Profile;
}

const Profile: FC<Props> = ({ profile }) => {
  const router = useRouter();
  return (
    <S.Wrapper>
      <Information profile={profile} />
      <MenuTab user_id={router.query.id}   />
    </S.Wrapper>
  );
};

export default Profile;
