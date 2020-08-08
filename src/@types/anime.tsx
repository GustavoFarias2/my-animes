type Anime = {
  id: number,
  type: string,
  attributes: {
    createdAt: string,
    updatedAt: string,
    slug: string,
    synopsis: string,
    coverImageTopOffset: string,
    titles: {
      en: string,
      en_jp: string,
      ja_jp: string
    },
    canonicalTitle: string,
    abbreviatedTitles: string[],
    averageRating: string,
    ratingFrequencies: {
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
      7: string,
      8: string,
      9: string,
      10: string,
      11: string,
      12: string,
      13: string,
      14: string,
      15: string,
      16: string,
      17: string,
      18: string,
      19: string,
      20: string
    },
    userCount: number,
    favoritesCount: number,
    startDate: string,
    endDate: string,
    popularityRank: number,
    ratingRank: number,
    ageRating: string,
    ageRatingGuide:  string,
    subtype: string,
    status: string,
    posterImage: {
      tiny: string,
      small: string,
      medium: string,
      large: string,
      original: string
    },
    coverImage: {
      tiny: string,
      small: string,
      medium: string,
      large: string,
      original: string
    },
    episodeCount: number,
    episodeLength: number,
    totalLength: number,
    nsfw: boolean
  }
}

export default Anime;
