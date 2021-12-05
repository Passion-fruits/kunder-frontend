import PlaylistDetail from "../../components/playlistDetail";
import playlist from "../../lib/api/playlist";

export default function playlistPage({ playlist }) {
  return <PlaylistDetail playlistDetailInfor={playlist} />;
}

export async function getServerSideProps() {
  const playlistInfor = (await playlist.getPlaylistDetail()).data;
  return {
    props: {
      playlist: playlistInfor,
    },
  };
}
