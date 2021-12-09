import { Music } from "./music";

export interface Playlist {
  name: string;
  cover_url: string;
  created_at: Date;
  playlist_id: string;
  author: string;
  like: string;
  user_id: string;
}

export interface PlaylistDetailType {
  playlist: Playlist;
  songs: Music[];
}
