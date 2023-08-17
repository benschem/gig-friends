let artists = [
  {
    id: 1,
    name: "Vance Joy",
    spotify_url: "spotify.com/artist",
    image_url: "spotify.com/artist/image",
  },
  {
    id: 2,
    name: "David Guetta",
    spotify_url: "spotify.com/artist",
    image_url: "spotify.com/artist/image",
  },
];

export function allArtists() {
  return artists;
}

export function findArtistById(id) {
  return artists.find((artist) => artist.id === id);
}

export function createArtist(artist) {
  const newArtist = { ...artist, id: artists.length + 1 };
  artists.push(newArtist);
  return newArtist;
}
