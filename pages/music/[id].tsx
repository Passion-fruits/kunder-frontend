import MusicDetail from "../../components/musicDetail";
import music from "../../lib/api/music";

export default function musicDetail({ music }) {
  return <MusicDetail music={music} />;
}

export async function getServerSideProps() {
  const musicInfor = (await music.getMusicDetail()).data;
  return {
    props: {
      music: musicInfor,
    },
  };
}
