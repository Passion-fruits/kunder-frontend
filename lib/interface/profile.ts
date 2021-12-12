type SNS = string | null;

export interface Profile {
  name: string;
  bio: string;
  profile: string;
  email: string;
  insta: SNS;
  facebook: SNS;
  soundcloud: SNS;
  youtube: SNS;
  song_count: string;
  playlist_count: string;
  follower: string;
  following: string;
}

export interface ProfileCard {
  name: string;
  image_path: string;
  id: number;
  follower: number;
}
