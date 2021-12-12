import { FC } from "react";
import styled from "@emotion/styled";
import LoadImage from "../LoadImage";
import { ColorMap } from "./../../../styles/color";

interface Props {}

const ProfileCard: FC<Props> = () => {
  return (
    <Wrapper>
      <LoadImage
        border_radius="circle"
        size={200}
        src="https://newsimg.sedaily.com/2020/11/24/1ZAJ728KBG_1.jpg"
      />
      <h1>김팔복</h1>
      <h3>팔로워 0명</h3>
    </Wrapper>
  );
};

export default ProfileCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
