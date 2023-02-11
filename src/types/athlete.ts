export type DetailedAthlete = {
  id: number;
  username: string; // no info in API
  resource_state: 1 | 2 | 3;
  firstname: string;
  lastname: string;
  bio: string; //  no info in API
  city: string;
  state: string;
  country: string | null;
  sex: "M" | "F";
  premium: boolean; // API: Deprecated. Use summit field instead.
  summit: false;
  created_at: Date; // ISO 8601 format
  updated_at: Date;
  badge_type_id: number; //  no info in API
  weight: number;
  profile_medium: string;
  profile: string;
  friend: number | null;
  follower: number | null;
  /* no data in the response for scope=read_all
    measurement_preference: "feet" | "meters";
    ftp: number;
    clubs: SummaryClubs;
    bikes: SummaryGear;
    shoes: SummaryGear;
  */
};

export type AthleteDTO = {
  token_type: "Bearer";
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: DetailedAthlete;
};
