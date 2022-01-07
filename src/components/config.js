export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "24d8f710781e47c1b3d37a5073abb12d";
export const redirectUri = "https://moodify-sable.vercel.app/redirect";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-modify-playback-state",
  "user-read-recently-played",
  "playlist-read",
  "playlist-read-private",
];
