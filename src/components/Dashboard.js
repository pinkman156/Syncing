import { React, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

var cors = require("cors");

const spotifyApi = new SpotifyWebApi({
  clientId: "24d8f710781e47c1b3d37a5073abb12d",
});

export default function Dashboard(props) {
  const accessToken = props.token;

  const [name, setName] = useState("");

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    const res = spotifyApi.getMe().then((e) => {
      setName(e.body.display_name);
    });
    // if (accessToken) {
    //   getTrack();
    //   setLoad(true);
    // }
  }, [accessToken]);

  return (
    <div>
      <h1>logged in {name}</h1>
    </div>
  );
}
