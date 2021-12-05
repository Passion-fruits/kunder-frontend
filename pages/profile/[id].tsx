import Profile from "../../components/profile";
import profile from "../../lib/api/profile";

export default function profilePage({ profile }) {
  return <Profile profile={profile} />;
}

export async function getServerSideProps() {
  const profileObj = (await profile.getProfileDetail()).data;
  return {
    props: {
      profile: profileObj,
    },
  };
}
