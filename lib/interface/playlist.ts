import { music } from "./music";

export interface Playlist {
  name: string;
  cover_url: string;
  created_at: Date;
  user_id: string;
  author: string;
  like: string;
}

export interface PlaylistDetailType {
  playlist: Playlist;
  songs: music[];
}
