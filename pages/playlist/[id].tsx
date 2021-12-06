import PlaylistDetail from "../../components/playlistDetail";
import playlist from "../../lib/api/playlist";

export default function playlistPage({ playlist }) {
  return <PlaylistDetail playlistDetailInfor={playlist} />;
}

export async function getServerSideProps(context) {
  const playlist_id = context.params.id;
  const playlistInfor = (await playlist.getPlaylistDetail(playlist_id)).data;
  return {
    props: {
      playlist: playlistInfor,
    },
  };
}
