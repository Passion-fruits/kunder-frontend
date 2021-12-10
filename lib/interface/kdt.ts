export interface MyKdt {
  add_kdt: string;
  donate_kdt: string;
  reward_kdt: string;
  total_kdt: string;
}

export interface KdtCard {
  coinCnt: number;
  price: number;
}

export interface SupportCardType {
  amount: number;
  answer: string;
  artist: string;
  artist_id: number;
  artist_profile: string;
  message_id: number;
  name: string;
  profile: string;
  question: string;
  tx_hash: string;
  user_id: number;
}
