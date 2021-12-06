import MusicDetail from "../../components/musicDetail";
import music from "../../lib/api/music";

export default function musicDetail({ music }) {
  return <MusicDetail music={music} />;
}

export async function getServerSideProps(context) {
  const song_id = context.params.id;
  const musicInfor = (await music.getMusicDetail(song_id)).data;
  return {
    props: {
      music: musicInfor,
    },
  };
}
