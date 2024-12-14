import React from 'react';

// Define your redirect function
const redirectToSpotifyAuthorize = () => {
  const clientId = 'your_spotify_client_id';
  const redirectUri = 'your_redirect_uri';
  const scopes = 'user-read-private user-read-email';
  
  const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
  
  window.location.href = spotifyAuthorizeUrl;
};

// Define your component
const SpotifyButton = () => {
  return (
    <button onClick={redirectToSpotifyAuthorize}>
      Authorize with Spotify
    </button>
  );
};

export default SpotifyButton;
