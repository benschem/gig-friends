let follows = [
  {
    id: 1,
    user_id: 1,
    artist_id: 1,
  },
  {
    id: 2,
    user_id: 2,
    artist_id: 2,
  },
];

export function getArtistsFollowedByUser(user) {
  const artistsFollowed = follows
    .filter((follow) => follow.user_id === user.id)
    .map((follow) => follow.artist_id);

  return artistsFollowed;
}

export function createFollow(user, artist) {
  const newFollow = {
    user_id: user.id,
    artist_id: artist.id,
    id: artists.length + 1,
  };
  follows.push(newFollow);
  return newFollow;
}
