import Profile from "../../components/profile";
import profile from "../../lib/api/profile";

export default function profilePage({ profile }) {
  return <Profile profile={profile} />;
}

export async function getServerSideProps(context) {
  const user_id = context.params.id;
  const profileObj = (await profile.getProfileDetail(user_id)).data;
  return {
    props: {
      profile: profileObj,
    },
  };
}
