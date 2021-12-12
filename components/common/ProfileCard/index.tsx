import { FC } from "react";
import styled from "@emotion/styled";
import LoadImage from "../LoadImage";
import { ColorMap } from "./../../../styles/color";
import { ProfileCard } from "../../../lib/interface/profile";
import { useRouter } from "next/dist/client/router";

interface Props {
  profile: ProfileCard;
}

const ProfileCard: FC<Props> = ({ profile }) => {
  const router = useRouter();
  return (
    <Wrapper>
      <div onClick={() => router.push(`/profile/${profile.id}`)}>
        <LoadImage border_radius="circle" size={200} src={profile.image_path} />
      </div>
      <h1>{profile.name}</h1>
      <h3>팔로워 {profile.follower}명</h3>
    </Wrapper>
  );
};

export default ProfileCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    cursor: pointer;
  }
  & h1 {
    color: ${ColorMap.grey000};
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  & h3 {
    font-size: 15px;
    color: ${ColorMap.grey300};
    margin-top: 5px;
    font-weight: 400;
  }
`;
