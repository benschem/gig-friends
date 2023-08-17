const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

let concerts = [
  {
    id: 1,
    artist_id: 1,
    date: tomorrow,
    location: "Melbourne",
    description:
      "A huge concert! It will be so much fun. You should go with some new friends from this app.",
    venue: "MCG",
    lat: "-37.840935",
    lang: "144.946457",
  },
  {
    id: 2,
    artist_id: 2,
    date: tomorrow,
    location: "Paris",
    description:
      "Un énorme concert! Ce sera tellement amusant. Vous devriez aller avec de nouveaux amis de cette app.",
    venue: "Stade de France",
    lat: "48.864716",
    lang: "2.349014",
  },
];

export function allConcerts() {
  return concerts;
}

export function findConcertById(id) {
  return concerts.find((concert) => concert.id === id);
}

export function createConcert(concert) {
  const newConcert = { ...concert, id: concerts.length + 1 };
  concerts.push(newConcert);
  return newConcert;
}
