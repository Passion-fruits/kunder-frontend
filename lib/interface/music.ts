export interface MusicInformation {
  song_id: number;
  user_id: number;
  cover_url: string;
  song_url: string;
  title: string;
  artist: string;
}

export interface Music extends MusicInformation {
  description: string;
  created_at: Date;
  genre: string;
  mood: string;
  like: string;
  comment: string;
  color_hex: string;
}
